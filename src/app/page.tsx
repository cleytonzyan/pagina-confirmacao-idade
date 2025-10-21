'use client'

export default function Home() {
  const handleYesClick = () => {
    window.open('https://t.me/Sarahsanchez_bot', '_blank');
  };

  const handleNoClick = () => {
    window.open('https://t.me/Sarahsanchez_bot', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="flex justify-center pt-12 pb-8">
        <h1 className="text-2xl md:text-3xl font-light text-center">
          Você tem mais de 18 anos?
        </h1>
      </div>

      {/* Buttons Container */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <button
            onClick={handleYesClick}
            className="px-12 py-4 bg-white text-black font-medium text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg min-w-[120px]"
          >
            Sim
          </button>
          
          <button
            onClick={handleNoClick}
            className="px-12 py-4 bg-gray-800 text-white font-medium text-lg rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg border border-gray-600 min-w-[120px]"
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}