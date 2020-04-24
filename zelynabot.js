const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzAyOTExNjE1MjYzMzA5ODQ0.XqG7kA.uZqb4YxgzwOwgu6AS8wkH5J7dx8';

const PREFIX = '!';
var version = '1.0.0';

bot.on('ready', () =>{
    console.log('I am ready. Your command, sir?');
})

bot.on('message', message=>{

   let args = message.content.substring(PREFIX.length).split(" ");

   switch(args[0]){
        case 'ping':
            message.channel.send('Yes sir!')
            break;

        case 'info':
            if(args[1] === 'version'){
                message.channel.send('**Version** : ' + version);
            }else if(args[1] === 'bot'){
                message.channel.send('My name is *Zelyna*, and I am created by **Z4**\nNice to meet you')
            }else{
                message.reply('What info could you be looking for?\n!info version : *shows my current version*\n!info bot : *I will tell you about me*')
            }
            break;

        case 'wipe':
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you don't have permission to do that");
            if(!args[1]) return message.reply('undefined amount makes me lazy')
            message.channel.bulkDelete(args[1])
            message.channel.send('I have successfully killed **'+args[1]+'** unwanted chats')
            break;
        }
   }
)

bot.login(token);
