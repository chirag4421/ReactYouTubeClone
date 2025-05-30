import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import PlayingVideo from "./components/PlayingVideo"
import { useAuth } from "./context/AuthProvider"
import Loading from "./loader/Loading"



function App() {
  const {loading} = useAuth();
  console.log(loading)

  return (
    <>
    {
loading && <Loading/>
 }
  <Navbar/>

<Routes>
  <Route path ="/" exact element={<Home/>}/>
  <Route path ="/search/:searchQuery" element={<Search/>}/>
  <Route path ="/video/:id" element={<PlayingVideo/>}/>
</Routes>
    </>
  )
}

export default App
