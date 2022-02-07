import { useEffect, useState } from "react";
import { Card } from "../Card";
import { fetchGames } from "../../services/games";



export const Pagegames = () => {
    const [lista, setlista] = useState([])
    useEffect(() => {
        const pegaApi = async () => {
            const jogos = await fetchGames("games");
            setlista(jogos);
        }
        pegaApi()
    }, [])

    return (
        <>
          

            {
                lista.map((jogo, index) => (index < 20 ? <Card key={jogo.id} jogos={jogo}></Card> : null))
            }
        </>
    )
}

