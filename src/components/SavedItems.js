import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faUsers,faCalendar } from '@fortawesome/free-solid-svg-icons';

const SavedItems = () => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 w-72 mt-4"> {/* Contêiner principal */}
        <ul className="space-y-4">
          {/* Item 1: Itens salvos */}
          <li className="flex items-center">
          <FontAwesomeIcon icon={faBookmark}className="w-5 h-5 text-black mr-3"/>  {/* Ícone */}
           <button><span>Itens salvos</span></button>
          </li>
          {/* Item 2: Grupos */}
          <li className="flex items-center">
          <FontAwesomeIcon icon={faUsers} className="w-5 h-5 text-black mr-3"/>  {/* Ícone */}
           <button><span>Grupos</span></button>
          </li>
          {/* Item 3: Eventos */}
          <li className="flex items-center">
          <FontAwesomeIcon icon={faCalendar} className="w-5 h-5 text-black mr-3" />  {/* Ícone */}
           <button><span>Eventos</span></button>
          </li>
        </ul>
      </div>
    );
  };
  
  export default SavedItems;