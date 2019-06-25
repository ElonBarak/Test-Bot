const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      message.delete().catch(O_o=>{});
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author} You Dont Have Permission To Use This Command.`);
      const sayMessage = args.join(" ");
      if(!sayMessage) return message.channel.send(`${message.author} Please Type Text!`)
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
