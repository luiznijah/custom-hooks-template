// import React, { useState, useEffect } from "react";
// import { BASE_URL } from "./constants/constants";
// import axios from "axios";
import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useRequerstData } from './hooks/useRequerstData';
// import { useCapturarNome } from "./hooks/useCapturarNome";
// import { useCapturarPostagens } from "./hooks/useCapturarPostagens";

function App() {
  const [nomeUsuarios, isloadingUsuarios] = useRequerstData("users")
  const [postagens, isloadingPostagens] = useRequerstData("comments")

  

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        { !isloadingUsuarios ? (
        nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })
        ) : (
          <p>carregando usuarios</p>
        )
      }
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>

      { !isloadingPostagens ? (
      postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })
      ) : (
        <p>carregando postagens</p>
      )
    }
      </PostContainer>
    </div>
  );
}

export default App;



