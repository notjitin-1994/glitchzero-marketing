'use server';

/**
 * @fileOverview A Genkit flow to translate the landing page content into a specified language.
 *
 * - translateLandingPageContent - A function that translates the landing page content.
 * - TranslateLandingPageContentInput - The input type for the translateLandingPageContent function.
 * - TranslateLandingPageContentOutput - The return type for the translateLandingPageContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateLandingPageContentInputSchema = z.object({
  text: z.string().describe('The text to translate.'),
  targetLanguage: z.string().describe('The target language for translation (e.g., hi for Hindi).'),
});
export type TranslateLandingPageContentInput = z.infer<
  typeof TranslateLandingPageContentInputSchema
>;

const TranslateLandingPageContentOutputSchema = z.object({
  translatedText: z.string().describe('The translated text.'),
});
export type TranslateLandingPageContentOutput = z.infer<
  typeof TranslateLandingPageContentOutputSchema
>;

export async function translateLandingPageContent(
  input: TranslateLandingPageContentInput
): Promise<TranslateLandingPageContentOutput> {
  return translateLandingPageContentFlow(input);
}

const translateLandingPageContentPrompt = ai.definePrompt({
  name: 'translateLandingPageContentPrompt',
  input: {schema: TranslateLandingPageContentInputSchema},
  output: {schema: TranslateLandingPageContentOutputSchema},
  prompt: `Translate the following text to {{targetLanguage}}:

{{text}}`,
});

const translateLandingPageContentFlow = ai.defineFlow(
  {
    name: 'translateLandingPageContentFlow',
    inputSchema: TranslateLandingPageContentInputSchema,
    outputSchema: TranslateLandingPageContentOutputSchema,
  },
  async input => {
    const {output} = await translateLandingPageContentPrompt(input);
    return output!;
  }
);
