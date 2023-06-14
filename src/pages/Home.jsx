import { useEffect, useState } from 'react';
import GenreList from '../components/GenreList';
import globalAPI from '../services/globalAPI';
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';
import GamesByGenresId from '../components/GamesByGenresId';

const Home = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState('Action');

  const getAllGamesList = async () => {
    try {
      const res = await globalAPI.getAllGames;
      setAllGameList(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getGameListByGenresId = async (id) => {
    try {
      const res = await globalAPI.getGameListByGenreId(id);
      setGameListByGenres(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void getAllGamesList();
    void getGameListByGenresId(4);
  }, []);

  return (
    <div className="grid grid-cols-4 px-8 pb-8 gap-5">
      <div className="h-full hidden md:block">
        <GenreList
          setSelectedGenre={(id) => getGameListByGenresId(id)}
          selectedGenreName={(name) => setSelectedGenreName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0 && gameListByGenres.length > 0 && (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenresId gameList={gameListByGenres} selectedGenreName={selectedGenreName} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
