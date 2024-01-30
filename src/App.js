import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Support from './components/Support';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element={<Home />}></Route>
        <Route exact path = '/support' element={<Support/>}></Route>
      </Routes>
      <Footer />
      <Toaster 
        containerStyle={{
            top:'50%',
        }}
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: 'rgb(250,250,250)',
            color: '#000',
            padding:'1rem',
            boxShadow:'0 1rem 3rem rgba(0,0,0,.175) !important'
          },
          duration:4000
        }}/>
    </div>
  );
}

export default App;
