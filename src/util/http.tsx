const API_KEY = "P51zLPeQSsyok8zvjSgjtuiHXkAoFQRx3fX2jFGv";

export const fetchQuestions = async (parameters: HttpParameters) => {
  const headers = { "X-Api-Key": API_KEY };

  const category = "category=" + parameters.category;
  const difficulty = "difficulty=" + parameters.difficulty;
  const limit = "limit=" + parameters.limit;

  const queries = `?${category}&${difficulty}&${limit}`;

  const url = `https://quizapi.io/api/v1/questions${queries}`;

  const response = await fetch(url, {
    headers,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    throw error;
  }

  const questions = await response.json();

  console.log(questions);
};

interface HttpParameters {
  category: string;
  difficulty: string;
  limit: string;
}
