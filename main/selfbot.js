const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const fs = require("fs")

const { RichPresence, Util } = require('discord.js-selfbot-rpc');

client.on('ready', async() => { 
      const applicationId = fs.readFileSync(process.cwd()+"/database/appid.txt", "utf8"); 

    const Large = await Util.getAssets(applicationId, fs.readFileSync(process.cwd()+"/database/largeid.txt", "utf8")); 
    const Small = await Util.getAssets(applicationId, fs.readFileSync(process.cwd()+"/database/smallid.txt", "utf8")); 

    const presence = new RichPresence()
        .setStatus('idle') 
        .setType('PLAYING') 
        .setApplicationId(applicationId)
        .setName(fs.readFileSync(process.cwd()+"/database/name.txt", "utf8"))
        .setDetails(fs.readFileSync(process.cwd()+"/database/des.txt", "utf8"))
        .setState(fs.readFileSync(process.cwd()+"/database/state.txt", "utf8"))
        .setAssetsLargeImage(Large.id)
        .setAssetsLargeText(fs.readFileSync(process.cwd()+"/database/mtext.txt", "utf8"))
        .setAssetsSmallImage(Small.id)
        .setAssetsSmallText(fs.readFileSync(process.cwd()+"/database/stext.txt", "utf8"))
        .setTimestamp();
    client.user.setPresence(presence.toData());

    client.user.setPresence(presence.toData());
    console.log('Started hosting selfbot');

    console.log(`Login as ${client.user.tag}`);
});

client.login(fs.readFileSync(process.cwd()+"/database/token.txt", "utf8"));
