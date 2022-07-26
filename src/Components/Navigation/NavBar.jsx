import { Link } from 'react-router-dom'
import style from '../Navigation/NavBar.module.css'

function NavBar() {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.logo}>FE NC NEWS</div>


                <div className={style.nav_links}>
                    <ul className={style.menu}>

                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/api/getAllArticles">Articles</Link>
                        </li>

                        <li>
                            <Link to="/api/getAllTopics">Topics</Link>
                        </li>
                    </div>
          

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
