const Discord = require('discord.js');
const bot = new Discord.Client()
var prefix = (">"); 

bot.on('message', message => {
    if (message.content === ">servinfo"){
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
    if (message.content === ">botinfo"){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Crée par", "fayZerDv");

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
        bot.user.setPresence({ game: { name: '[>help] | By fayZerDV', type: 0} });
    
    });


bot.on('message', function(message){
    if (message.content === '>site'){
        message.reply('💻  Le site est : En dev... 💻')
    }
})   


bot.on('message', message => {
    if (message.content === ">help"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Server Information")
        .setDescription("Le prefix du bot est [>]")
        .setFooter("Bot By fayZerDV")
        .setColor("#15f153")
        .setTitle("»»————- Liste des commandes ————-««")
        .addField(">postuler", "->tout les infos pour postuler.")
        .addField(">site", "-> dev-store.fr/fayzer/")
        .addField(">staff", "-> Toutes notres équipes.")
        message.channel.sendMessage("Liste des commandes envoyé en privé")
        message.author.sendEmbed(help_embed)
        console.log('commande aide demander');
    }

});



bot.on('message', message => {
    if (message.content === ">ip"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setTitle("IP SERVER : XXX.XXX.XXX")
    message.channel.sendEmbed(help_embed)
        console.log('help');
    }

});
bot.on('message', message => {
    if (message.content === ">postuler"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setTitle("-->   wwww.XXXXX.com  <--")
        .addField("Avoir un minimum d'heure de jeux", "environ 24H minimum.")
        .addField("Un age adequate", "Minimum 14ans.")
        .addField("Connaitre un minium le serveur", "le staff, les regles, etc...")
    message.channel.sendEmbed(help_embed)
        console.log('postuler');
    }

});





bot.on('message', message => {
    if (message.content === ">Ftest"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setTitle("┏━━━━━━┛ PRIVATE GAME ┗━━━━━━┓ ")
        .addField("💈Date💈", "-> XX/XX/XXXX")
        .addField("🔓Inscription🔓", "-> MP à @Lucius  ou @MrFriman  !")
        .addField("⌛️ Pour les Absents⌛️ ", "-> Contacter a l'avance")
        .addField("🧾Scénario🧾", "-> diamond limite")
    message.channel.sendEmbed(help_embed)
        console.log('info');
    }

});



bot.login(process.env.TOKEN);
