import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ArticleDescription from './Components/Article/ArticleDescription'
import Articles from './Components/Article/Articles'
import Home from './Components/Home/Home'
import NavBar from './Components/Navigation/NavBar'
import TopicInfo from './Components/Topics/TopicInfo'
import Topics from './Components/Topics/Topics'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/api/topics" element={<Topics />} />
                    <Route
                        path="/api/articleTopics/:topic_name"
                        element={<TopicInfo />}
                    />
                    <Route path="/api/articles" element={<Articles />} />
                    <Route
                        path="/api/articles/:article_id"
                        element={<ArticleDescription />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
