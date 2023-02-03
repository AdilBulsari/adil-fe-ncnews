import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Navigation/NavBar.module.css'
import { UserContext } from '../User/User'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function NavBar() {
    const { loggedInUser, users, setLoggedInUser } = useContext(UserContext)

    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.logo}>NC NEWS</div>
                <div className={style.nav_links}>
                    <ul className={style.menu}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/api/topics">Topics</NavLink>
                        </li>
                    </ul>
                </div>

                <div className={style.dropdown}>
                    <button className={style.dropbtn}>
                        <img
                            className={style.avatar_url}
                            src={loggedInUser.avatar_url}
                            alt={loggedInUser.username}
                        />
                    </button>
                    <div className={style['dropdown-content']}>
                        {users.map((user) => {
                            return (
                                <p
                                    onClick={() => {
                                        toast(`User ${user.username} selected`)
                                        setLoggedInUser(user)
                                    }}
                                >
                                    {user.username}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </nav>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default NavBar
