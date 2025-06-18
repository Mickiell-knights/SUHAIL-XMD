export async function init() {
  console.log("Bot initializing...");
}

export const DATABASE = {
  sync: async () => console.log("Database synced.")
};

export async function connect() {
  console.log("Connected to WhatsApp.");
}

export const logger = {
  info: console.log
};

export default {
  init,
  DATABASE,
  connect,
  logger
};
