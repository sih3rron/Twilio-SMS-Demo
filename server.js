const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const LaunchDarkly = require('launchdarkly-node-server-sdk');
const events = require('events');
require('dotenv').config();

const app = express();

app.post('/sms', function(req, res){

  const eventEmitter = new events.EventEmitter();
  const twiml = new MessagingResponse();

  twiml.message('Thank you for subscribing to CatFacts.');

  res.writeHead(200, {'content-type': 'text/xml'});
  res.end(twiml.toString());

  let ldClient = LaunchDarkly.init(process.env.LD_SDK_KEY);

  const user =  {
    "key": process.env.ID,
    "Telephone": process.env.PERSONAL_NO
  };

  eventEmitter.on('ping', function(data){
    ldClient.track("SMS-Response-Received", user);
    console.log("LD Event Sent. "+ user.key);
  });
  eventEmitter.emit('ping');
});

http.createServer(app).listen(1337, function(){
  console.log("Express Server listening on Port 1337");
});
