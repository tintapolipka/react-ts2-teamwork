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
        <TodoList  />
      </Body>
      <Footer />
    </div>

  );
};

export default App;