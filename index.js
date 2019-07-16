const Discord = require('discord.js');
const bot = new Discord.Client()
var prefix = (">"); 


  

    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: '[>help] | By fayZerDV-', type: 0} });
    
    });




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
    if (message.content === ">Ftamere"){
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



bot.login(process.env.TOKEN);
