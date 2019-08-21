const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} Sunucuya giriş yaptı!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
});

client.login('NjEzMDY5NDQyMzg5MTE0OTQw.XVrm7w.I3hKaHz5wx6KCjuPKrNNIxYnGj8');
