import { NavLink } from 'react-router-dom'
import style from '../Navigation/NavBar.module.css'

function NavBar() {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.logo}>FE NC NEWS</div>

                <div className={style.nav_links}>
                    <ul className={style.menu}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/api/getAllArticles">Articles</NavLink>
                        </li>

                        <li>
                            <NavLink to="/api/getAllTopics">Topics</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
