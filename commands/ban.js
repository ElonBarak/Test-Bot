const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o=>{});
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author} You Dont Have Permission To Use This Command.`);
  if(!bUser) return message.reply("Please Mention Member!");
  let bReason = args.join(" ").slice(22);
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I Can't Ban A Staff Member.");
  if(!bReason) return message.reply("Please Type Reason!");



  message.guild.member(bUser).ban(bReason);
  return message.channel.send(`${bUser} Has Been Banned Because: **${bReason}**.`)

  return;
}

module.exports.help = {
  name: "ban"
}
