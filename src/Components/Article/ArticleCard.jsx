import { useState } from 'react'
import Vote from '../Topics/Vote'
import styles from './ArticleCard.module.css'

function ArticleCard({ article }) {
    const [votes, setVotes] = useState(article.votes)

    return (
        <div className={styles.description}>
            <article className={styles.articleView}>
                <header className={styles.title}>
                    <b>Title: {article.title} </b>
                </header>
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
                        <b>Date posted: </b>
                        {new Date(article.created_at).toDateString()}
                    </p>
                </section>

                <Vote article={article} vote={votes} setVotes={setVotes} />
            </article>
        </div>
    )
}

export default ArticleCard
