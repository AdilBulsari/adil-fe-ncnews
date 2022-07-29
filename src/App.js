import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Article from './Components/Article/Article'
import ArticleDescription from './Components/Article/ArticleDescription'
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
                    <Route path="/api/getAllTopics" element={<Topics />} />
                    <Route
                        path="/api/getTopicArticle/:topic_name"
                        element={<TopicInfo />}
                    />
                    <Route path="/api/getAllArticles" element={<Article />} />
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
