import './App.css';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <div className='container mx-auto'>
        <Alert 
          type={"info"}
          message= {"sorry not sorry! jaja"}
        />
      </div>
    </div>
  );
}

export default App;
