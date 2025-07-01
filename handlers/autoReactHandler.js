const logger = require('../utils/logger');

module.exports = (client, config) => {
  client.on('messageCreate', async message => {
    try {
      if (message.author.bot || message.author.id === client.user.id) return;

      const userId = message.author.id;
      const reactions = config.auto_react.reactions[userId];

      if (reactions?.length > 0) {
        for (const emoji of reactions) {
          await message.react(emoji).catch(err => {
            logger.warn(`Failed to react with ${emoji}:`, err.message);
          });
        }
      }
    } catch (error) {
      logger.error('Auto-react error:', error.message);
    }
  });

  logger.info('Auto-react handler initialized');
};