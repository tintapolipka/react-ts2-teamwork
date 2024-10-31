import React from 'react';
import TodoItem from './components/TodoItem';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Üdvözöllek a React alkalmazásban!</h1>
      <p>Ez egy alap App komponens TypeScript-tel.</p>

      <TodoItem title='Süket kutya' done={false} />
    </div>
  );
};

export default App;