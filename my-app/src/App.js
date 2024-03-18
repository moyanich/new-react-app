import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
        <Todo text='learn react' />
        <Todo  text='master react' />
        <Todo  text='explore react' />
    </div>
  );
}

export default App;
 