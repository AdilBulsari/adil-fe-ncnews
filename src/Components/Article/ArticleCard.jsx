import { useState } from 'react'
import Vote from '../Topics/Vote'
import styles from './ArticleCard.module.css'
import { Link } from 'react-router-dom'

function ArticleCard({ article }) {
    const [votes, setVotes] = useState(article.votes)

    return (
        <div className={styles.description}>
            <Link to={'/topics/articles/' + article.article_id}>
                <article className={styles.articleView}>
                    <header className={styles.title}>{article.title}</header>
                    <section>
                        <b>Author:</b> {article.author}
                        <p>
                            <b>Description :</b> {article.body}
                        </p>
                        <p>
                            <b>Topic: </b>
                            {article.topic}
                        </p>
                        <b>Comments: </b>
                        {article.comment_count
                            ? article.comment_count
                            : article.total_comments}
                        <p>
                            <b>posted: </b>
                            {new Date(article.created_at).toDateString()}
                        </p>
                    </section>
                </article>
            </Link>
            <Vote article={article} vote={votes} setVotes={setVotes} />
        </div>
    )
}

export default ArticleCard
