import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center relative mb-8 mt-4 w-72"> {/* Ajustei o shadow e w-full */}
      
      <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 -left-20">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKv_p5BIhVXL365IWhEmehawsKluKVDqQoQ&s" 
          alt="User Profile"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div>
      <h2 className="text-xl font-semibold ">Isabela Castro</h2>
      
      <p className="text-gray-600 text-sm ">Engenharia de Software | Desenvolvimento Web</p>
     
      <p className="text-gray-500 text-sm mt-2">São Paulo, Brasil</p>
      
      <p className="text-blue-500 font-semibold text-sm mt-2 ">Universidade XYZ</p>
    </div>
    </div>
  );
};

export default UserProfile;

