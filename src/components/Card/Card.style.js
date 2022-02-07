import styled from "styled-components";
//estilização dos Cards
export const MinhaDiv = styled.div`
    background-color: red;
    max-width: 500px;   
    max-height: 500px;   
    border: 2px; 
    padding: 1rem;  
    margin: 5rem 1rem 2rem 5rem; 
    justify-items: center;  
    display: inline-block;   
    text-align: center;                       
`;

export const Descricao = styled.p`
width: 100%;  
text-align: justify;  
max-height: 2rem;  
min-height: 4rem;  
margin: 1.25rem 0 1rem;  
text-overflow: ellipsis;
`;

export const Botao = styled.button`
background: white;
border: 2px;
margin: 1rem;
padding: 0.7rem 2rem ;
border-radius: 5px;
`;



