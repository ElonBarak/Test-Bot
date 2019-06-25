const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  message.delete().catch(O_o=>{});
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author} You Dont Have Permission To Use This Command!`);
  let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!wUser) return message.channel.send(`${message.author} Please Mention 1 User.`);
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author} I Cant Warn A Staff Member!`);
  let reason = args.join(" ").slice(22);
  if(!reason) return message.channel.send(`${message.author} Please Type Reason!`);



  return message.channel.send(`<@${wUser.id}> Has Been Warned Because: **${reason}**.`);

}

module.exports.help = {
  name: "warn"
}
