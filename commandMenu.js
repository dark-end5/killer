/**
 * KILLER BOT - Command Menu Display System
 * Created by: dark-end5
 * Beautiful menu layout for all bot commands
 */

import chalk from 'chalk';

// Main menu builder
export const buildCommandMenu = () => {
  const menu = `
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║           🔥 KILLER BOT - COMMAND MENU 🔥                    ║
║                                                                ║
║              Made with ❤️ by dark-end5 in Kenya              ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

┌─ 📱 GENERAL COMMANDS ─────────────────────────────────────────┐
│                                                                │
│  .help           │ Show all available commands                │
│  .menu           │ Display this command menu                  │
│  .ping           │ Check bot response time                    │
│  .owner          │ Get owner contact                          │
│  .creator        │ Show bot creator info                      │
│  .speed          │ Test internet speed                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌─ 🎭 REACTION COMMANDS ────────────────────────────────────────┐
│                                                                │
│  .react [emoji]  │ React to replied message                   │
│  .autoreact on   │ Enable auto-reactions                      │
│  .autoreact off  │ Disable auto-reactions                     │
│  .reactions      │ Show all reaction emojis                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌─ 🖼️  MEDIA COMMANDS ───────────────────────────────────────────┐
│                                                                │
│  .play [query]   │ Download & play music                      │
│  .ytmp4 [url]    │ Download YouTube video                     │
│  .ytmp3 [url]    │ Download YouTube audio                     │
│  .tiktok [url]   │ Download TikTok video                      │
│  .ig [url]       │ Download Instagram post                    │
│  .fb [url]       │ Download Facebook video                    │
│  .pinterest [url]│ Download Pinterest image                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌─ 🎨 IMAGE COMMANDS ───────────────────────────────────────────┐
│                                                                │
│  .blur [reply]   │ Blur replied image                         │
│  .rotate [reply] │ Rotate image 90 degrees                    │
│  .resize [reply] │ Resize image                               │
│  .crop [reply]   │ Crop image                                 │
│  .filter [reply] │ Apply filter to image                      │
│  .grayscale [r]  │ Convert image to grayscale                 │
│  .neon [reply]   │ Create neon effect                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌─ 🔍 SEARCH COMMANDS ──────────────────────────────────────────┐
│                                                                │
│  .google [query] │ Search on Google                           │
│  .wiki [query]   │ Search on Wikipedia                        │
│  .urban [query]  │ Search on Urban Dictionary                 │
│  .anime [query]  │ Search anime information                   │
│  .manga [query]  │ Search manga information                   │
│  .weather [city] │ Get weather information                    │
│  .movie [query]  │ Search movie info                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌─ 🎮 GAME COMMANDS ────────────────────────────────────────────┐
│                                                                │
│  .tictactoe      │ Play tic-tac-toe game                      │
│  .dice           │ Roll a dice                                │
│  .coin           │ Flip a coin                                │
│  .rps            │ Play rock-paper-scissors                   │
│  .guess          │ Number guessing game                       │
│  .trivia         │ Play trivia quiz                           │
│  .hangman        │ Play hangman game                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌─ 💬 TEXT COMMANDS ────────────────────────────────────────────┐
│                                                                │
│  .quote          │ Get random quote                           │
│  .joke           │ Get random joke                            │
│  .poem           │ Get random poem                            │
│  .translate [l]  │ Translate text to language                 │
│  .reverse [text] │ Reverse text                               │
│  .morse [text]   │ Convert to morse code                      │
│  .upcase [text]  │ Convert to UPPERCASE                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌─ 👥 GROUP COMMANDS ───────────────────────────────────────────┐
│                                                                │
│  .promote [@user]│ Promote user to admin                      │
│  .demote [@user] │ Demote admin to member                     │
│  .kick [@user]   │ Remove user from group                     │
│  .mute [@user]   │ Mute user in group                         │
│  .unmute [@user] │ Unmute user in group                       │
│  .groupinfo      │ Show group information                     │
│  .members        │ List all group members                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌─ ⚙️  ADMIN COMMANDS ───────────────────────────────────────────┐
│                                                                │
│  .setprefix [x]  │ Change command prefix                      │
│  .settings       │ Show bot settings                          │
│  .broadcast [m]  │ Broadcast message to all chats             │
│  .restart        │ Restart the bot                            │
│  .update         │ Update bot from repository                 │
│  .backup         │ Backup database                            │
│  .restore [file] │ Restore from backup                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌─ 💎 PREMIUM COMMANDS ─────────────────────────────────────────┐
│                                                                │
│  .premium        │ Check premium status                       │
│  .buypremium     │ Purchase premium access                    │
│  .premium info   │ Show premium features                      │
│  .sticker [img]  │ Create sticker from image (Premium)        │
│  .ai [text]      │ AI chat response (Premium)                 │
│  .nulis [text]   │ Create handwritten text (Premium)          │
│                                                                │
└────────────────────────────────────────────────────────────────┘

╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║              📌 COMMAND USAGE TIPS                           ║
║                                                                ║
║  • Use prefix . before each command (e.g., .help)            ║
║  • [ ] = optional parameter                                   ║
║  • Reply to message for commands that use reply               ║
║  • @ = mention user (e.g., .promote @username)               ║
║  • Prefix can be changed with .setprefix                     ║
║  • Premium features require active subscription              ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════════╗
║                     🔥 REACTION EXAMPLES 🔥                   ║
║                                                                ║
║  Messages containing keywords trigger auto-reactions:        ║
║                                                                ║
║  "hello" → 👋😊                                              ║
║  "killer" → 🔥💯⚡                                             ║
║  "love" → ❤️💚                                                ║
║  "awesome" → 🔥💯                                              ║
║  "wow" → 😮🔥                                                 ║
║  "lol" → 😂🎉                                                 ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║              💚 KILLER BOT - Always Awesome 💚               ║
║                                                                ║
║         Type .help [category] for more information            ║
║                                                                ║
║            Questions? Contact: .owner or .creator             ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
`;

  return menu;
};

// Category-specific menus
export const buildCategoryMenu = (category) => {
  const categories = {
    general: `
╔═══════════════════════════════════════════════╗
║    📱 GENERAL COMMANDS                        ║
╚═══════════════════════════════════════════════╝

.help              Show all commands
.menu              Display full menu
.ping              Check bot status
.owner             Owner contact info
.creator           Bot creator info
.speed             Internet speed test
.alive             Check if bot is online
.uptime            Bot running time
.botinfo           Bot information
.invite [link]     Create invite link
    `,
    
    reaction: `
╔═══════════════════════════════════════════════╗
║    🎭 REACTION COMMANDS                       ║
╚═══════════════════════════════════════════════╝

.react [emoji]     React with custom emoji
.autoreact on      Enable auto-reactions
.autoreact off     Disable auto-reactions
.reactions         Show all reaction emojis
.addreaction       Add custom reaction
.removereaction    Remove reaction
.myreactions       Show your reactions
    `,
    
    media: `
╔═══════════════════════════════════════════════╗
║    🖼️  MEDIA COMMANDS                         ║
╚═══════════════════════════════════════════════╝

.play [query]      Download music
.ytmp4 [url]       YouTube video
.ytmp3 [url]       YouTube audio
.tiktok [url]      TikTok video
.ig [url]          Instagram post
.fb [url]          Facebook video
.pinterest [url]   Pinterest image
.twitter [url]     Twitter video
    `,
    
    games: `
╔═══════════════════════════════════════════════╗
║    🎮 GAME COMMANDS                           ║
╚═══════════════════════════════════════════════╝

.tictactoe         Tic-tac-toe game
.dice              Roll dice (1-6)
.coin              Flip coin
.rps [choice]      Rock-Paper-Scissors
.guess [number]    Guess the number
.trivia            Play trivia quiz
.hangman [word]    Hangman game
.wordchain         Word chain game
    `,
    
    admin: `
╔═══════════════════════════════════════════════╗
║    ⚙️  ADMIN COMMANDS                        ║
╚═══════════════════════════════════════════════╝

.setprefix [x]     Change command prefix
.promote [@user]   Make user admin
.demote [@user]    Remove admin status
.kick [@user]      Remove from group
.mute [@user]      Silence user
.unmute [@user]    Allow user to speak
.groupinfo         Group details
.members           List members
    `
  };

  return categories[category] || 'Category not found!';
};

// Mini help text
export const getQuickHelp = () => {
  return `
╔════════════════════════════════════════════════════════════════╗
║  🔥 KILLER BOT - Quick Help                                   ║
╚════════════════════════════════════════════════════════════════╝

Type these commands to get started:

  .menu              → Full command menu
  .help [category]   → Help for category
  .settings          → Bot settings
  .about             → About this bot

Categories: general, reaction, media, games, admin, premium

🌟 Quick Tips:
  • All commands start with . prefix
  • You can reply to messages for media commands
  • Use @ to mention users in group commands
  • Premium members get extra features

Need help? Type .owner to contact the creator!
  `;
};

// Export all menus
export default {
  buildCommandMenu,
  buildCategoryMenu,
  getQuickHelp,
};
