const Discord = require('discord.js');
const bot = new Discord.Client()
var prefix = ("?"); 



    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: '[?help] | Prefix', type: 0} });
    
    });


bot.on('message', message => {
    if(message.content ==="troll"){
        message.reply("troll!!!");
        console.log('troll troll');
    }


    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('0x6F40A4')
        .addField("💻Le site : http://forumtictacrp.mtxserv.fr/  💻")
        .addField("🖥  Ip du serveur Tic-TacRp : 91.121.33.3 !  🖥")
    message.channel.sendEmbed(help_embed)
        console.log('help');
    }

});



bot.on('message', function(message){
    if (message.content === '..tictac'){
        message.reply('🖥  Ip du serveur Tic-TacRp : 91.121.33.3 !  🖥  ')
    }
})
bot.on('message', function(message){
    if (message.content === '..ip'){
        message.reply('🖥  Ip du serveur Tic-TacRp : 91.121.33.3 !  🖥')
    }
})
bot.on('message', function(message){
    if (message.content === '..site'){
        message.reply('💻  Le site est :http://forumtictacrp.mtxserv.fr/  💻')
    }
})   
           
bot.on('message', function(message){
    if (message.content === '?info'){
        message.reply
        ('*💻  Le site est : http://forumtictacrp.mtxserv.fr/  💻                                                                                🖥  Ip du serveur Tic-TacRp : 91.121.33.3 !  🖥*')
    }
})   






bot.login(process.env.TOKEN);
