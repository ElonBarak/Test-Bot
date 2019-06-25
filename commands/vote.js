const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author} You Dont Have Permission To Use This Command!`);
  let logs = message.guild.channels.find("name", "『🗳』votes");
  let vSubject = args.join(" ").slice(22);
  if(!logs) return message.channel.send("Could Not Find A 『🗳』votes Channel.");
  if(!vSubject) return message.reply("Please Type The Vote Subject!");
  let sicon = message.guild.iconURL;
  let voteEmbed = new Discord.RichEmbed()
  .setTitle(`${message.author.username}'s Vote`)
  .setColor("#b70000")
  .setThumbnail(sicon)
  .addField("Vote Subject", vSubject)
  .setFooter("!אז מה אתם חושבים על ההצעה? הצביעו כאן למטה");

  logs.send(voteEmbed).then(m => {
    m.react('❌')
    m.react('✅')
    })



}

module.exports.help = {
  name: "vote"
}
