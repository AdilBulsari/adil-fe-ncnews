import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Navigation/NavBar.module.css'
import { UserContext } from '../User/User'

function NavBar() {
    const { loggedInUser } = useContext(UserContext)
    const [showUser, setShowUser] = useState(false)
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.logo}>Adil's NC NEWS</div>

                <div className={style.nav_links}>
                    <ul className={style.menu}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/api/articles">Articles</NavLink>
                        </li>

                        <li>
                            <NavLink to="/api/topics">Topics</NavLink>
                        </li>
                    </ul>
                </div>
                <button
                    className={style.show_user_button}
                    onClick={() => setShowUser(!showUser)}
                >
                    <img
                        className={style.avatar_url}
                        src={loggedInUser.avatar_url}
                        alt={loggedInUser.username}
                    />
                </button>

                {showUser && (
                    <div className={style.show_user_dropdown}>
                        <p className={style.loggedIn__user}>
                            User: {loggedInUser.username}
                        </p>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default NavBar
