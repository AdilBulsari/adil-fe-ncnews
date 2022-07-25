import { Link } from 'react-router-dom'
import style from '../Navigation/NavBar.module.css'

function NavBar() {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.logo}>FE NC NEWS</div>

                <ul className={style.nav_links}>
                    <div className={style.menu}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/api/getAllArticles">Articles</Link>
                        </li>
                        <li className={style.services}>
                            <Link to="/">Services</Link>
                        </li>
                        <li>
                            <Link to="/">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
