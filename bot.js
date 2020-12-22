const Discord = require('discord.js');
const bot = new Discord.Client();
const {token, prefix} = require("./config");

bot.on("ready", () => {
    console.log(bot.user.tag + " prêt à pif");
});

bot.on("message", msg => {
    if (msg.content.startsWith(prefix) && msg.member) {
        commandProcess(msg);
    }
})

function commandProcess(msg){
    let rawCommand = msg.content;
    let fullCommand = rawCommand.substr(prefix.length);
    let splitCommand = fullCommand.split(' ');
    splitCommand = splitCommand.filter(function(e){return e});
    let primaryCommand = splitCommand[0];

    console.log(primaryCommand.toLowerCase());
    switch (primaryCommand.toLowerCase()) {
        case 'between':
            commandBetween(msg);
            break;
        case 'for':
            commandFor(msg);
            break;
        case 'headstails':
            commandHeadsTails(msg);
            break;
        default:
            msg.reply("fdp.");
    }
}

function commandBetween(msg) {
    msg.reply("commande non faite").catch(console.error);
}

function commandFor(msg) {
    msg.reply("commande non faite").catch(console.error);
}

function commandHeadsTails(msg) {
    let result = Math.floor(Math.random() * Math.floor(2));
    if (result === 0) msg.reply("c'est face").catch(console.error);
    else if (result === 1) msg.reply("c'est pile").catch(console.error);
    else msg.reply("c'est buggé").catch(console.error);
}

bot.login(token).catch(console.error);