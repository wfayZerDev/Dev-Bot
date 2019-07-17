const Discord = require('discord.js');
const bot = new Discord.Client()
var prefix = (">"); 


  

    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: '[>help] | By fayZerDV', type: 0} });
    
    });




bot.on('message', message => {
    if (message.content === ">help"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Server Information")
        .setDescription("Le prefix du bot est [>]")
        .setFooter("Bot By fayZerDV")
        .setColor("#15f153")
        .setTitle("»»————- Liste des commandes ————-««")
        .addField(">serv", "-> Ip du host")
        .addField(">inscription", "-> Tout pour s'inscrire")
        .addField(">host", "-> Date du prochain Host : XX/XX/XXXX")
        .addField(">staff", "-> Toutes notres équipes.")
        message.channel.sendMessage(" ▶️ Liste des commandes envoyé en privé ◀️")
        message.author.sendEmbed(help_embed)
        console.log('commande aide demander');
    }

});





bot.on('message', message => {
    if (message.content === ">Fhost"){
      if(message.author.id == "403249416225423362", "261234611915325440", "357559338010673154")
        var help_embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setTitle("┏━━━━━━┛ PRIVATE GAME ┗━━━━━━┓ ")
        .addField("💈Date💈", "-> XX/XX/XXXX")
        .addField("🔓Inscription🔓", "-> MP à @Lucius  ou @MrFriman  !")
        .addField("⌛️Pour les Absents⌛️ ", "-> Contacter a l'avance")
        .addField("🧾Scénario🧾", "-> Diamond limite")
    message.channel.sendEmbed(help_embed)
        console.log('info');
    }

});


      bot.on('message', message => {
        if(message.content.startsWith(prefix + "Ftest")) {

                var args = message.content.split(" ").slice(1);
                var msge = args.join(' ');

                if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
                if(!msge) return message.channel.send("Precise un message")

                var mpall = new Discord.RichEmbed()
                .setThumbnail(client.user.avatarURL)
                .setTimestamp()
                .setColor("RANDOM")
                .addField("Annonce a lire", msge);
                message.delete()
                message.guild.members.map(m => m.send(mpall))
            }

      });









bot.login(process.env.TOKEN);
