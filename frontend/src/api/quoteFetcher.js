export async function getRandomQuote(feeling) {
    try {
      const res = await fetch(`http://localhost:4000/api/quote?feeling=${feeling}`);
      const data = await res.json();
      return data;
    } catch (err) {
      return { text: "Everything happen for a reason.", author: "For You" };
    }
  }
  