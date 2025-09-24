
'use server';
/**
 * @fileOverview A simple chat flow.
 *
 * - chat - A function that handles the chat interaction.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export async function chat(message: string): Promise<string> {
    return chatFlow(message);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (prompt) => {
    const {output} = await ai.generate({
      prompt: `You are Yeobaek-bot, a friendly and helpful assistant for a company called YeoBaek, which specializes in scientific research and laboratory services. Please answer the user's question concisely.

User's question: ${prompt}`,
      model: 'googleai/gemini-pro',
    });

    return output ?? "I'm sorry, I couldn't generate a response.";
  }
);
