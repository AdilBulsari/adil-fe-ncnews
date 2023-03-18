import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ArticleDescription from './Components/Article/ArticleDescription'
import Articles from './Components/Article/Articles'
import NavBar from './Components/Navigation/NavBar'
import TopicInfo from './Components/Topics/TopicInfo'
import { UserContext } from './Components/User/User'

function App() {
    const [users, setUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useState({
        username: 'jessjelly',
        name: 'Jess Jelly',
        avatar_url:
            'https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141',
    })

    const getUsers = async () => {
        const { data } = await axios.get(
            'https://adil-nc-news.cyclic.app/api/users'
        )
        try {
            setUsers(data.users)
        } catch (error) {
            alert('Something went wrong !!')
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    const isLoggedIn = loggedInUser !== null

    return (
        <BrowserRouter>
            <UserContext.Provider
                value={{
                    loggedInUser,
                    setLoggedInUser,
                    isLoggedIn,
                    users,
                    setUsers,
                }}
            >
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Articles />} />

                        <Route
                            path="/topics/:topic_name"
                            element={<TopicInfo />}
                        />
                        <Route path="/topics/articles" element={<Articles />} />
                        <Route
                            path="/topics/articles/:article_id"
                            element={<ArticleDescription />}
                        />
                    </Routes>
                </div>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default App
