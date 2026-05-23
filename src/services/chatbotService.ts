/**
 * Chatbot Service — Bot config, responses, and knowledge base
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/chatbot/config')         ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * Admin panel can:
 *  - Change bot name and avatar
 *  - Edit response categories (keywords + reply text)
 *  - Edit fallback message
 *  - Edit quick prompts
 *  - Update any stale institutional data (fees, packages, contacts)
 */

import { mockChatbotConfig, type ChatbotConfig, type ChatbotResponseItem } from '../mock/chatbot/chatbotData'
import { mockStore } from '../data/mockStore'

/**
 * GET /api/chatbot/config
 */
export const getChatbotConfig = async (): Promise<ChatbotConfig> => {
  return mockStore.getChatbotConfig()
}

/**
 * PUT /api/chatbot/config
 */
export const saveChatbotConfig = async (data: ChatbotConfig): Promise<void> => {
  mockStore.saveChatbotConfig(data)
}

/** Synchronous default — prevents flash on first render */
export const chatbotDefaults: ChatbotConfig = mockChatbotConfig

export type { ChatbotConfig, ChatbotResponseItem }

export const chatbotService = {
  getChatbotConfig,
  saveChatbotConfig,
}

export default chatbotService
