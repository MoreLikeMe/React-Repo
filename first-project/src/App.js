import './App.css';
import Test from './test_component/Test';
import Hello from './test_component/Hello';

function App() {
  return (
    <div className="App">
      <Hello />
      <Test name="Thomas"/>
    </div>
  );
} 

export default App;