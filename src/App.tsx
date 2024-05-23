import React from 'react';
import './App.css';
import { LoginPage } from './Components/Pages/loginPage';
import { Modal } from './Templates/modal';
import { Navbar } from './Components/Pages/navbar';
import { TopLayer } from './Components/Pages/topLayer';
import { BookPage } from './Components/Pages/bookPage';
import BookPage2 from './Components/Pages/bookPage2';
import Footer from './Components/Pages/footer';
import { SearchProvider } from './Components/Pages/searchProvider';



function App() {
  return (
    <div className="h-screen w-screen font-mono">
   <Navbar/>
   <TopLayer/>
   <BookPage/>
   <BookPage2/>
   <Footer/>
    </div>
  );
}

export default App;
