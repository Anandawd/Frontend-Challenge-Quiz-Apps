// kunci yang digunakan untuk menyimpan data soal kuis dalam localStorage.
const CACHE_KEY = "quiz_questions_cache";
const CACHE_EXPIRATION = 1000 * 60 * 60;

// Fungsi ini mengambil data soal kuis dari API
export const fetchQuestionsWithRetry = async (retries = 3, delay = 1000) => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  if (cachedData) {
    const { timestamp, data } = JSON.parse(cachedData);
    if (Date.now() - timestamp < CACHE_EXPIRATION) {
      return data;
    }
  }

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );
      if (!response.ok) {
        if (response.status === 429) {
          console.log(`Rate limited. Retrying in ${delay / 1000} seconds...`);
          await new Promise((resolve) => setTimeout(resolve, delay));
          delay *= 2; // Exponential backoff
          continue;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), data: data.results })
      );
      return data.results;
    } catch (error) {
      if (i === retries - 1) throw error;
    }
  }
  throw new Error("Max retries reached");
};
