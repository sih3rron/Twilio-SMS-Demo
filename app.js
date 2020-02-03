'use strict'

const express = require('express');
const LaunchDarkly = require('launchdarkly-node-server-sdk');
let uuid = require('uuid/v4');
require('dotenv').config();

const accountSid = process.env.SID;
const authToken =  process.env.TOKEN;
const user =  {
  "key": process.env.ID
};
const twilioClient = require('twilio')(accountSid, authToken);

let ldClient = LaunchDarkly.init(process.env.LD_SDK_KEY);

ldClient.once("ready",
  function() {
    ldClient.variation(process.env.FLAG_NAME, user, false,
      function(err, smsMsg){
        if(smsMsg){
          console.log(smsMsg[0]);
          twilioClient.messages
          .create({
            body: smsMsg[0].body,
            from: smsMsg[0].from,
            to: smsMsg[0].to
          })
          .then(
            message => console.log(message.sid)
          );
        }
        else {
          twilioClient.messages
          .create({
            body: 'This is just a default text msg.',
            from: '+447588738469',
            to: process.env.PERSONAL_NO
          })
          .then(
            message => console.log(message.sid)
          );
        }
      });
});
