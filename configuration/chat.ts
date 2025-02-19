import { AI_ROLE, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hey! I'm ${AI_NAME}, a ${AI_ROLE}.  What do you need help with for your running training?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `I'm out of breath.  Give me a second to recover and ask me again!`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
