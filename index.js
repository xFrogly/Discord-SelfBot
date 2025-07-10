const { Client } = require('discord.js-selfbot-v13');
const config = require('./config.json');
const voiceHandler = require('./handlers/voiceHandler');
const autoReactHandler = require('./handlers/autoReactHandler');
const logger = require('./utils/logger');

const client = new Client({ checkUpdate: false });

if (config.voice.enabled) voiceHandler(client, config);
if (config.auto_react.enabled) autoReactHandler(client, config);

client.on('ready', () => {
  logger.success(`🟢 ${client.user.tag}`);
});

client.login(config.token).catch(err => {
  logger.error('Login failed:', err);
  process.exit(1);
});

process.on('SIGINT', () => {
  client.destroy();
  logger.info('Bot shutdown complete');
  process.exit();
});
