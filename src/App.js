import './App.css';
import ExpanderContainer from './components/Expander';

function App() {
  return (
    <div className="App">
      <ExpanderContainer rows={[
        {
          id: 1,
          name: 'TestRowName1',
          content: 'test1'
        },
        {
          id: 2,
          name: 'TestRowName2',
          content: 'test2'
        },
        {
          id: 3,
          name: 'TestRowName2',
          content: 'test3'
        }
      ]} />
    </div>
  );
}

export default App;
