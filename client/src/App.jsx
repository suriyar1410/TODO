import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Tasks from './Components/Tasks';
import AddTask from './AddTask';
import ShowTask from './ShowTask';
import UpdateTask from './UpdateTask';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Tasks/>}/>
    <Route path='/AddTask' element={<AddTask/>}/>
    <Route path='/ShowTask/:taskid' element={<ShowTask/>}/>
    <Route path='/UpdateTask/:taskid' element={<UpdateTask/>}/>
  </Routes>
  </BrowserRouter>
  );
}


export default App;
