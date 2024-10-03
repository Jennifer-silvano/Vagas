import React from 'react';
import UserProfile from './UserProfile'; // Importando o perfil do usuário
import SavedItems from './SavedItems';

const Sidebar = () => {
  return (
    <div className="">
      {/* Perfil do usuário */}
      <UserProfile />

      {/* Lista de conexões */}
      <div className="bg-white shadow-lg rounded-lg p-4 w-72">
       <button> <h3 className="text-lg font-semibold mb-4">Conexões</h3></button>
        <ul>
          <li className="mb-4">
            <div className="flex items-center">
              <img
                src="https://w7.pngwing.com/pngs/915/511/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                alt="Conexão 1"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="text-md font-medium">Júlia Ferreira</h4>
                <p className="text-sm text-gray-600">Sistema de informação | UX</p>
              </div>
            </div>
          </li>
          {/* Mais conexões podem ser adicionadas aqui */}
          <li className="mb-4">
            <div className="flex items-center">
              <img
                src="https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png"
                alt="Conexão 2"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="text-md font-medium">Felipe Oliveira</h4>
                <p className="text-sm text-gray-600">QA | QFRGT</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className=''>
        <SavedItems/>
      </div>
        </div>
        
        
      
      
    
      

  );
};

export default Sidebar;

