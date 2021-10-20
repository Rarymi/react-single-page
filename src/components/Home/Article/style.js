import styled from 'styled-components';

export const ArticleContainer = styled.article`
  display: flex;
  margin: 16px 0;
  flex-direction: row-reverse;
  img {
    height: 400px;
    margin-left: 5%;
    margin-top: 10%;
    margin-right: 5%;
    margin-bottom: 2%;
  }

  .classEven {
    h2 {
      margin-top: 27%;
      font-size: 37px;
      margin-left: 2%;

      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    p {
      color: #383b39;
      font-size: 27px;
      margin-left: 2%;
      margin-right: 33%;
      font-style: italic;
      text-align: justify;
    }

    button {
      font-size: 17px;
      margin-left: 59%;
      cursor: pointer;
      border: solid 2px #15612d;
      border-radius: 4px;
      :hover {
        background-color: #00260c;
        color: white;
        font-weight: bold;
      }
    }
  }

  .classOdd {
    h2 {
      margin-top: 27%;
      font-size: 37px;
      margin-left: 40%;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    p {
      font-size: 27px;
      margin-left: 40%;
      color: #383b39;
      font-style: italic;
      text-align: justify;
    }

    button {
      font-size: 17px;
      margin-left: 40%;
      cursor: pointer;
      border: solid 2px #15612d;
      border-radius: 4px;
      :hover {
        background-color: #00260c;
        color: white;
        font-weight: bold;
      }
    }
  }
`;
