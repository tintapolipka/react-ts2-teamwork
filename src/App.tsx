import React from 'react';

import TodoList from './components/TodoList';
import Body from './components/Body';
import './styles/styles.css';
import Header from './components/Header';


const App: React.FC = () => {
  return (
    <Body>
    <Header />
    <TodoList todos={[{title:"Pikk",done:false},{title:"Pakk",done:false},{title:"Pukk",done:true}]}  />  
    </Body>
  );
};

export default App;