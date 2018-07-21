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
  if (message.content === '>ping') {
    message.reply('pong !')
  }
})








bot.on('message', message => {

  if (message.content.startsWith('>play')) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    // On récupère les arguments de la commande 
    // il faudrait utiliser une expression régulière pour valider le lien youtube
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }

})




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











bot.login(process.env.TOKEN);
