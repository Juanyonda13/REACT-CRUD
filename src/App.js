import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';


function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <div className="nav">
      <Link to="/create">
        create 
      </Link> |
      <Link to="/read">
        read
      </Link>
      </div>
      <Navigate/>
    </div>
  )
}

const Navigate=()=>{
return(
  <Routes>
    <Route path="/create" element={<Create />} />
    <Route path="/read" element={<Read />} />
    <Route path="/update" element={<Update />} />
  </Routes>
)
}

export default App;
