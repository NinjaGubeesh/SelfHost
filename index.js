const {Client, GatewayIntentBits } = require("discord.js")
const secret = require(process.cwd()+'/config.json')
const fs = require("fs")
const host = new Client({
    intents: ['Guilds', 'GuildMessages', 'MessageContent']
})

host.on('ready', () => {
  console.log(`much wow! you have deployed the bot.`)
})

host.on('messageCreate', async (message) => {
const str = message.content;
const args = str.split(' ');
  if (message.author.bot) return;
  if (!message.content.startsWith('?token')) return 
  fs.writeFile(process.cwd()+"/database/token.txt", args.slice(1).join(' '), (err) => {
  if (err)
    message.channel.send('something went wrong while executing the command');
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
  }
});
    message.reply('saved token!')
  
});

host.on('messageCreate', async (message) => {
const str = message.content;
const args = str.split(' ');
  if (message.author.bot) return;
  if (!message.content.startsWith('?appid')) return 
  fs.writeFile(process.cwd()+"/database/appid.txt", args.slice(1).join(' '), (err) => {
  if (err)
    message.channel.send('something went wrong while executing the command');
  else {
    console.log("File written successfully\n");
    console.log("wrote app id");
  }
});
    message.reply('saved app id!')
  
});

host.on('messageCreate', async (message) => {
const str = message.content;
const args = str.split(' ');
  if (message.author.bot) return;
  if (!message.content.startsWith('?largeid')) return 
  fs.writeFile(process.cwd()+"/database/largeid.txt", args.slice(1).join(' '), (err) => {
  if (err)
    message.channel.send('something went wrong while executing the command');
  else {
    console.log("File written successfully\n");
    console.log("wrote large id");
  }
});
    message.reply('saved large id!')
  
});

host.on('messageCreate', async (message) => {
const str = message.content;
const args = str.split(' ');
  if (message.author.bot) return;
  if (!message.content.startsWith('?smallid')) return 
  fs.writeFile(process.cwd()+"/database/smallid.txt", args.slice(1).join(' '), (err) => {
  if (err)
    message.channel.send('something went wrong while executing the command');
  else {
    console.log("File written successfully\n");
    console.log("wrote small id");
  }
});
    message.reply('saved small id!')
  
});

host.on('messageCreate', async (message) => {
const str = message.content;
const args = str.split(' ');
  if (message.author.bot) return;
  if (!message.content.startsWith('?setname')) return 
  fs.writeFile(process.cwd()+"/database/name.txt", args.slice(1).join(' '), (err) => {
  if (err)
    message.channel.send('something went wrong while executing the command');
  else {
    console.log("File written successfully\n");
    console.log("wrote large ip");
  }
});
    message.reply('saved!')
  
});

host.on('messageCreate', async (message) => {
const str = message.content;
const args = str.split(' ');
  if (message.author.bot) return;
  if (!message.content.startsWith('?desc')) return 
  fs.writeFile(process.cwd()+"/database/des.txt", args.slice(1).join(' '), (err) => {
  if (err)
    message.channel.send('something went wrong while executing the command');
  else {
    console.log("File written successfully\n");
    console.log("wrote large ip");
  }
});
    message.reply('saved!')
  
});


host.on('messageCreate', async (message) => {
const str = message.content;
const args = str.split(' ');
  if (message.author.bot) return;
  if (!message.content.startsWith('?setstate')) return 
  fs.writeFile(process.cwd()+"/database/state.txt", args.slice(1).join(' '), (err) => {
  if (err)
    message.channel.send('something went wrong while executing the command');
  else {
    console.log("File written successfully\n");
    console.log("wrote large ip");
  }
});
    message.reply('saved!')
  
});

host.on('messageCreate', async (message) => {
const str = message.content;
const args = str.split(' ');
  if (message.author.bot) return;
  if (!message.content.startsWith('?ltext')) return 
  fs.writeFile(process.cwd()+"/database/mtext.txt", args.slice(1).join(' '), (err) => {
  if (err)
    message.channel.send('something went wrong while executing the command');
  else {
    console.log("File written successfully\n");
    console.log("wrote large ip");
  }
});
    message.reply('saved!')
  
});

host.on('messageCreate', async (message) => {
const str = message.content;
const args = str.split(' ');
  if (message.author.bot) return;
  if (!message.content.startsWith('?stext')) return 
  fs.writeFile(process.cwd()+"/database/stext.txt", args.slice(1).join(' '), (err) => {
  if (err)
    message.channel.send('something went wrong while executing the command');
  else {
    console.log("File written successfully\n");
    console.log("wrote large ip");
  }
});
    message.reply('saved!')
  
});

host.on('messageCreate', async (message) => {
const str = message.content;
const args = str.split(' ');
  if (message.author.bot) return;
  if (!message.content.startsWith('?token')) return 
  fs.writeFile(process.cwd()+"/database/token.txt", args.slice(1).join(' '), (err) => {
  if (err)
    message.channel.send('something went wrong while executing the command');
  else {
    console.log("File written successfully\n");
    console.log("wrote large ip");
  }
});
    message.reply('saved!')
  
});
    

host.on('messageCreate',async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith('?host')) return 
  
  console.clear()
  message.reply('trying to host token').then(require(process.cwd()+'/main/selfbot.js')).then(message.author.send(`all good, the token is up now`)).catch((err) => {
      message.author.send('seems like you havent set the bot properly, refer docs in the repository to use it')
      })
})


host.login(secret.token)