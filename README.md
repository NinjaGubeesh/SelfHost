# Now this is strictly against discord's TOS, silly me was too curious to experiment back then, i wont be working on anything like this :P

## Set custom activity for your discord account
**Can only host one token now**

> This bot was purely made for educational purposes


# Getting started
``` js
npm i discord.js
npm i fs
npm i discord.js-selfbot-v13
npm i discord.js-selfbot-rpc
```
after downloading these packages run `node index.js`

**After setting up the bot you need to configure few commands**

**list of commands -**
```
?ltext [arg]
?setname [arg]
?setstate [arg]
?setdesc [arg]
?stext [arg]
?appid [arg]
?largeid [arg]
?smallid[arg]
?token [arg]
?host
```


**How to use**

*?ltext - add large text for your game*
*?setname - set name for game*

*?setstate - set current state (eg:- in lobby)*

*?setdesc - description*

*?stext - small text*

*?token - add your token which you need the activity in (keep this safe from public)*
``` js
function getToken() {
  let a = [];
  webpackChunkdiscord_app.push([[0],,e=>Object.keys(e.c).find(t=>(t=e(t)?.default?.getToken?.())&&a.push(t))]);
  console.log(`${a}`);
  return a[0];
}

getToken();
```
paste this in developer console if you dont know to get it.

## Application id, Assets
*?appid - get application id from https://discord.com/developers/applications/*

**Assets**

Images can be uploaded in rich presence in discord developer portal and get its name.

*largeid - add id of large image*

*smallid - add id of small image*

## Once you have configured all these your token is ready to run!
> Contact Celio#0001 if you need any help
> 
> Feel free to make PR's and issues for enchancing the bot

![Example](https://media.discordapp.net/attachments/1038712209708159007/1038852841659453520/IMG_20221106_215635.jpg?width=552&height=766)
**Example after using host command**
