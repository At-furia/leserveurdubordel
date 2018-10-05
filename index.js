    const Discord = require('discord.js');
    
    var bot = new Discord.Client();
    var prefix = "<"
    
    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: 'EH NIQUE TA MERE', type: 3}})
        bot.user.setStatus("idle")
        })
        
          bot.login(process.env.TOKEN);

      bot.on('guildMemberAdd', member => {
        let brig = member.guild.roles.find("name", "BAT LES COUILLES FRERE");
        member.addRole(brig);
})
