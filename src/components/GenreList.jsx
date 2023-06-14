import { useEffect, useState } from 'react';
import globalAPI from '../services/globalAPI';

const GenreList = ({ setSelectedGenre, selectedGenreName }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getGenreList = async () => {
    try {
      const res = await globalAPI.getGenreList;
      setGenreList(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void getGenreList();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold">Genres</h2>
      {genreList.map((item, i) => (
        <div
          key={item.id}
          className={`flex gap-2 items-center mb-2 cursor-pointer group hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 ${
            activeIndex === i ? 'bg-gray-300 dark:bg-gray-600' : null
          }`}
          onClick={() => {
            setActiveIndex(i);
            setSelectedGenre(item.id);
            selectedGenreName(item.name);
          }}>
          <img
            src={item.image_background}
            alt={item.name}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
              activeIndex === i ? 'scale-105' : null
            }`}
          />
          <h3
            className={`text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
              activeIndex === i ? 'font-bold' : null
            }`}>
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};
export default GenreList;
