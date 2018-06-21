const Discord = require('discord.js');
const bot = new Discord.Client()
var prefix = ("?"); 



    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: '[?help] | By fayZer', type: 0} });
    
    });

bot.on('message', message => {
    if (message.content === "?help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('0x6F40A4')
        .setTitle("Information")
        .addField("💻Le site : http://dev-store.fr/  💻", "Site Web Officiel")
        .addField("?ranknsfw : Give un nouveau grade", "Grade pour adult")
        .addField("?unrannknsfw : enleve le grade", "enleve le grade pour adulte")
        .addField("Gang Gmod")
    message.channel.sendEmbed(help_embed)
        console.log('help');
    }

});



bot.on('message', function(message){
    if (message.content === '?inv'){
        message.reply('Lien Discord : https://discord.gg/9kMebNt')
    }
})
bot.on('message', function(message){
    if (message.content === '?ip'){
        message.reply('🖥  Ip du serveur Tic-TacRp : 91.121.33.3 !  🖥')
    }
})
bot.on('message', function(message){
    if (message.content === '?site'){
        message.reply('💻  Le site est :http://dev-store.fr/  💻')
    }
})   
           








 



bot.login(process.env.TOKEN);
