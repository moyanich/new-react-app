import Todo from './components/Todo';
import Modal from './components/Modal';
import ModalBackdrop from './components/ModalBackdrop';
function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
        <Todo text='learn react' />
        <Todo  text='master react' />
        <Todo  text='explore react' />
        <Modal />
        <ModalBackdrop />
    </div>
  );
}

export default App;
 