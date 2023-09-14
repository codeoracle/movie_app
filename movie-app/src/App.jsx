import Home from "./pages/Home/Home"
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Movie from "./pages/Movie/Movie"
import Searched from "./pages/Searched/Searched"

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
