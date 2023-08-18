import { useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorePage from './StorePage';
import StoreLink from './StoreLink';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('햄버거');
  return (
    <BrowserRouter>
      <h1 style={{textAlign:'center', marginTop:'50px'}}>{title} 메뉴</h1>
      <Routes>
        {useSelector((state) => state.burgerContents).map((content, idx) => {
          return <Route key={idx} path={content["route"]} element={<StorePage setTitle={setTitle} data={content}/>}></Route>
        })}
        <Route path='/' element={<StoreLink/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
