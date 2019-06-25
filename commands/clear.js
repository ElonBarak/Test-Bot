const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE MESSAGES")) return message.reply(`${message.author} You Dont Have Permission To Use This Command.`);
  if(!args[0]) return message.channel.send(`${message.author} Please Type The Number Of Messages Are You Want To Delete!`);
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`**מחקת ${args[0]} הודעות**`).then(msg => msg.delete(5000));
  })

}

module.exports.help = {
  name: "clear"
}
