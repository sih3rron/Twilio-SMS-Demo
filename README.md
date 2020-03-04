# Twilio-SMS-Demo

### What is this? ###
This is a short demo to illustrate how Launchdarkly feature flagging and experimentation can be used on a media subject such as SMS. I have cannibalised one of their tutorial apps in order to build this out.

### What do I need to run it? ###
You would need: 

1. a Twilio Trial Account as they will provide a telephone number and destination for your SMS **OR** you can request the SID/TOKEN/SMS Delivery Number from Simon.

2. a LaunchDarkly Account with access to Experimentation, in order to set up the Feature Flag, Metric, and Experiment.

### Running the app ###
> **NOTE:** Replace anything you see in chevrons `<< These are Chevrons >>`. This includes the chevrons themselves.

- Setup your SMS Delivery Number in a Twilio Trial Account OR request a UK/US number from Simon.
- Clone this repo: 

`https://github.com/siherrondemo/Twilio-SMS-Demo.git`.

- Open a command line and navigate to the cloned repo.
- Run `npm install` to add all of the Node Dependencies.
- Install the Twilio Command Line: https://www.twilio.com/docs/twilio-cli/quickstart
- Install NGROK: https://ngrok.com/download 
- In your LaunchDarkly Environment create a JSON Flag with this JSON as the basis:

```
[{
  "body": "<< Whatever You want the SMS to say.>>",
  "from": "<< Replace with the Twilio SMS Delivery Number >>"
}]
```
- In LaunchDarkly setup a Custom Conversion Event called: `SMS-Response-Received`.
- Add your Twilio Delivery Number to both the package.json and create a `.env` file in the format of:

```
SID= <<Twilio SID>>
TOKEN= <<Twilio Token>>
FLAG_NAME= <<JSON Flag Key>>
LD_SDK_KEY= <<LD Server side SDK Key>>
PERSONAL_NO= <<Recipient No>>
SMS_ENDPOINT= <<SMS Delivery Number>>
ID= <<Made up ID>>
```
> **NOTE:** If you were to use this in production you would likely use Telephone Number as your ID. As this is a demo, you would likely want more control in order to demonstrate Experiment Variations, thus we use a persistent, dummy ID instead.

- Run the command `npm run start`

** Happy Demoing **
