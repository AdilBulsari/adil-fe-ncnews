import { useEffect, useState } from 'react'
import styles from './Articles.module.css'
import ArticleCard from './ArticleCard'
import { Link } from 'react-router-dom'
import { sortByDate } from '../API/Api'

function Articles() {
    const [article, setAllArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [option, setOption] = useState('created_at')

    useEffect(() => {
        setIsLoading(true)
        sortByDate(option).then((data) => {
            setAllArticle(data)
        })
    }, [option])

    function selectOnChangeHandler(e) {
        setOption(e.target.value)
    }

    return article.length > 0 ? (
        <div>
            <div className={styles.sort}>
                <h1 className={styles.h1}>Sort Articles:</h1>
                <select value={option} onChange={selectOnChangeHandler}>
                    <option value="created_at">Date</option>
                    <option value="comment_count">Comment count</option>
                    <option value="votes">Votes</option>
                </select>
            </div>
            {article.map((item) => (
                <li key={item.article_id}>
                    <Link
                        className={styles.link}
                        to={'/topics/articles/' + item.article_id}
                    >
                        <ArticleCard article={item} />
                    </Link>
                </li>
            ))}
        </div>
    ) : isLoading ? (
        <p className={styles.loading}>Loading ... </p>
    ) : (
        <h1 className={styles.no_article}>
            Sorry there are no articles at the moments
        </h1>
    )
}

export default Articles
