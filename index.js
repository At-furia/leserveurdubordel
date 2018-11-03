 const Discord = require('discord.js');
    const low = require('lowdb')
    const FileSync = require ('lowdb/adapters/FileSync')
    const fs = require("fs");
    const config = require("./config.json");
    require('events').EventEmitter.prototype._maxListeners = 300;    
    var bot = new Discord.Client();
    var prefix = "<"
    
    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: 'EH NIQUE TA MERE', type: 3}})
        bot.user.setStatus("idle")
        })
        
          bot.login(process.env.TOKEN);

    //  bot.on('guildMemberAdd', member => {
       // let brig = member.guild.roles.find("name", "BAT LES COUILLES FRERE");
       // member.addRole(brig);
//})

bot.on('message', message => {
    let userVar = message.author
    let pUser = message.mentions.users.first()

 if (message.content.startsWith(prefix + "repeat")) {
 if(!memberban){
                message.reply("L'utilisateur n'existe pas !");
            }else{
        var interval = setInterval (function () {
                     pUser.sendMessage(message.content.slice(7, message.content.length))
                        .catch(console.error); // add error handling here
        } }, 1 * 1000);
        }
 
    })
