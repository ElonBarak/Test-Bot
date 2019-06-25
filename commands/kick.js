const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o=>{});
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author} You Dont Have Permission To Use This Command.`);
  if(!kUser) return message.reply("Please Mention Member!");
  let kReason = args.join(" ").slice(22);
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I Can't Kick A Staff Member.");
  if(!kReason) return message.reply("Please Type Reason!");



  message.guild.member(kUser).kick(kReason);
  return message.channel.send(`${kUser} Has Been Kicked Because: **${kReason}**.`)

  return;
}

module.exports.help = {
  name: "kick"
}
