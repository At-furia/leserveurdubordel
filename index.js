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

    if (message.author.bot) return;
    if (message.channel.type === 'dm') {
      if(message.content.includes('@')){
          message.reply("Impossible de répondre a votre demande si elle contient une mention")
         } else {

  //    message.delete()
        bot.channels.get("507602511209693185").send(message.content.slice(0, message.content.length)+ " " + userVar); 

    }}


    if (message.content.startsWith(prefix + "mp")) {
                if(!message.member.roles.some(r=>["Bot","Raven"].includes(r.name)) ) 
                    return message.delete()

                {
        if (!pUser) {
        }
        else {
            pUser.sendMessage(message.content.slice(3, message.content.length));
            message.delete()
        }
    }}
    })
