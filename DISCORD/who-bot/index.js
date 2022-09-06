const { Client, GatewayIntentBits } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");
const { addSpeechEvent } = require("discord-speech-recognition");
require('dotenv').config()

const members = new Map([
  ["OnlyNothing#3623", "Kieran"],
  ["PopcornPig#3009", "George"],
  ["Zytose#3576", "Euan"],
  ["Daninjaman#8560", "Jamie"],
  ["Zoakie#7187", "Dan"],
  ["Matu#0368", "Matt"],
  ["IdiotheadNaiya#6687", "Mik"],
  ["Teeqow#5342", "Luca"]
]);

let WhoCounter = 0

const client = new Client({
  intents: [
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
  ],
});
addSpeechEvent(client);

function UserWordKick(member, msg, word) {
  if(msg === word) {
    member.kick("Said a bad word")
  }
  return; 
}

client.on("messageCreate", (msg) => {
  const voiceChannel = msg.member?.voice.channel;
  if (voiceChannel) {
    joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      selfDeaf: false,
    });
  }
});

client.on("speech", (msg) => {
  if (!msg.content) return;
  const logchannel = client.channels.cache.get('838831783759577098');
  const generalchannel = client.channels.cache.get('693124741065736195');
  //const channel = msg.member?.voice.channel;
  // UserWordKick(msg.member, msg, "cock")
  if (msg.content === "who" || msg.content === "Who") {
    // if (msg.member.user.tag === "Matu#0368") {
      msg.member.voice.setChannel('782689476152918046')
      WhoCounter = WhoCounter + 1
      generalchannel.send("Todays Who Count: " + WhoCounter)
    // }
  }
  logchannel.send(members.get(msg.member.user.tag) +": " + msg.content)
});

client.on("ready", () => {
  console.log("Ready!");
});

client.login(process.env.TOKEN);
