import React from 'react';
import { FaThumbsUp, FaCommentAlt, FaShare, FaPaperPlane } from 'react-icons/fa';



const Feed = () => {
    const posts = [
      { 
          id: 1, 
          user: "Maria Silva", 
          content: "Acabei de ser promovida a gerente de projetos na Empresa XYZ! 🎉", 
          likes: 45, 
          comments: 10, 
          shares: 5, 
          profilePicture: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
          image: "https://factorialhr.com.br/wp-content/uploads/2023/06/26101109/dia-do-amigo-empresas-trabalho-comemorar-celebrar.jpg",
          position: "CIO-XYZ", 
  
        },
        { 
          id: 2, 
          user: "Gustavo Cardoso", 
          content: "Html intermediário\nAulas de Input type com Dev em Dobro", 
          likes: 22, 
          comments: 1, 
          shares: 3, 
          image: "https://plantillashtmlgratis.com/wp-content/uploads/2019/images/page281/traveler.jpeg", // Adicione aqui o caminho da imagem
          profilePicture: "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png", // Foto de perfil de Gustavo Cardoso
          position: "Analista de processos pessoais na Évora SP - Regularização", // Informação adicional
        },
     
        {
        id: 3, 
        user: "Leonardo Nogueira", 
        content: "Primeira de muitas palestas pela frente, obrigado pela oportunidade #EMpwe", 
        likes: 22, 
        comments: 1, 
        shares: 3, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxhND1WzS_iNuMRqdOL4nKKSBXVlg7bwjVw&s", 
        profilePicture: "https://w7.pngwing.com/pngs/857/213/png-transparent-man-avatar-user-business-avatar-icon.png", 
        position: "Analista de dados | Estagiário", 
      },

      {
        id: 2, 
        user: "Larissa Pires", 
        content: "Hoje foi mais um dia de trabalho duro aqui na epresa ",  
        likes: 22, 
        comments: 1, 
        shares: 3, 
        image: "https://revista.buildings.com.br/wp-content/uploads/2023/06/42.jpeg", 
        profilePicture: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png", 
        position: "Empresaria | Área da tecnologia -SP ", 
      }
  ];
      
  

  
  
    return (
      
      
  
          <div className="bg-gray-100 p-8 min-h-screen flex flex-col items-center space-y-8 w-25">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl"
          >
            <div className="flex items-center space-x-4">
              {post.profilePicture && (
                <img
                  src={post.profilePicture}
                  alt={post.user}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <h2 className="text-lg font-bold">{post.user}</h2>
                {post.position && <p className="text-sm text-gray-600">{post.position}</p>}
              </div>
            </div>
            
            <p className="text-gray-800 mt-4 whitespace-pre-line">{post.content}</p>
            
            {/* Exibe a imagem caso exista */}
            {post.image && (
              <div className="mt-4">
                <img src={post.image} alt="Post image" className="w-full h-auto rounded-lg" />
              </div>
            )}
            
            {/* Seção de ações (Curtir, Comentar, Compartilhar, Enviar) */}
            <div className="flex justify-around items-center mt-4 text-sm text-gray-600 border-t pt-4">
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <FaThumbsUp className="text-xl" />
                <span>Gostei</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <FaCommentAlt className="text-xl" />
                <span>Comentar</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <FaShare className="text-xl" />
                <span>Compartilhar</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <FaPaperPlane className="text-xl" /> {/* Ícone de Enviar alterado */}
                <span>Enviar</span>
              </button>
            </div>
          </div>
        ))}
      </div>
     
  
    );
};
  
  export default Feed;