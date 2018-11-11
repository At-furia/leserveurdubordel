 const Discord = require('discord.js');
    const low = require('lowdb')
    const FileSync = require ('lowdb/adapters/FileSync')
    const fs = require("fs");
    const config = require("./config.json");
    require('events').EventEmitter.prototype._maxListeners = 300;    
    var bot = new Discord.Client();
    var prefix = "!"
    
    const adapter = new FileSync('database.json');
    const db = low(adapter);

var rhitler = db.get('hitler').size().value();

   
        bot.on('ready', () => {
        bot.user.setPresence({ game: { name: 'EH NIQUE TA MERE', type: 3}})
        bot.user.setStatus("idle")
         var interval = setInterval (function () {
   randomperso();
var lul = db.get(`hitler[${randnum}].hitler_value`).toString().value();
 
 var rdm_embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(`${lul}`)
message.channel.sendEmbed(rdm_embed);
             function randomperso(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rhitler);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    
 }
         }
                        .catch(console.error); // add error handling here
     }, 1 * 1000);
    });
          bot.login(process.env.TOKEN);

    //  bot.on('guildMemberAdd', member => {
       // let brig = member.guild.roles.find("name", "BAT LES COUILLES FRERE");
       // member.addRole(brig);
//})

bot.on('message', message => {
    let userVar = message.author
    let pUser = message.mentions.users.first()
    if (message.author.bot) return;

 if (message.content.startsWith(prefix + "repeat")) {
  message.delete();
 if(!pUser){
                message.reply("L'utilisateur n'existe pas !");
            }else{
        var interval = setInterval (function () {
                     pUser.sendMessage(message.content.slice(7, message.content.length))
                        .catch(console.error); // add error handling here
        }, 1 * 1000);
        }
 }
 


    let tavernec = message.guild.channels.find(channels => channels.name === "recrudescence-hitlérienne");
  if (message.channel === tavernec) {  
   randomperso();
var lul = db.get(`hitler[${randnum}].hitler_value`).toString().value();
 
 var rdm_embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(`${lul}`)
message.channel.sendEmbed(rdm_embed)
 
     function randomperso(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rhitler);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    }
 }
    })
