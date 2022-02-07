export const fetchGames = async (params) => {
  try {
    const response = await fetch(`${process.env?.REACT_APP_URL}/${params}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_HOST,
        "x-rapidapi-key": process.env.REACT_APP_KEY,
      }
    });
    const games = await response.json();
    return games
  } catch (e) {
    console.error(e.message);
  }
};
