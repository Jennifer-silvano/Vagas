import React, { useState } from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Publication from './components/Publication';

function App() {
  const [posts, setPosts] = useState([]); // Estado para as publicações

  // Função para adicionar uma nova publicação
  const handleAddPost = (newPostContent) => {
    const newPost = {
      id: posts.length + 1, // Um ID único para cada post
      user: "Usuário Atual", // Exemplo de nome do usuário
      content: newPostContent,
      likes: 0, // Exemplo de interações
      comments: 0,
      shares: 0,
      profilePicture: "https://cdn-icons-png.flaticon.com/512/5987/5987462.png",
      position: "Sua posição atual", // Exemplo de cargo ou posição
    };
    setPosts([newPost, ...posts]); // Adiciona a nova publicação ao estado
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-100 flex justify-center space-x-4 mt-4">
        <Sidebar />
        <div>
          {/* Passa a função de publicar para o componente Publication */}
          <Publication onPublish={handleAddPost} /> 
          {/* Passa as publicações para o componente Feed */}
          <Feed posts={posts} />
        </div>
        <Widgets />
      </div>
    </div>
  );
}

export default App;
