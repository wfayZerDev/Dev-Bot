const Discord = require('discord.js');
const bot = new Discord.Client()
var prefix = ("!"); 



    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: '[?help] | By fayZer', type: 0} });
    
    });


bot.on('message', message => {
    if(message.content === "troll"){
        message.reply("troll!!!");
        console.log('troll troll');
    }
})

bot.on('message', message => {
    if (message.content === "?info"){
        var help_embed = new Discord.RichEmbed()
        .setColor('0x6F40A4')
        .setTitle("Information")
        .addField("💻Le site : http://forumtictacrp.mtxserv.fr/  💻", "Site Web TicTac Rolplay")
        .addField("🖥  Ip du serveur Tic-TacRp : 91.121.33.3 !  🖥", "Ip du serveur")
        .addField("WorkShop : https://steamcommunity.com/sharedfiles/filedetails/?id=1124791621", "Colection du serveur")
        .addField("Lien")
    message.channel.sendEmbed(help_embed)
        console.log('help');
    }

});



bot.on('message', function(message){
    if (message.content === '!tictac'){
        message.reply('🖥  Ip du serveur Tic-TacRp : 91.121.33.3 !  🖥  ')
    }
})
bot.on('message', function(message){
    if (message.content === '!ip'){
        message.reply('🖥  Ip du serveur Tic-TacRp : 91.121.33.3 !  🖥')
    }
})
bot.on('message', function(message){
    if (message.content === '!site'){
        message.reply('💻  Le site est :http://forumtictacrp.mtxserv.fr/  💻')
    }
})   
           








 



bot.login(process.env.TOKEN);
