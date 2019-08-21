import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
         <Home />  {/*The root component renders only the the Home component */}
      </Container>
    </div>
  );
}

export default App;
