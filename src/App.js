import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Search from './components/Search';
import Spinner from "./components/Spinner.js";

function App() {
  return (
   <div className='w-full h-full flex flex-col'>
    <div className='bg-white-300 w-[1280px] uppercase h-20 text-3xl font-bold rounded-lg border text-center mt-10 flex justify-center items-center ml-20'>
      Random gifs
    </div>
    <Random/>
    <Search/>
   </div>
  );
}

export default App;
