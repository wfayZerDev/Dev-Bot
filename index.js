const Discord = require('discord.js');
const bot = new Discord.Client()
var prefix = (">"); 

bot.on('message', message => {
    if (message.content === ">serverinfo"){
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nom Du Server", message.guild.name)
    .addField("Crée Le", message.guild.createdAt)
    .addField("Membres Total", message.guild.memberCount);

    message.channel.send(serverembed);
}
});


bot.on('message', message => {
    if (message.content === ">help"){
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Help list", message.guild.name)
    .addField("Crée Le", message.guild.createdAt)
    .addField("Membres Total", message.guild.memberCount);

    message.channel.send(serverembed);
}
});

















bot.on('message', message => {
    if (message.content === ">botinfo"){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Crée par", "fayZer");

    message.channel.send(botembed);
}
});
module.exports.help = {
  name:"botinfo"
}

module.exports.help = {
  name:"serverinfo"
}

  

    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: '[>help] | By fayZer', type: 0} });
    
    });


bot.on('message', message => {
    if (message.content === ">candidature"){
        var help_embed = new Discord.RichEmbed()
        .setColor('0x6F40A4')
        .setTitle("▀▄▀▄▀▄▀ Modèle candidature ▀▄▀▄▀▄▀")
        .addField("Nom Prénom", "Irl")
        .addField("Age", "Votre age")
        .addField("Votre spécialiter en développement", "Langague Que vous connaissez")
        .addField("Horraire de connexion", "du lundi au dimanche")
    message.channel.sendEmbed(help_embed)
        console.log('help');
    }

});

bot.on('message', function(message){
    if (message.content === '>inv'){
        message.reply('Lien Discord : ')
    }
})
bot.on('message', function(message){
    if (message.content === '>ip'){
        message.reply('🖥  Ip du serveur Fk : bientôt !  🖥')
    }
})
bot.on('message', function(message){
    if (message.content === '>site'){
        message.reply('💻  Le site est : 💻')
    }
})   


bot.on('message', message => {
    if (message.content === ">help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setTitle("|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅| Liste des commandes |̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅| ")
        .addField(">ip", "-> Ip du server")
        .addField(">site", "-> En Dev")
        .addField(">staff", "-> Tous les membres du staff")
        .addField("Bot By fayZer", "Site : dev-store.fr ")
    message.channel.sendEmbed(help_embed)
        console.log('help');
    }

});

bot.on('message', message => {
    if (message.content === ">team"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setTitle("|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅| Liste des 4 équipes |̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅| ")
        .addField("équipe 1", "-> [WR] GuilucGaming_YT | dragowx | spyrauw")
        .addField("équipe 2", "-> _DarkMister_ | AƵƳ ")
        .addField("équipe 3", "-> LURZU")
        .addField("équipe 4", "-> ItsMeForca | itsclose")
    message.channel.sendEmbed(help_embed)
        console.log('team');
    }

});
 












bot.login(process.env.TOKEN);
