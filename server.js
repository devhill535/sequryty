//=============================== - [ Consts ] - ===================================
const Discord = require("discord.js");

const bot = new Discord.Client();

const { Util } = require("discord.js");

const timezone = require("moment-timezone");

const YouTube = require("simple-youtube-api");

const fs = require("fs");

const request = require("request");

const bannedwords = ["@here", "@everyone"];

const ytdl = require("ytdl-core");

const prefix = "d!";

const queue = new Map();
bot.on("ready", () => console.log("🤖Ready Bot In online🤖"));

///////////
bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});
//////////////////
bot.on("ready", () => {
  console.log(`[!]-------------------------------------[!]`);
  console.log(`Display Name : ${bot.user.username}`);
  console.log(`Public Prefix : ${prefix}`);
  console.log(`Version : 0.0.1`);
  console.log(`[!]-------------------------------------[!]`);
});
////////////////
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.listen(process.env.PORT);
function t_c() {
  request.get(
    `https://${process.env.PROJECT_DOMAIN}.glitch.me/`,
    (error, response, body) => {
      let AGRIN = body;
      return AGRIN;
    }
  );
}
/////////////

bot.on("ready", () => {
  console.log(
    `Online In Servers : ${bot.guilds.size} | Users: ${bot.users.size} `
  );
  let statuses = [
    ///// لێرانە شتێک بووسە بۆ ستریمینگەکە
    //// DASTKARE MAKA DACHE BGYE BEKAYTA EROR BA WRYAYI DASKARII MAKA
    `${prefix}help | SERVERS (${bot.guilds.size})`,
    
  ];

  setInterval(function() {
    let dnd = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setStatus("idle");
    bot.user.setActivity(dnd, {
      type: "Playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

let anti = JSON.parse(fs.readFileSync("./antigrefff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
bot.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };    
  
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_withdr_key:  Just Ownership can online **"
      );
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num)) return message.channel.send("**Just number ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**Anti ban settings has been updated,
Enabled:✅
Minimum: ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num)) return message.channel.send("**Just number ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**Anti kick settings has been updated,
Enabled:✅
Minimum: ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num)) return message.channel.send("**Just number ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**Anti role.C settings has been updated,
Enabled:✅
Minimum: ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num)) return message.channel.send("**Just number ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**Anti role.D settings has been updated,
Enabled:✅
Minimum: ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num)) return message.channel.send("**Just number ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**Anti channel.C settings has been updated,
Enabled:✅
Minimum: ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num)) return message.channel.send("**Just number ! **");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**Anti channel.D settings has been updated,
Enabled:✅
Minimum: ${config[message.guild.id].chaCrLimit}**`
      );
    }

    if (message.content.startsWith(prefix + "anti time")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num)) return message.channel.send("**Just number ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**Anti time settings has been updated,
Enabled:✅
Minimum: ${config[message.guild.id].time}**`
      );
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
bot.on("channelDelete", async channel => {
  const entry1 = await channel.guild

    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("loge");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username}  :  is deleting channels on your server called , stop him before i take action!`
          )
        );

      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("channelCreate", async channel => {
  if (!["text", "ca", "vo"].includes(channel.type.toLowerCase())) return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };

  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("loge");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username}  :  is creating channels on your server , stop him before i take action!**`
          )
        );

      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
bot.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };

  /////////////////
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("loge");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username}  :  is deleting roles on your server called , stop him before i take action!`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("loge");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username}  :  is creating roles on your server called , stop him before i take action!`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} Tried to ban **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("loge");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} Tried to kick **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[member.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("loge");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000 || 30000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(`**⇏ | ${entry.username} Tried to kick **`)
          );
        anti[member.guild.id + entry.id].actions = 0;
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
//=========={Anit-Bot}========//
bot.on("message", message => {
  if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)   .setThumbnail(message.author.avatarURL)
        .setColor("RANDOM")
        .setTitle("**Info The Bot** ")
        .addField(
          "**My Ping**",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField("**Owner Bot**", `<@637299944939585576>`, true)
        .addField("**Servers**", [bot.guilds.size], true)
        .addField("**Channels**", `[${bot.channels.size}]`, true)
        .addField("**Users**", `[${bot.users.size}]`, true)
        .addField("**My Name**", `[ ${bot.user.tag} ]`, true)
        .addField("**My ID**", `[ ${bot.user.id} ]`, true)
        .addField(
          "**My Prefix**",
          `[-]`,
          true
        )
 
       .setFooter(message.author.username,message.author.avatarURL)
 .setTimestamp()
    });
  }
});

/////////////////
bot.on("message", message => {
  if (message.content === "-about") {
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)  .setImage(`https://cdn.discordapp.com/attachments/703243461079597138/755709757398057062/image0-14.gif`)
 .setFooter(message.author.username,message.author.avatarURL)
 .setTimestamp()
 .setDescription(`
    \`𝖮𝗐𝗇𝖾𝗋 Id\`
━━━━━━━━━━━━━━━━━━━━
**637299944939585576**
━━━━━━━━━━━━━━━━━━━━ 
    \`𝖮𝗐𝗇𝖾𝗋 Bot\`
━━━━━━━━━━━━━━━━━━━━    
<@637299944939585576>
━━━━━━━━━━━━━━━━━━━━
   \`Creation Time\`
━━━━━━━━━━━━━━━━━━━━
                 **9/2/2021**

 `);

    message.channel.sendEmbed(embed);
  }
});

//////////////////

bot.on("message", async SAEWAN => {
  if (SAEWAN.content.startsWith("-lock")) {
    if (!SAEWAN.member.hasPermission("MANAGE_CHANNELS"))
      return SAEWAN.channel.send("");
    if (!SAEWAN.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
    SAEWAN.channel.overwritePermissions(SAEWAN.guild.id, {
      SEND_MESSAGES: false
    });
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(` 🔒 | Locked Channel
Channel Status : Send Message : ❌ `)     
      .setTimestamp()
    SAEWAN.channel.sendEmbed(embed);
  }
});

bot.on("message", async SAEWAN => {
  if (SAEWAN.content.startsWith("-unlock")) {
    if (!SAEWAN.member.hasPermission("MANAGE_CHANNELS"))
      return SAEWAN.channel.send("");
    if (!SAEWAN.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
    SAEWAN.channel.overwritePermissions(SAEWAN.guild.id, {
      SEND_MESSAGES: null
    });
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
     .setTitle(`🔓 | unlocked Channel
Channel Status : Send Message : ✅`)
    .setTimestamp()
    SAEWAN.channel.sendEmbed(embed);
  }
});

////////////////
bot.on("message", message => {
  if (message.content ==="-help") {
    const embed = new Discord.RichEmbed().setColor("RANDOM")
 .setFooter(message.author.username,message.author.avatarURL)
 .setThumbnail(message.author.avatarURL)
    .setTimestamp()
 .setImage("https://cdn.discordapp.com/attachments/637301756610740234/809455867464384592/image0-4.gif")    
 .setDescription(` **>** __**Security Comands**__ **<**
━────╮•╭────━
🔒┃**Security**
    \`-help1\`
━────╮•╭────━
⚙️┃**Public**
     \`-help2\`
━────╮•╭────━
🔰┃**Moderation**
      \`-help3\`
━────╮•╭────━
🔣┃**Coder**
    \`-help4\`
━────╮•╭────━
🎮┃**Game**
  \`-help5\`
  __ [SUPPORT](https://discord.gg/Zj5SFafHKG) __ - __ [YOUTUBE](https://youtube.com/channel/UCwEmB4t-LUVgfsbl4GOqDdg) __


`);
    
    message.channel.sendEmbed(embed);
  }
});
/////////////////
bot.on("message", message => {
  if (message.content === "-help1") {
    const embed = new Discord.RichEmbed().setColor("RANDOM")
 .setFooter(message.author.username,message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
    .setImage("")
    .setTimestamp()
    .setDescription(`
━────╮•╭────━
🔒┃**Security Commands**
\`-anti ban[Number]\`
\`-anti kick[Number]\`
\`-anti channel[Number]\`
\`-anti role[Number]\`
\`-anti time[Number]\`
\`-settings\`
`);
    
    message.channel.sendEmbed(embed);
  }
});
/////////////////
bot.on("message", message => {
  if (message.content === "-help2") {
    const embed = new Discord.RichEmbed().setColor("RANDOM")
 .setFooter(message.author.username,message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
    .setImage("")
    .setTimestamp()
   .setDescription(`
━────╮•╭────━
⚙️┃**Public Commads**
\`-clear\`
\`-bot\`
\`-server\`
\`-roleinfo\`
\`-invite\`
\`-avatar\`
\`-image\`
\`-nick\`
\`-ping\`
\`-roles\`
\`-count\`
\`-profile\`
\`-about\`
\`-voice\`
\`-slowmode\`

`);
    
    message.channel.sendEmbed(embed);
  }
});
/////////////////
bot.on("message", message => {
  if (message.content === "-help3") {
    const embed = new Discord.RichEmbed().setColor("RANDOM")
 .setFooter(message.author.username,message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
    .setImage("")
    .setTimestamp()
    .setDescription(`
━────╮•╭────━
🔰┃**Moderation Commands**
\`-lock\`
\`-unlock\`
\`-ban\`
\`-kick\`
\`-bans\`
\`-private\`
\`-public\`
\`-movall\`

`);
    
 /////////////////
    message.channel.sendEmbed(embed);
  }
});
bot.on("message", message => {
  if (message.content === "-help4") {
    const embed = new Discord.RichEmbed().setColor("RANDOM")
 .setFooter(message.author.username,message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
    .setImage("")
    .setTimestamp()
    .setDescription(`
━────╮•╭────━
🔣┃**Coder**
\`-js-antikick\`
\`-js-mute\`
\`-js-unmute\`
\`-js-dzhajnwe\`
\`-js-bc\`
\`-js-clear\`
\`-js-autorole\`
\`-js-reactionrole\`
\`-js-avatar\`
`);
    
    message.channel.sendEmbed(embed);
  }
});

bot.on("message", message => {
  if (message.content === "-help5") {
    const embed = new Discord.RichEmbed().setColor("RANDOM")
 .setFooter(message.author.username,message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
    .setImage("")
    .setTimestamp()
    .setDescription(`
━────╮•╭────━
🎮┃**Game**
\`-slots\`
\`-stone\`
\`-paper\`

`);
    
    message.channel.sendEmbed(embed);
  }
});
/////////////////

bot.on("voiceStateUpdate", (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find("name", "logs");
  if (!ch) return;

  oldM.guild.fetchAuditLogs().then(logs => {
    let user = logs.entries.first().executor.username;

    if (m1 === false && m2 === true) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user} میوتی فۆیس کرا     ${newM} `)
        .setColor("black")
        .setTimestamp();
      ch.send(embed);
    }
    if (m1 === true && m2 === false) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user}  میوتی ڤۆیسی کرایەوە  ${newM} `)
        .setColor("black")
        .setTimestamp();
      ch.send(embed);
    }
    if (d1 === false && d2 === true) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user}  دیفێندی ڤۆیس کرا    ${newM}`)
        .setColor("black")
        .setTimestamp();

      ch.send(embed);
    }
    if (d1 === true && d2 === false) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user}   دیڤێندی ڤۆیسی لابرا   ${newM}`)
        .setColor("black")
        .setTimestamp();

      ch.send(embed);
    }
  });
});

bot.on("messageUpdate", (message, newMessage) => {
  if (message.content === newMessage.content) return;
  if (
    !message ||
    !message.id ||
    !message.content ||
    !message.guild ||
    message.author.bot
  )
    return;
  const channel = message.guild.channels.find("name", "logs");
  if (!channel) return;

  let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setTitle(" دەسکاری کردنی مەسج  :  ")
    .addField("پێش دەسکاری کردن ", `${message.cleanContent}`)
    .addField(" دوای دەسکاری کردن   ", `${newMessage.cleanContent}`)
    .addField("  لەچەناڵی  ", `<#${message.channel.id}>`)
    .addField("  لەلایەن ", `<@${message.author.id}> `)
    .setColor("black")
    .setTimestamp();
  channel.send({ embed: embed });
});

bot.on("guildMemberAdd", member => {
  if (!member || !member.id || !member.guild) return;
  const guild = member.guild;

  const channel = member.guild.channels.find("name", "logs");
  if (!channel) return;
  let memberavatar = member.user.avatarURL;
  const fromNow = bot(member.user.createdTimestamp).fromNow();
  const isNew = new Date() - member.user.createdTimestamp < 900000 ? "🆕" : "";

  let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.avatarURL)
    .setColor("black")
    .setDescription(` <@${member.user.id}> هاتە ناو سێرڤەر `)
    .setTimestamp();
  channel.send({ embed: embed });
});

bot.on("guildMemberRemove", member => {
  if (!member || !member.id || !member.guild) return;
  const guild = member.guild;

  const channel = member.guild.channels.find("name", "logs");
  if (!channel) return;
  let memberavatar = member.user.avatarURL;
  const fromNow = bot(member.joinedTimestamp).fromNow();

  let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.avatarURL)
    .setColor("black")
    .setDescription(` <@${member.user.id}>  دەرچو لە سێرڤەر  `)
    .setTimestamp();
  channel.send({ embed: embed });
});

bot.on("messageDelete", message => {
  if (
    !message ||
    !message.id ||
    !message.content ||
    !message.guild ||
    message.author.bot
  )
    return;
  const channel = message.guild.channels.find("name", "logs");
  if (!channel) return;

  let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setTitle("سڕینەوەی نامە  :   ")
    .addField(" نامە  ", `${message.cleanContent}`)
    .addField("   لە چەناڵی  ", `<#${message.channel.id}>`)
    .addField("  لەلایەن ", `<@${message.author.id}> `)
    .setColor("black")
    .setTimestamp();
  channel.send({ embed: embed });
});

bot.on("roleDelete", role => {
  bot.setTimeout(() => {
    role.guild
      .fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = role.guild.channels.find("name", "logs");
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor("black")
            .setTitle("سڕینەوەی ڕۆڵ ")
            .addField(" ناوی ڕۆڵی سڕاوە   ", role.name, true)
            .addField("  ئایدی ڕۆڵ ", role.id, true)
            .addField(" ڕەنگی ڕۆڵ  ", role.hexColor, true)
            .addField(" لەلایەن ", exec, true)
            .setColor("black")
            .setTimestamp();

          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

bot.on("roleCreate", role => {
  bot.setTimeout(() => {
    role.guild
      .fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = role.guild.channels.find("name", "logs");
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle("ڕۆڵ دروست کردن    ")
            .addField("  ناوی ڕۆڵ  ", role.name, true)
            .addField("  ئایدی ڕۆڵ ", role.id, true)
            .addField("  ڕەنگی ڕۆڵ ", role.hexColor, true)
            .addField(" لەلایەن ", exec, true)
            .setColor("black")
            .setTimestamp();

          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

bot.on("guildBanAdd", (guild, member) => {
  bot.setTimeout(() => {
    guild
      .fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find("name", "logs");
          if (!log) return;
          bot.fetchUser(member.id).then(myUser => {
            let embed = new Discord.RichEmbed()
              .setAuthor("باند کراو :  ")
              .setColor("black")
              .setThumbnail(myUser.avatarURL)
              .addField("   ", `**${myUser.username}**`, true)
              .addField("   ", `**${exec}**`, true)
              .setFooter(myUser.username, myUser.avatarURL)
              .setTimestamp();
            log.send(embed).catch(e => {
              console.log(e);
            });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

bot.on("guildBanRemove", (guild, member) => {
  bot.setTimeout(() => {
    guild
      .fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find("name", "logs");
          if (!log) return;
          bot.fetchUser(member.id).then(myUser => {
            let embed = new Discord.RichEmbed()
              .setAuthor("     ")
              .setColor("black")
              .setThumbnail(myUser.avatarURL)
              .addField("   ", `**${myUser.username}**`, true)
              .addField("   ", `**${exec}**`, true)
              .setFooter(myUser.username, myUser.avatarURL)
              .setTimestamp();
            log.send(embed).catch(e => {
              console.log(e);
            });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});
/////////////////////
bot.on("message", SAEWAN => {
  if (!SAEWAN.channel.guild) return;
  if (SAEWAN.author.bot) return;
  if (SAEWAN.content.startsWith(prefix + "image")) {
    const embed = new Discord.RichEmbed()

      .setTitle(`** ${SAEWAN.guild.name} **`)
      .setAuthor(SAEWAN.author.username, SAEWAN.guild.iconrURL)
      .setColor("RANDOM")
      .setImage(SAEWAN.guild.iconURL)
      .setURL(SAEWAN.guild.iconrURL)
      .setTimestamp();

    SAEWAN.channel.send({ embed });
  }
});
//////////////////////
bot.on("ready", () => {
  var join = bot.channels.get("792779205296259082");

  if (join) join.join();
});

///////////////
bot.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
    if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (message.mentions.users.size < 1)
      return message.channel.send("ban @user shared link");
    if (!reason) return message.channel.send("-ban @user shared link");
    if (!message.guild.member(user).bannable) return message.reply("❌");

    message.guild.member(user).ban(7, user);

    const banembed = new Discord.RichEmbed()
      .setAuthor(`BANNED!`, user.displayAvatarURL)
      .setColor("black")
      .setTimestamp()
      .addField("**user naem :**", "**[ " + `${user.tag}` + " ]**");

    message.channel.send({
      embed: banembed
    });
  }
});
/////////////
bot.on("guildCreate", guild => {
  bot.channels.get("809027548414869524")
    .send(`__**بۆتەکە ڕاکێشرایە ئەم سێرڤەرە**__ |🔻
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**
`);
});
/////////////////////////////////////////

/// ======== { • لێفی بۆت • } ======== ///
bot.on("guildDelete", guild => {
  bot.channels.get("809027582049386496")
    .send(` **${bot.user.tag} سێرڤەرەکەی بە جێ ھێشت
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
});
/////////////
bot.on("message", storm => {
  if (storm.content.startsWith(prefix + "user")) {
    storm.guild.fetchInvites().then(invs => {
      let user = storm.mentions.users.first() || storm.author;
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      storm.channel.send(`${user} has ${inviteCount} invites.`);
    });
  }
});
////////////
bot.on("message", message => {
  if (message.content.startsWith(prefix + "slowmode")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))

      return message.channel.send("🧐 - Please Check Your Permission");
    if (
      !message.guild
        .member(message.client.user)
        .hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send(
        "🧐 - Please Check My Permission to can edit in this channel."
      );
    let time = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (isNaN(time)) return message.channel.send("🧐- Its no a time");
    if (!time)
      return message.channel.send("🧐 - Please Type a New SlowMode");
    message.channel.setRateLimitPerUser(time);
    message.channel.send("Done Changed A SlowMode To: " + time + "");
  }
});
////////////
bot.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
    if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (message.mentions.users.size < 1)
      return message.channel.send("ban @user shared link");
    if (!reason) return message.channel.send("kick @user shared link");
    if (!message.guild.member(user).bannable) return message.reply("❌");

    message.guild.member(user).kick(7, user);

    const banembed = new Discord.RichEmbed()
      .setAuthor(`kicked!`, user.displayAvatarURL)
      .setColor("black")
      .setTimestamp()
      .addField("**user naem :**", "**[ " + `${user.tag}` + " ]**");
    message.channel.send({
      embed: banembed
    });
  }
});

///////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "nick")) {
    if (
      SAEWAN.author.bot ||
      SAEWAN.channel.type == "dm" ||
      !SAEWAN.member.hasPermission("MANAGE_NICKNAMES") ||
      !SAEWAN.guild.member(bot.user).hasPermission("MANAGE_NICKNAMES")
    )
      return;
    var user = SAEWAN.mentions.members.first();
    var args = SAEWAN.content.split(" ").slice(2);
    var nick = args.join(" ");
    if (!user || !args) return SAEWAN.channel.send(`f/nick @user nicknaem`);
    if (
      SAEWAN.guild.member(user.user).highestRole.position >=
      SAEWAN.guild.member(bot.user).highestRole.position
    )
      return SAEWAN.channel.send(
        `⛔ | I cant change **${user.user.username}**'s nickname because his role highest than my role!`
      );
    SAEWAN.guild
      .member(user.user)
      .setNickname(`${nick}`)
      .then(() => {
        SAEWAN.channel.send(`✅`);
      })
      .catch(console.error);
  }
});

////////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.author.bot) return;
  if (SAEWAN.content.startsWith(prefix + "ping")) {
    SAEWAN.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(bot.ping)}`;
      msg.edit(
        `\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``
      );
    });
  }
});
////////////////////
bot.on("message", message => {
  if (message.content.startsWith(prefix + "roles")) {
    var roles = message.guild.roles.map(roles => `${roles.name}, `).join(" ");
    let embed = new Discord.RichEmbed()
      .setColor("black")
      .addField("**roles server**", `**[${roles}]**`);
    message.channel.sendEmbed(embed);
  }
});

/////////////////
bot.on("message", SAEWAN => {
  if (!SAEWAN.channel.guild) return;
  if (SAEWAN.content.startsWith(prefix + "count"))
    SAEWAN.channel.send({
      embed: new Discord.RichEmbed()

        .setColor("black")

        .setTitle(`**server members |  ${SAEWAN.guild.memberCount} **`)
    });
});
///////////////////

////////////////
bot.on("message", async message => {
  if (message.author.bot) return undefined;
  if (message.content.startsWith(prefix + "roleinfo")) {
    let role1 = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let role =
      message.guild.roles.find("name", role1) || message.guild.roles.get(role1);
    if (!role1)
      return message.channel.send(
        `**:x: | Error , Please Type Command True Ex : \`${prefix}roleinfo [RoleName]\`**`
      );
    if (!role)
      return message.channel.send("**:x: | Error , I Can't Find This Role**");
    let roleinfo = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("black")
      .addField("❯ Role Name", `» \`${role.name}\``, true)
      .addField("❯ Role ID", `» \`${role.id}\``, true)
      .addField("❯ Role Color", `» \`${role.hexColor}\``, true)
      .addField(
        "❯ Role CreateAt",
        `» \`${role.createdAt.toLocaleString()}\``,
        true
      )
      .setThumbnail(message.guild.iconURL)
      .setFooter(bot.user.username, bot.user.avatarURL)
      .setTimestamp();
    message.channel.send(roleinfo);
  }
});

////////////////////

///////////////////
bot.on("message", async SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "profile")) {
    SAEWAN.channel.startTyping();
    setTimeout(() => {
      SAEWAN.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      SAEWAN.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${SAEWAN.author.id}`
          }
        ]
      })
    );
  }
});

/////////////////
bot.on("message", message => {
  if (message.content.startsWith(prefix + "bans")) {
    if (!message.channel.guild) return;
    message.channel;
    message.guild
      .fetchBans()
      .then(bans =>
        message.channel.send(` **SERVER BAN LIST :** ${bans.size} `)
      )
      .catch(console.error);
  }
});
////////////////
bot.on("message", SAEWAN => {
  if (!SAEWAN.guild) return;
  if (SAEWAN.content.startsWith(prefix + "wara")) {
    if (SAEWAN.member.voiceChannel) {
      SAEWAN.member.voiceChannel
        .join()
        .then(connection => {
          SAEWAN.reply("Is Here");
        })
        .catch(console.log);
    } else {
      SAEWAN.reply("Go To Voice");
    }
  }
});
////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "support")) {
    if (!SAEWAN.channel.guild)
      return SAEWAN.reply("**تەنها لە سێرڤەر دەتوانیت بەکاریبهێنیت **| ✅");
    ////
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("** SUPPORT BOT**")
      .setImage("")
    .setURL("https://discord.gg/6Gv895N5hB")
      .setFooter("Thanks For Support", SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});
////////////////
bot.on("guildCreate" , DarkMan => {
  if(DarkMan.memberCount < 100 ){
    console.log(`  name ( ${DarkMan.name} ) zhmaray memberakan ( ${DarkMan.memberCount}) created by DarkMan`)//by DarkMan
    DarkMan.leave();
  }
})
////////////////
bot.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find("general", "799976969626058755");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(
      "> __**🌸 | Welcome to Our Server**__ ",
      `> __**🌸 | بەخێربێیت بۆ سێرڤەرەکەمان**__`
    )
    .addField(
      "<a:emoji_5:770023263035588649> 👤 | ناوی میمبەر :",
      ` ${member} `,
      true
    )
    .addField(
      "<a:emoji_5:770023263035588649> 🆔 | ئایــدی میمبەر ：",
      `${member.id}`
    )
    .addField(
      "<a:emoji_5:770023263035588649> 👥 | تـۆکـەسی ژمارە ：",
      `${member.guild.memberCount}`
    )
    .addField(
      "<a:emoji_5:770023263035588649> 🕛 | کاتی دانانی ئەکاونتت :",
      `${member.user.createdAt}`,
      true
    )
    .addField(
      "<a:emoji_5:770023263035588649> 🕛 | کاتی جۆینکردنت :",
      `${member.joinedAt} `,
      true
    )
    .addField(
      "<a:emoji_5:770023263035588649> ✳️ | ناوی سێرڤەر ：",
      `${member.guild.name}`,
      true
    )
    .setImage(
      "https://media.discordapp.net/attachments/725981750135619594/760537981785342012/image0.gif"

    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.sendEmbed(embed);
});
////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.author.bot) return;
  if (SAEWAN.content.startsWith(prefix + "uptime")) {
    let uptime = bot.uptime;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;
    while (notCompleted) {
      if (uptime >= 8.64e7) {
        days++;
        uptime -= 8.64e7;
      } else if (uptime >= 3.6e6) {
        hours++;
        uptime -= 3.6e6;
      } else if (uptime >= 60000) {
        minutes++;
        uptime -= 60000;
      } else if (uptime >= 1000) {
        seconds++;
        uptime -= 1000;
      }
      if (uptime < 1000) notCompleted = false;
    }
    SAEWAN.channel.send(
      "`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`"
    );
  }
});
////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "ban")) {
    SAEWAN.author.send(
      "Hi"
    );
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle()
      .addField(
        `**لە تایبەت بۆتمان نارد**`,
        ``
      )
      .setFooter("By Dark Man",
      SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});
/////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "youtube")) {
    SAEWAN.author.send(
      "https://youtube.com/channel/UCwEmB4t-LUVgfsbl4GOqDdg"
    );
    let embed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle("━━━━━━━━━━━━━━━━━━━━")
      .addField(
        `**لە تایبەت بۆتـمـان نـارد سەبسکرایبیشمان بکە**`,
        `━━━━━━━━━━━━━━━━━━━━`
      )
      .setFooter("Youtube Discord School", SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});
////////////////
bot.on("message", message => {
  if (message.content === prefix + "list bot") {
    var list_all = [];
    message.guild.members.forEach(bb => {
      if (!bb.user.bot) return;
      list_all.push(`<@${bb.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});

bot.on("message", fantic => {
  if (fantic.content === "-private") {
    if (!fantic.member.hasPermission("ADMINISTRATOR"))
      return fantic.react(":x:");
    fantic.channel.overwritePermissions(fantic.guild.id, {
      VIEW_CHANNEL: false
    });
    fantic.react("🔒");
  }
});

bot.on("message", DARKMAN => {
  if (DARKMAN.author.bot)
return;
  
  if (!DARKMAN.content.startsWith(prefix)) return;
  let command = DARKMAN.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = DARKMAN.content.split(" ").slice(1);
  if (command === "say") {
    if (!DARKMAN.channel.guild)
     return DARKMAN.channel
        .send("**بەس لە سێرڤەر کاردەکات**")
        .then(m => m.delete(5000));
    if (!DARKMAN.member.hasPermission("ADMINISTRATOR"))
      return DARKMAN.channel.send("**تـۆ ڕۆڵـی `ADMINSTRATOT` نـیـە بـبـورە**");
    DARKMAN.delete();
    DARKMAN.channel.sendMessage(args.join(" "));
  }
  if (command == "embed") {
    if (!DARKMAN.channel.guild)
      return DARKMAN .channel
        .send("**بەس لە سێرڤەر کاردەکات **")
        .then(m => m.delete(5000));
    if (!DARKMAN.member.hasPermission("MANAGE_MESSAGES"))
      return DARKMAN.channel.send("**تـۆ ڕۆڵـی `ADMINSTRATOT` نـیـە بـبـورە**");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    DARKMAN.channel.sendEmbed(say);
    DARKMAN.delete();
  }
});

bot.on("message", fantic => {
  if (fantic.content === "-public") {
    if (!fantic.member.hasPermission("ADMINISTRATOR"))
      return fantic.react(":x:");
    fantic.channel.overwritePermissions(fantic.guild.id, {
      VIEW_CHANNEL: true
    });
    fantic.react("🔓");
  }
});

bot.on("guildCreate", async guild => {
  const embed = new Discord.RichEmbed()
    .setColor(`black`)
    .setTitle(`Joined!`)
    .setDescription(
      `Name server: ${guild.name} 

\ ID Server: ${guild.id} 

\Owned by: ${guild.owner}

\member count ${guild.memberCount}

\Created at: ${guild.createdAt}

\Verification Level: ${guild.verificationLevel}

thanks for invite bot  🤖 `
    );
  bot.channels.get("809027548414869524").send(embed);
});
bot.on("guildDelete", async guild => {
  const embed = new Discord.RichEmbed()
    .setColor(`black`)
    .setTitle(`Kicked!`)
    .setDescription(
      `Name server: ${guild.name}
\ID Server: ${guild.id}

\Owner bay: ${guild.owner}

\member count: ${guild.memberCount}

\Created at : ${guild.createdAt}

\Verification Level: ${guild.verificationLevel}

tell us the reason why you kicked our bot🤖`
    );
  bot.channels.get("809027582049386496").send(embed);
});

bot.on("message", message => {
  if (!message.channel.guild) return;
  var prefix = "-"; //// بە دڵی خۆت پڕیفێکسێ بنوسە /// set prefix
  if (message.content.startsWith(prefix + "all bots")) {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(
        `**${
          message.guild.members.filter(m => m.user.bot).size
        } بۆت دۆزرایەوە لەم سێرڤەرەدا**
${botssize.join("\n")}`
      )
      .setFooter(bot.user.username, bot.user.avatarURL)
      .setTimestamp();
    message.channel.send(embed);
  }
});

bot.on("message", message => {
  if (message.content.startsWith("-server")) {
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(":id:✽** Server ID:**", `» ${message.guild.id} `, true)
      .addField(
        ":calendar:✽**Created At**",
        `» ${message.guild.createdAt.toLocaleString()}`,
        true
      )
      .addField(":crown: ✽**owner server**", `**${message.guild.owner}**`, true)
      .addField(
        `✽** users ** [${message.guild.members.size}]`,
        `**${
          message.guild.members.filter(c => c.presence.status !== "offline")
            .size
        }** **user online**`,
        true
      )
      .addField(
        ":speech_balloon:✽**Channel Count **",
        `» **${message.guild.channels.filter(m => m.type === "text").size}**` +
          " Text | Voice " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField(":kurd:✽** Country **", ` ${message.guild.region}`, true) /////// 👇 WENAKAY BGORA gawad
      .setImage("")

      .setColor("black");
    message.channel.sendEmbed(embed);
  }
});

bot.on("message", message => {
  if (message.content.split(" ")[0].toLowerCase() === "-clear") {
    const word = message.content;
    const number = word.slice(7, word.length);
    const int = Number(number);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "You don't have `MANAGE_MESSAGES` permission "
      );
    }
    if (int >= 101) {
      return message.channel.send("I can't delete more than");
    }
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("Manage Messages permission required ");
    }
    if (int == "1000") {
      return message.channel.send("supply A Number to Delete");
    } else if (isNaN(int)) {
      return message.reply("Must be a number");
    }
    message.channel.bulkDelete(int).then(() => {
      return message.channel
        .send(`Cleared ${int} messages.`)
        .then(m => m.delete(5000));
    });
  }
});

bot.on("message", message => {
  if (message.content.split(" ")[0] === prefix + "avatar") {
    if (message.author.bot || message.channel.type == "dm") return;
    var args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    bot
      .fetchUser(avt)
      .then(user => {
        avt = user;
        let avtEmbed = new Discord.RichEmbed()
          .setColor("black")
          .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
          .setImage(avt.avatarURL)
          .setFooter(`Avatar`, message.client.user.avatarURL);
        message.channel.send(avtEmbed);
      })
      .catch(() =>
        message.channel.send(`You must lay down the person's hands`)
      );
  } // Julian
}); // Codes - Toxic Codes

bot.on("message", message => {
  if (message.content.startsWith("f/move all")) {
    if (!message.guild.member(bot.user).hasPermission("SEND_MESSAGES"))
      return message.reply("```You don't have enough permissions```");
    if (message.member.voiceChannel == null)
      return message.channel.send("```You have to be in a voice channel```");
    let ToOFaN;
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send("All members being moved");
  }
});

bot.on("message", message => {
  if (message.content.includes("@here")) {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      message.delete();

      message.reply("🚨 you can mention  🚨");
    }
  }
});

bot.on("message", message => {
  if (message.content.includes("@everyone")) {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      message.delete();

      message.reply("🚨 you can mention  🚨");
    }
  }
});

bot.on("message", message => {
  if (message.content === prefix + "settings") {
    if (!message.member.hasPermission("Ownership"))
      if (!message.channel.guild) return;
    if (message.content < 1023) return;
    const dark = new Discord.RichEmbed()
      .setAuthor(bot.user.username, bot.user.avatarURL)
      .setThumbnail(bot.user.avatarURL).setDescription(`AntiBan
Enabled:🟢 
Maximum Ban : ${config[message.guild.id].banLimit}
-
AntiKick
Enabled:🟢 
Maximum Kick : ${config[message.guild.id].kickLimits}
-
AntiChannelD
Enabled:🟢 
Maximum Delete : ${config[message.guild.id].chaDelLimit}
-
AntiChannelC
Enabled:🟢 
Maximum Create : ${config[message.guild.id].chaCrLimit}
-
AntiRoleD
Enabled:🟢 
Maximum Delete : ${config[message.guild.id].roleDelLimit}
-
AntiRoleC
Enabled:🟢 
Maximum Create : ${config[message.guild.id].roleCrLimits}
-
AntiTime
Enabled:🟢 
Maximum Time : ${config[message.guild.id].time}
`);

    message.channel.sendEmbed(dark);
  }
});
/////////all code dark man/////////

bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "js-mute")) {
    SAEWAN.author.send("https://pastebin.com/WPV0M29J");
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Send You Dm")
       
      .setFooter("Discord School", SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});
/////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "js-bc")) {
    SAEWAN.author.send("https://pastebin.com/bssvzWWx");
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Send You Dm")
       
      .setFooter("Discord School", SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});
/////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "js-clear")) {
    SAEWAN.author.send("https://pastebin.com/NaYeLqpk");
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Send You Dm")
       
      .setFooter("Discord School", SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});
/////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "js-autorole")) {
    SAEWAN.author.send("https://pastebin.com/N2wsX9Bx");
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Send You Dm")
       
      .setFooter("Discord School", SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});
/////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "js-dzhajnwe")) {
    SAEWAN.author.send("https://pastebin.com/HVy3JEac");
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Send You Dm")
       
      .setFooter("Discord School", SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});
/////////////////
/////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "js-unmute")) {
    SAEWAN.author.send("https://pastebin.com/0gqmBnT2");
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Send You Dm")
       
      .setFooter("Discord School", SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});
/////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "js-antikick")) {
    SAEWAN.author.send("https://pastebin.com/EXZUiTj8");
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Send You Dm")
       
      .setFooter("Discord School", SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});
/////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "js-reactionrole")) {
    SAEWAN.author.send("https://pastebin.com/vTJspw6J");
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Send You Dm")
       
      .setFooter("Discord School", SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});
/////////////////
bot.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "js-avatar")) {
    SAEWAN.author.send("https://pastebin.com/U317bBfe");
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Send You Dm")
       
      .setFooter("Discord School", SAEWAN.author.avatarURL);
    SAEWAN.channel.sendEmbed(embed);
  }
});

bot.on("message", message => {
  if (message.content.startsWith(prefix + "slots")) {
    let slot1 = ["🍏", "🍇", "🍒", "🍍", "🍅", "🍆", "🍑", "🍓"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1 === slots2 && slots2 === slots3) {
      we = "Win!";
    } else {
      we = "Lose!";
    }
    message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`);
  }
});

bot.on('message', message => {
if(message.content.startsWith(prefix + "stone")) {
let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

bot.on('message', message => {
if(message.content.startsWith(prefix + "scissors")) {
  let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

bot.on('message', message => {
if(message.content.startsWith(prefix + "paper")) {
  let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

//
/////////all server/////////


/////////////dzha jwen///////////
   bot.on('message', function(message){
    if(message.content.toLowerCase().includes("ker")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("qnt")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    
 }
 
});

/////////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("kerm")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("kerm ba qnt")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    
 }
 
});
///////////////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("quz")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("quz xoshat")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    
 }
 
});
//////
/////////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("xuskt dagem")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("daikt dagem")) {
      message.Delete;
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }

 
});
//////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("quz")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")



    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("tf")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
////////////////////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("gawad")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("xushk")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});

bot.on('message', function(message){
    if(message.content.toLowerCase().includes("maza")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("7aiwan")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
///////////

  bot.on('message', function(message){
    if(message.content.toLowerCase().includes("7iz")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("manga")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});

////////////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("کێرم")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("gubxo")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});

//////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("خوشک")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("دایک")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("بتگێم")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("مه زه")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
/////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("قنت")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("قوز")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
/////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("قنت")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("داکی بگێم")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
}); 
//////  
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("qundar")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("mnala")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
}); 
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("jzma")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("qondara")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
}); 
////////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("kuri")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("qn")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
}); 
////////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("qundar")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("porn")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
}); 
////////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("mnal")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("mndar")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
/////////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("قوندەر")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("قەشمەر")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
/////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("قوندەر")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("گەواد")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("بێ قیمەت")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("لەقوزی خوشک و دایکت بم")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("هیچ و پووچ")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("لەقوزی")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
////////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("حیز")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("تەنتە")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
///////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("gubxo")) {
        message.delete();
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("gbx")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});

//
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("Qa7pa")) {
        message.delete();
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed);    }
 
  
    if(message.content.toLowerCase().includes("Gawad")) {
        message.delete();
message.channel.send("");
    let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")




    message.author.sendEmbed(embed); }
 
});
///
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("qa7pa")) {
        message.delete();
let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")

    

    message.author.sendEmbed(embed);    }
 
  
    

});
////////
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("dagem")) {
        message.delete();
let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle("tkaya jwen maya")

    

    message.author.sendEmbed(embed);    }
 
  
    

});
///
bot.on('message', function(message){
    if(message.content.toLowerCase().includes("qa7ba")) {
        message.delete();
let embed = new Discord.RichEmbed()

      .setColor("GREEN")

      .setTitle(`tkaya jwen maya `)

    

    message.author.sendEmbed(embed);    }
 
  
    

});
/////help///
   ////////help//

bot.on('message', function(message){
    if(message.content.toLowerCase().includes("d!invite")) {
    
    let Dashboard = `
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=779464107739971646&permissions=8&scope=bot`;

    var addserver = `https://discord.com/api/oauth2/authorize?client_id=779464107739971646&permissions=8&scope=bot`;

    var SUPPORT = `https://discord.gg/chS5cc8X64`;

    var SPONSEER = `https://discord.gg/chS5cc8X64`;

    let embed = new Discord.RichEmbed()

      .setColor("RANDOM")

      .setDescription(
        `**${Dashboard}**
 dast lama da bo invite krdn**[Add To Server ](${addserver})**

 [**[ Server Support](${SUPPORT})** | **[ Sponsor ](${SPONSEER})**]`
      );

message.chanel.sendEmbed(embed); 
  }
});

////////message


bot.login(process.env.BOT_TOKEN);