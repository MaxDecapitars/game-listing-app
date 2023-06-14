const TrendingGames = ({ gameList }) => {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px]">Trending Games</h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gameList.map(
          (item, i) =>
            i < 8 && (
              <div
                key={item.id}
                className="bg-[#76a8f75e] rounded-lg group hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src={item.background_image}
                  alt={item.name}
                  className="h-[270px] rounded-t-lg object-cover"
                />
                <h2 className="text-[20px] font-bold p-2">{item.name}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default TrendingGames;
