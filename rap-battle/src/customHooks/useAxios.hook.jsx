import { useState } from 'react';
import axios from 'axios';

const baseURL = 'https://ezmh9t6vbvhitgly.us-east-1.aws.endpoints.huggingface.cloud';

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer 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',
    'Content-Type': 'application/json'
  }

  const fetchData = async (setter, text) => {
    try {
      setIsLoading(true)
      const response = await axios.post(
        baseURL,
        {
          inputs: {
            text: text,
            language: "en",
            model_id: "3ccb64b4-8a8b-4abe-ab73-40a2ea307b08"
          }
        },
        { headers: headers }
      );
      console.log(response)
      setError(null)
      setter([...response?.data])
    } catch (err) {
      setError(err?.response?.data?.error || 'An error occurred');
    } finally {
      setIsLoading(false)
    }
  }

  return {
    error,
    isLoading,
    fetchData
  }
}

export default useAxios;