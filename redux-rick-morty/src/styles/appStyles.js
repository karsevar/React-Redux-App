import styled from 'styled-components';

export const CharactersDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 10px;
`;

export const ErrorParagraph = styled.p`
    padding: 16px;
    background-color: #ffb7b7;
    color: red;
    border: solid 1px #f39595;
    border-radius: 4px;
    max-width: 700px;
    margin: 16px auto;
`;

export const FetchButton = styled.button`
    background: blue;
    color: white;
    border-style: none;
    border-radius: 25px;
    width: 200px;
    height: 70px;
    margin: 15px auto;
    font-size: 16px;
    text-weight: 900;
`;

export const CharacterDiv = styled.div`
  font-family: "sans-serif";
  margin: 0px 5px 40px 5px;
  box-shadow: 1px 1px 9px 2px #888888;
  padding: 10px;
  border-radius: 10px;
  width: 320px;
  

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CharacterImg = styled.img`
  width: 300px;
  border-radius: 10px;
`;

export const CharacterH3 = styled.h3`
  font-size: 2.2rem;

  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const CharacterH4 = styled.h3`
  font-size: 1.2rem;

  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const CharacterParagraph = styled.p`
  font-size: 1rem;

  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const LocationContainer = styled.div`
  box-shadow: 1px 1px 9px 2px #888888;
  border-radius: 5px;
  width: 350px;
  margin-bottom: 30px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
