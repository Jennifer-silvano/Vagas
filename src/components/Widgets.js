import React from 'react';

const Widgets = () => {
  const trends = [
    { title: 'As Top Startups de 2024 no Brasil', time: 'há 1 d', readers: '5.301 leitores' },
    { title: 'Como construir uma carreira internacional', time: 'há 23 h', readers: '7.272 leitores' },
    { title: 'Dicas de leitura para outubro', time: 'há 1 d', readers: '7.250 leitores' },
    { title: 'Investimentos: ranking de setembro', time: 'há 1 h', readers: '607 leitores' },
    { title: 'Cerco às bets no Brasil', time: 'há 1 d', readers: '229 leitores' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4 w-22  min-h-32 max-h-80 overflow-auto ">
      <h2 className="font-bold text-xl">Temas em alta</h2>
      <ul>
        {trends.map((trend, index) => (
          <li key={index} className="mt-2 flex justify-between items-center">
           <button><div>
              <p className="font-semibold ">{trend.title}</p>
              <p className="text-sm text-gray-500 ">{trend.time} · {trend.readers}</p>
            </div></button> 
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Widgets;
