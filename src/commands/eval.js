const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');

const clean = text => {
  if (typeof (text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}

module.exports = class EvalCommand extends Command {
  constructor() {
    super('eval', {
      aliases: ['eval', 'cal', 'calc', 'calculate'],
      category: 'Dev',
      description: {
        content: 'La commande eval permet de faire des calculs et exécuter de petits programmes via discord !',
        usages: `${PREFIX}eval`,
        raccourcis: 'eval, cal, calc, calculate'
    },
      ownerOnly: true,
      args: [
        {
          id: 'code',
          match: 'content',
        },
      ],
    });
  }

  async exec(message, { code }) {
    try {
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), { code: "xl" });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
};