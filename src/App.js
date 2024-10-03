import './App.scss';
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
          delayTime={3000}
        />
        <Alert 
          type={"danger"}
          message= {"Loser! Try again!"}
          delay={true}
          delayTime={5000}
        />
      </div>
    </div>
  );
}

export default App;
