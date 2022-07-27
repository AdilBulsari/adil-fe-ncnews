import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../Article/Article.module.css'
import Vote from '../Topics/Vote'

function Article() {
    const [articles, setAllArticles] = useState([
        {
            article_id: '',
            author: '',
            body: '',
            comment_count: '',
            created_at: '',
            title: '',
            topic: '',
            votes: '',
        },
    ])

    useEffect(() => {
        axios
            .get('https://adil-nc-news.herokuapp.com/api/articles')
            .then((res) => {
                setAllArticles(res.data)
            })
    }, [])
    return articles.length > 0 ? (
        <div>
            <h1 className={styles.article_header}>
                You are viewing all the articles from NC-NEWS
            </h1>
            <div className={styles.align_center}>
                <ul className={styles.ul}>
                    {articles.map((article) => (
                        <li key={article.article_id}>
                            <div className={styles.card}>
                                <div className={styles.container}>
                                    <p>Description :{article.body}</p>
                                    <br />
                                    <p>Author :{article.author}</p>
                                    <p>
                                        Total Comments :{article.comment_count}
                                    </p>
                                    <p>Topic : {article.topic}</p>
                                    <p>Votes : {article.votes}</p>
                                    <Vote />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    ) : (
        <h1 className={styles.no_article}>
            Sorry there are no articles at the moments
        </h1>
    )
}

export default Article
