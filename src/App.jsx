import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`${theme}`}>
      <div className="min-h-screen w-full flex flex-col items-center dark:bg-[#121212] dark:text-white">
        <div className="w-full max-w-5xl">
          <Header theme={theme} setTheme={setTheme} />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
