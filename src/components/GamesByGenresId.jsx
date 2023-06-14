const GamesByGenresId = ({ gameList, selectedGenreName }) => {
  return (
    <div>
      <h2 className="font-bold text-[30px] mt-5">{selectedGenreName} Games</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameList.map((item) => (
          <div
            key={item.id}
            className="bg-[#76a8f75e] p-3 rounded-lg hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer relative flex flex-col gap-2 justify-between">
            {item.metacritic && (
              <span className="p-1 absolute top-0 right-0 rounded-sm ml-2 rounded-tr-xl m-3 bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            )}
            <img
              src={item.background_image}
              alt={item.name}
              className="w-full aspect-square rounded-xl object-cover"
            />
            <h2 className="text-[20px] font-bold">{item.name}</h2>
            <h2 className="text-gray-500 dark:text-gray-300">
              ⭐{item.rating} 💭{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GamesByGenresId;
