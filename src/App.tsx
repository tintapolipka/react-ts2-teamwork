import React from 'react';
import TodoList from './components/TodoList';
import Body from './components/Body';



const App: React.FC = () => {
  return (
    <Body>
    <TodoList todos={[{title:"Pikk",done:false},{title:"Pakk",done:false},{title:"Pukk",done:true}]}  />  
    </Body>
  );
};

export default App;