import './App.css';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <div className='container mx-auto'>
        <Alert 
          type={"info"}
          message= {"Sorry not sorry! jaja"}
        />
        <Alert 
          type={"success"}
          message= {"Congrats on your level up!"}
          delay={true}
        />
      </div>
    </div>
  );
}

export default App;
