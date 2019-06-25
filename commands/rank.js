const Discord = require("discord.js");
const botconfig = require("../botconfig");
let blue = botconfig.blue;
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {

  message.delete().catch(O_o=>{});

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor(blue)
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .setFooter(`${difference} XP To Level Up`, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed);

}

module.exports.help = {
  name: "rank"
}
