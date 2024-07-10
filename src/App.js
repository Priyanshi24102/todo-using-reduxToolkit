
import './App.css';
import AddToDo from './components/AddToDo';
import ToDos from './components/ToDos';

function App() {
  return (
    <div className="App">
      
      <div className="todoContainer">
      <h1 style={{color:"white"}}>To-Do list</h1>
          <AddToDo/>
          <ToDos/>
      </div>
     
    </div>
  );
}

export default App;
