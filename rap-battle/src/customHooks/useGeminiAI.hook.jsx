import React, { useEffect, useState } from 'react'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { API_KEY } from "../Contants";

const useGeminiAI = ({ prompt }) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
    response_mime_type: 'application/json'
  };

  const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE, },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE, },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE, },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE, },
  ];

  useEffect(() => {
    runGemini()
  }, [])

  async function runGemini() {
    setError(false)
    setResult([])
    try {
      setIsLoading(true)

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
      });

      const parts = [
        { text: prompt },
      ];

      const result = await model.generateContent({
        contents: [
          { role: "user", parts }
        ],
        generationConfig,
        safetySettings,
      });
      const response = await result.response;

      const responseText = await response.text();
      const parsedResponse = JSON.parse(responseText);
      setResult(parsedResponse.rapBattle)

    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }

  }
  return {
    result,
    isLoading,
    error
  }
}

export default useGeminiAI






