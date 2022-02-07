import { MinhaDiv } from "./Card.style";
import { Descricao } from "./Card.style";
import { Botao } from "./Card.style";


export const Card =({jogos}) => {
    return (
        <MinhaDiv>
            <h1>{jogos.title}</h1>
            <img src={jogos.thumbnail}></img>
            <Descricao>{jogos.short_description.slice(0,250) + "..."}</Descricao>
            <Botao>Ver mais</Botao>
           </MinhaDiv>
    )
}