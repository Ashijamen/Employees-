import './App.css';
import EditEmployees from './EditEmployees';
import Appbar from './components/Appbar';
import Employees from './Employees';




function App() {
  return (
    <div className="App">
      <Appbar />
      <EditEmployees />
      <Employees/>
      
      
    </div>
  );
}

export default App;
