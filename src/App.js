import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ArticleDescription from './Components/Article/ArticleDescription'
import Articles from './Components/Article/Articles'
import NavBar from './Components/Navigation/NavBar'
import TopicInfo from './Components/Topics/TopicInfo'
import Topics from './Components/Topics/Topics'
import { UserContext } from './Components/User/User'

function App() {
    const [loggedInUser, setLoggedInUser] = useState({
        username: 'jessjelly',
        name: 'Jess Jelly',
        avatar_url:
            'https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141',
    })

    const isLoggedIn = loggedInUser !== null

    return (
        <BrowserRouter>
            <UserContext.Provider
                value={{ loggedInUser, setLoggedInUser, isLoggedIn }}
            >
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Articles />} />
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
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default App
