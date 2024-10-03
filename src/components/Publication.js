import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faCalendarDays, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Publication = ({ onPublish }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // Estado para controlar a exibição do modal
  const [content, setContent] = useState('');  // Estado para armazenar o conteúdo da publicação

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setContent('');  // Limpa o conteúdo do input
  };

  // Função para enviar a publicação
  const handlePublish = () => {
    if (content.trim()) {
      onPublish(content);  // Chama a função de publicar do componente pai
      closeModal();  // Fecha o modal
    }
  };

  return (
    <div>
      {/* Publicação inicial */}
      <div className=" bg-white rounded-lg shadow-md p-4 mt-4 w-* ">
        <div className="flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKv_p5BIhVXL365IWhEmehawsKluKVDqQoQ&s"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Comece uma publicação"
            className="bg-gray-100 rounded-full px-4 py-2 flex-grow focus:outline-none"
            onClick={openModal}  // Abre o modal ao clicar no input
          />
        </div>
        <div className="flex justify-between mt-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 p-2 rounded-lg">
            <FontAwesomeIcon icon={faImage} className="w-6 h-6 text-blue-600" />
            <span>Mídia</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 p-2 rounded-lg">
            <FontAwesomeIcon icon={faCalendarDays} className="w-6 h-6 text-orange-600" />
            <span>Evento</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 p-2 rounded-lg">
            <FontAwesomeIcon icon={faNewspaper} className="w-6 h-6 text-red-600" />
            <span>Escrever artigo</span>
          </button>
        </div>
      </div>

      {/* Modal de publicação */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKv_p5BIhVXL365IWhEmehawsKluKVDqQoQ&s"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="text-lg font-bold">Isabela Castro</h2>
                <p className="text-sm text-gray-600">Publicar em Todos</p>
              </div>
              <button onClick={closeModal} className="ml-auto text-gray-600 hover:text-gray-800">
                &times; {/* Fechar o modal */}
              </button>
            </div>

            <textarea
              placeholder="Sobre o que você quer falar?"
              className="w-full h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={content}
              onChange={(e) => setContent(e.target.value)}  // Atualiza o conteúdo da publicação
            />

            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg flex items-center">
                <FontAwesomeIcon icon={faImage} className="w-6 h-6" />
              </button>
              <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg flex items-center">
                <FontAwesomeIcon icon={faCalendarDays} className="w-6 h-6" />
              </button>
              <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg flex items-center">
                <FontAwesomeIcon icon={faNewspaper} className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={handlePublish}
                className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${!content.trim() && 'opacity-50 cursor-not-allowed'}`}
                disabled={!content.trim()}  // Desabilita o botão se o conteúdo estiver vazio
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publication;
