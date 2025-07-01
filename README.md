# 🚀 Discord AtlasSelf V1.1
A modular selfbot implementation using `discord.js-selfbot-v13` with voice channel and auto-react functionality.
## 🔧 Configuration (config.json)
```json
{
  // REQUIRED: Your Discord account token
  "token": "YOUR_USER_TOKEN_HERE",
  
  // Voice channel settings
  "voice": {
    "enabled": true,          // Enable voice connection
    "channel_id": "ID_HERE",  // Voice channel ID to join
    "self_deaf": true,        // Join deafened
    "self_mute": true         // Join muted
  },
  
  // Auto-react settings
  "auto_react": {
    "enabled": true,          // Enable auto-reactions
    // Format: "USER_ID": ["emoji1", "emoji2"]
    "reactions": {
      "USER_ID_1": ["🔥", "❤️"],
      "USER_ID_2": ["👍", "😂"]
    }
  }
}
```

## ✨ Features
- 24/7 Voice Channel Stay
- Auto-React System
- Multi-User Reaction Support
- Automatic Reconnection

## 💬 Need Help?
Join our support server:  
[![Support Server](https://img.shields.io/discord/your_server_id?label=Support%20Server&style=for-the-badge)](https://discord.gg/THNHYkh2aV)
