import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Article/Article.module.css'
import AddComment from '../Comments/AddComment'

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
                                    <Link
                                        className={styles.article_comment_link}
                                        to={
                                            '/api/articles/' +
                                            article.article_id +
                                            '/comments'
                                        }
                                    >
                                        <b>
                                            Total Comments :
                                            {article.comment_count}
                                        </b>
                                    </Link>
                                    <p>Topic : {article.topic}</p>
                                    <p>Votes : {article.votes}</p>
                                </div>
                                <AddComment />
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
