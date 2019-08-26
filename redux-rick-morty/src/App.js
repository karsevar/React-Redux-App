import React from 'react';
import './App.css';

import CharacterList from './components/CharacterList';
import TabNav from './components/TabNav';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <TabNav />
      <AppRouter />
    </div>
  );
}

export default App;
