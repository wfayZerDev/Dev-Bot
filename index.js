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
      if(message.author.id == "403249416225423362", "261234611915325440", "357559338010673154")
        var help_embed = new Discord.RichEmbed()
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "This is an embed",
            url: "http://google.com",
            description: "This is a test embed to showcase what they look like and what they can do.",
            fields: [{
                name: "Fields",
                value: "They can have different fields with small headlines."
              },
              {
                name: "Masked links",
                value: "You can put [masked links](http://google.com) inside of rich embeds."
              },
              {
                name: "Markdown",
                value: "You can put all the *usual* **__Markdown__** inside of them."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Example"
            }
          }
        });









bot.login(process.env.TOKEN);
