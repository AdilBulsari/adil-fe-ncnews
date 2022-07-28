import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './Articles.module.css'
import ArticleCard from '../Utils/ArticleCard'
import { Link } from 'react-router-dom'

function Articles() {
    const [article, setAllArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get('https://adil-nc-news.herokuapp.com/api/articles')
            .then((res) => {
                setAllArticle(res.data)
                setIsLoading(false)
            })
    }, [])

    return article.length > 0 ? (
        article.map((item) => (
            <li key={item.article_id}>
                <Link
                    className={styles.link}
                    to={'/api/articles/' + item.article_id}
                >
                    <ArticleCard article={item} />
                </Link>
            </li>
        ))
    ) : isLoading ? (
        <p className={styles.loading}>Loading ... </p>
    ) : (
        <h1 className={styles.no_article}>
            Sorry there are no articles at the moments
        </h1>
    )
}

export default Articles
