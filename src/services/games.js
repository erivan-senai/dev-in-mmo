export const fetchGames = async (parametro) => {
    try {
        const response = await fetch(`https://mmo-games.p.rapidapi.com/${parametro}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": "996bb7b8d2msha6d7f09d6f44eadp113ce2jsn79ca92fe21e9"
            },
        });
        const jogos = await response.json();
        return jogos
    } catch (e) {
        console.error(e.message);
    }
};