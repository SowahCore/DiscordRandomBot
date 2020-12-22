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

    switch (primaryCommand.toLowerCase()) {
        case 'help':
            commandHelp(msg);
            break;
        case 'between':
            commandBetween(msg);
            break;
        case 'entre':
            commandBetween(msg);
            break;
        case 'for':
            commandFor(msg);
            break;
        case 'headstails':
            commandHeadsTails(msg);
            break;
        case 'pileface':
            commandHeadsTails(msg);
            break;
        default:
            msg.reply("fdp.");
    }
}

function commandBetween(msg) {
    let creator = msg.client.users.cache.get('270173272950308866');

    let rawCommand = msg.content;
    let fullCommand = rawCommand.substr(prefix.length);
    let splitCommand = fullCommand.split(' ');
    splitCommand = splitCommand.filter(function(e){return e});
    let number1 = parseInt(splitCommand[1]);
    let number2 = parseInt(splitCommand[2]);

    let result;

    if (number1 > number2) result = getRandomIntInclusive(number2, number1);
    else if (number1 < number2) result = getRandomIntInclusive(number1, number2);
    else result = number1;

    const print = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('For RandomBot')
        .setDescription('Le résultat est : ' + result)
        .setTimestamp()
        .setFooter('Created by '+ creator.username +'#' + creator.discriminator, creator.displayAvatarURL());

    msg.channel.send(print);
}

function commandFor(msg) {
    let creator = msg.client.users.cache.get('270173272950308866');

    let rawCommand = msg.content;
    let fullCommand = rawCommand.substr(prefix.length);
    let splitCommand = fullCommand.split(' ');
    splitCommand = splitCommand.filter(function(e){return e});
    let number = parseInt(splitCommand[1]);

    let result = Math.floor(Math.random() * Math.floor(number+1));
    const print = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('For RandomBot')
        .setDescription('Le résultat est : ' + result)
        .setTimestamp()
        .setFooter('Created by '+ creator.username +'#' + creator.discriminator, creator.displayAvatarURL());

    msg.channel.send(print);
}

function commandHeadsTails(msg) {
    let result = Math.floor(Math.random() * Math.floor(2));
    let pile = "https://cdn.discordapp.com/attachments/790915412762165268/790925318042550282/pile.gif";
    let face = "https://cdn.discordapp.com/attachments/790915412762165268/790926059016814602/face.gif";
    if (result === 0) msg.channel.send(face).catch(console.error);
    else if (result === 1) msg.channel.send(pile).catch(console.error);
    else msg.reply("c'est buggé").catch(console.error);
}

function commandHelp(msg) {
    let creator = msg.client.users.cache.get('270173272950308866');
    const help = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Help RandomBot')
        .setDescription('Vive le pouvoir du pif')
        .setThumbnail(bot.user.displayAvatarURL())
        .addFields(
            { name: 'Préfixe : `' + prefix + '`', value: '‎\n' },
            { name: 'Commandes :', value: '‎\n' },
            { name: '[`random between value1 value2`] or [`random entre value1 value2`] :', value: 'get a random number between value1 and value2' },
            { name: '[`random for value`] :', value: 'get a random number between 0 and value'},
            { name: '[`random headsTails`] or [`random pileFace`] :', value: 'give if is heads or tails'}
        )
        .setTimestamp()
        .setFooter('Created by '+ creator.username +'#' + creator.discriminator, creator.displayAvatarURL());

    msg.channel.send(help);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

bot.login(token).catch(console.error);