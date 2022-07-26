import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Article from './Components/Article/Article'
import Home from './Components/Home/Home'
import NavBar from './Components/Navigation/NavBar'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/api/getAllArticles" element={<Article />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
