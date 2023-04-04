import { useEffect, useState } from 'react'
import styles from './Articles.module.css'
import ArticleCard from './ArticleCard'

import { sortByDate } from '../API/Api'

function Articles() {
    const [articles, setAllArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [option, setOption] = useState('created_at')

    useEffect(() => {
        setIsLoading(true)
        sortByDate(option).then((data) => {
            setAllArticles(data)
            setIsLoading(false)
        })
    }, [option])

    function selectOnChangeHandler(e) {
        setOption(e.target.value)
    }

    return articles.length > 0 ? (
        <div>
            <div className={styles.sort}>
                <h1 className={styles.h1}>Sort Articles:</h1>
                <select value={option} onChange={selectOnChangeHandler}>
                    <option value="created_at">Date</option>
                    <option value="comment_count">Comment count</option>
                    <option value="votes">Votes</option>
                </select>
            </div>
            {articles.map((article) => (
                <li key={article.article_id}>
                    <ArticleCard article={article} />
                </li>
            ))}
        </div>
    ) : isLoading ? (
        <p className={styles.loading}>Loading articles please wait ... </p>
    ) : (
        <h1 className={styles.no_article}>
            Sorry there are no articles at the moments
        </h1>
    )
}

export default Articles
