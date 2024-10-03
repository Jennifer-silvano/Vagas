// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faBriefcase,faCommentDots,faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-center h-14">
      <div className="flex items-center">
        <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="LinkedIn" className="h-8 w-8 mr-4" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="bg-gray-200 px-4 py-1 outline-none mr-20" />
        
      </div>
      <div className="flex space-x-8">
        <button className="flex flex-col items-center text-gray-500 hover:text-black">
        <FontAwesomeIcon icon={faHome} className="text-xl w-8 h-4"/>
          <a href='|#'><span className="text-sm">Início</span></a>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-black">
        <FontAwesomeIcon icon={faUserFriends} className="text-xl h-4 "/>
          <span className="text-sm">Minha Rede</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-black">
        <FontAwesomeIcon icon={faBriefcase} className="text-xl h-4"/>
          <span className="text-sm">Vagas</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-black">
        <FontAwesomeIcon icon={faCommentDots} className="text-xl h-4"/>
          <span className="text-sm">Mensagens</span>
          </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-black">
        <FontAwesomeIcon icon={faBell} className="text-xl h-4"/>
          <span className="text-sm">Notificações</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-black">
        <FontAwesomeIcon icon={faCircleUser} className="text-xl h-4"/>
          <span className="text-sm">Eu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
