/*
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const { RichPresence, Util } = require('discord.js-selfbot-rpc');

client.on('ready', async() => { 
    const applicationId = '1038077270486683728'; 

    const Large = await Util.getAssets(applicationId, 'img_20221104_184722'); 
    const Small = await Util.getAssets(applicationId, '0a06758f23be156941bc39e08a45fd3f'); 

    const presence = new RichPresence()
        .setStatus('idle') 
        .setType('PLAYING') 
        .setApplicationId(applicationId)
        .setName('With Sweet Dreams')
        .setDetails('You know about those days?')
        .setState('I could never realize')
        .setAssetsLargeImage(Large.id)
        .setAssetsLargeText('Sleeping')
        .setAssetsSmallImage(Small.id)
        .setAssetsSmallText('This isnt the right way')
        .setTimestamp();


    console.log('Started hosting selfbot');

    console.log(`Login as ${client.user.tag}`);
}); */

