import { useState } from 'react'
import Vote from '../Topics/Vote'
import styles from './ArticleCard.module.css'

function ArticleCard({ article }) {
    const [votes, setVotes] = useState(article.votes)
    console.log(article)
    return (
        <div className={styles.description}>
            <article className={styles.articleView}>
                <header className={styles.title}>
                    <b>Title : {article.title} </b>
                </header>
                <section>
                    <b>Author :</b> {article.author}
                    <p>
                        <b>Description :</b> {article.body}
                    </p>
                    <b>Topic : </b>
                    {article.topic}
                    <b>Comments made :</b>{' '}
                    {article.comment_count
                        ? article.comment_count
                        : article.total_comments}
                    <p>
                        <b>Date posted : </b>
                        {new Date(article.created_at).toDateString()}
                    </p>
                </section>
                {votes ? (
                    <p>
                        <b>Votes : </b>
                        {votes}
                    </p>
                ) : (
                    <p>
                        <b>Votes : </b>
                        {article.votes}
                    </p>
                )}
                <Vote article={article} setVotes={setVotes} />
            </article>
        </div>
    )
}

export default ArticleCard
