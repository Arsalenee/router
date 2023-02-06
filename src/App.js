import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/Navigationbar';
import { Route, Routes } from 'react-router-dom';
import Listmovies from './components/ListMovie';
import Fav from './components/FavMovie';

import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import { useSelector } from 'react-redux';
import Descreption from './components/MovieDescription';
function App() {
  const liste=useSelector((state)=>state.liste)
  const filtredname=useSelector(
    (state)=>state.feltredname
  )
  // console.log(filtredname)
  // console.log(liste)
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path='/list' element={<Listmovies movies={liste.filter((e)=>e.title.toLowerCase().includes(
filtredname.toLowerCase()
        ))}/>}/>
        <Route path='/' element={<Fav movies={liste.filter((e)=>e.fav).filter((e)=>e.title.toLowerCase().includes(
filtredname.toLowerCase()
        ))}/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/description/:id' element={<Descreption/>}/>
      </Routes>
    </div>
  );
}

export default App;
