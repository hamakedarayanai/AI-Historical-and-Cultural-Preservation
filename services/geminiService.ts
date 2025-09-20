
import { GoogleGenAI, Type } from "@google/genai";
import type { HistoricalExperience } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateHistoricalExperience = async (location: string, timePeriod: string): Promise<HistoricalExperience> => {
  try {
    // Step 1: Generate textual content (narrative, document, soundscape)
    const textGenerationPrompt = `You are an AI historical researcher and artist. For the location '${location}' during the time period '${timePeriod}', generate a rich historical and cultural experience. Provide the following in JSON format: 1. A vivid narrative description (2-3 paragraphs). 2. A simulated historical document, such as a diary entry from a person of that time or a short newspaper article, with a title and content. 3. A list of 3-5 key elements for an accompanying audio soundscape.`;

    const textResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: textGenerationPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            narrative: {
              type: Type.STRING,
              description: "A vivid narrative description of the time and place."
            },
            document: {
              type: Type.OBJECT,
              properties: {
                title: {
                  type: Type.STRING,
                  description: "The title of the historical document."
                },
                content: {
                  type: Type.STRING,
                  description: "The content of the historical document."
                }
              },
              required: ["title", "content"]
            },
            soundscape: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING
              },
              description: "A list of soundscape elements."
            }
          },
          required: ["narrative", "document", "soundscape"]
        },
      },
    });

    const textData = JSON.parse(textResponse.text);

    // Step 2: Generate an image based on the narrative
    const imageGenerationPrompt = `Create a high-resolution, full-color, photorealistic image based on the following historical description: "${textData.narrative}". The style should be reminiscent of a restored color photograph from the era, capturing the atmosphere and details described.`;
    
    const imageResponse = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: imageGenerationPrompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '16:9',
        },
    });

    if (!imageResponse.generatedImages || imageResponse.generatedImages.length === 0) {
        throw new Error('Image generation failed.');
    }

    const base64ImageBytes: string = imageResponse.generatedImages[0].image.imageBytes;
    const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;

    // Step 3: Combine all generated data
    return {
      narrative: textData.narrative,
      document: textData.document,
      soundscape: textData.soundscape,
      imageUrl: imageUrl,
    };

  } catch (error) {
    console.error("Error generating historical experience:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate experience: ${error.message}`);
    }
    throw new Error("An unknown error occurred during content generation.");
  }
};
