import axios from 'axios';
import chalk from 'chalk';

/**
 * KILLER BOT - Auto React Commands System
 * Created by: dark-end5
 * Features: Automatic reactions, custom emojis, reaction triggers
 */

// Reaction emojis pool
const reactionEmojis = ['👍', '❤️', '😂', '😮', '😢', '🔥', '💯', '🎉', '✨', '💚', '👏', '🙌'];

// Auto-react triggers
const autoReactTriggers = {
  'hello': ['👋', '😊'],
  'killer': ['🔥', '💯', '⚡'],
  'hi': ['👋', '😊'],
  'love': ['❤️', '💚'],
  'fire': ['🔥', '⚡'],
  'good': ['👍', '💯'],
  'thanks': ['🙏', '❤️'],
  'thanks': ['🙏', '❤️'],
  'awesome': ['🔥', '💯'],
  'nice': ['👍', '✨'],
  'sick': ['🔥', '💯'],
  'wow': ['😮', '🔥'],
  'lol': ['😂', '🎉'],
  'sad': ['😢', '🤗'],
};

// Random reaction function
export const getRandomReaction = () => {
  return reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
};

// Get reactions for specific trigger
export const getReactionsForTrigger = (text) => {
  const lowerText = text.toLowerCase().trim();
  
  for (const [trigger, reactions] of Object.entries(autoReactTriggers)) {
    if (lowerText.includes(trigger)) {
      return reactions;
    }
  }
  
  return [getRandomReaction()];
};

// Auto-react to message
export const autoReactToMessage = async (client, key, reactions) => {
  try {
    if (!Array.isArray(reactions)) {
      reactions = [reactions];
    }
    
    for (const emoji of reactions) {
      await client.sendMessage(key.remoteJid, {
        react: { text: emoji, key }
      });
      
      // Small delay between reactions
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  } catch (error) {
    console.error(chalk.red(`[ERROR] Auto-react failed: ${error.message}`));
  }
};

// Keyword reaction system
export const keywordReactions = {
  '.react <emoji>': 'React to a message with custom emoji',
  '.autoreact on': 'Enable auto-reactions',
  '.autoreact off': 'Disable auto-reactions',
  '.reactions': 'Show all available reactions',
};

// Advanced auto-react settings
export const autoReactSettings = {
  enabled: true,
  delay: 300, // milliseconds between reactions
  maxReactionsPerMessage: 3,
  triggers: autoReactTriggers,
};

// Function to add custom trigger
export const addCustomTrigger = (keyword, reactions) => {
  autoReactTriggers[keyword.toLowerCase()] = reactions;
  console.log(chalk.green(`✅ Added reaction trigger for: ${keyword}`));
};

// Function to remove trigger
export const removeTrigger = (keyword) => {
  delete autoReactTriggers[keyword.toLowerCase()];
  console.log(chalk.red(`❌ Removed reaction trigger for: ${keyword}`));
};

// Get all triggers
export const getAllTriggers = () => {
  return autoReactTriggers;
};

export default {
  getRandomReaction,
  getReactionsForTrigger,
  autoReactToMessage,
  addCustomTrigger,
  removeTrigger,
  getAllTriggers,
  autoReactSettings,
  keywordReactions,
};
