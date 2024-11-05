import React from 'react';

import TodoList from './components/TodoList';
import Body from './components/Body';
import './styles/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className='app-container'>
      <Body>
        <Header />
        <TodoList todos={[{ id: 1, title: "Pikk", done: false }, { id: 2, title: "Pakk", done: false }, { id: 3, title: "Pukk", done: true }]} />
      </Body>
      <Footer />
    </div>

  );
};

export default App;