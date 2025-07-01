const { joinVoiceChannel, VoiceConnectionStatus } = require('@discordjs/voice');
const logger = require('../utils/logger');

module.exports = (client, config) => {
  let connection = null;

  const connect = async () => {
    try {
      const channel = client.channels.cache.get(config.voice.channel_id);
      if (!channel || channel.type !== 'GUILD_VOICE') {
        throw new Error('Invalid voice channel');
      }

      connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
        selfDeaf: config.voice.self_deaf,
        selfMute: config.voice.self_mute
      });

      connection.on(VoiceConnectionStatus.Disconnected, () => {
        logger.warn('Disconnected from voice, reconnecting...');
        setTimeout(connect, 5000);
      });

      logger.success(`Connected to voice channel: ${channel.name}`);
    } catch (error) {
      logger.error('Voice connection failed:', error.message);
      setTimeout(connect, 10000);
    }
  };

  client.on('ready', connect);
};