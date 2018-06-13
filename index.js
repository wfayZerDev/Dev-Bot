const Discord = require('discord.js');
const bot = new Discord.Client()

bot.on('message', function(message){
    if (message.content === '..morgane'){
        message.reply('j aime les ptn de vache comme momo')
    }
})
bot.on('message', function(message){
    if (message.content === '..hugo'){
        message.reply('j aime les ptn de chinois comme hugo')
    }
})
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
     
bot.on('message', function(message){
    if (message.content === '..marc'){
        message.reply
        ('Matheo Gerant Staff ! xD')
    }
}) 

bot.login('NDUxNDY0NTkzNzk4MjAxMzU0.DfCMEg.c0znLmdHsZ3ANPgvcD_a1dGnD0I');