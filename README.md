# Twilio-SMS-Demo

### What is this? ###

This is a short demo to illustrate how Launchdarkly feature flagging and experimentation can be used on a media subject such as SMS. I have cannibalised one of their tutorial apps in order to build this out.

### What do I need to run it? ###

You would need a Twilio Trial Account as they will provide a telephone number and destination for your SMS.

- Setup your SMS Delivery Number in a Twilio Trial Account. 
- Add the number and the associated country code (001 for the US or 0044 for the UK)
- Clone this repo
- Open terminal and navigate to the cloned repo
- Add your Delivery Number to both the package.json and create a `.env` file in the format of:

```
SID= <<Twilio SID>>
TOKEN= <<Twilio Token>>
FLAG_NAME= <<JSON Flag Key>>
LD_SDK_KEY= <<LD Server side SDK Key>>
PERSONAL_NO= <<Recipient No>>
SMS_ENDPOINT= <<>>
ID= <<Made up ID>>
```
- Run the command `npm run start`

