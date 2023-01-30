import styles from './ArticleCard.module.css'

function ArticleCard({ article, votes }) {
    return (
        <div>
            <div className={styles.description}>
                <article className={styles.articleView}>
                    <p className={styles.title}>
                        <b>Title : {article.title} </b>
                    </p>
                    <p>
                        <b>Author :</b> {article.author}
                    </p>
                    <p>
                        <b>Description :</b> {article.body}
                    </p>
                    <p>
                        <b>Topic : </b>
                        {article.topic}
                    </p>
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
                    <p>
                        <b>Comments made :</b>{' '}
                        {article.comment_count
                            ? article.comment_count
                            : article.total_comments}
                    </p>
                    <p>
                        <b>Date posted : </b>
                        {new Date(article.created_at).toDateString()}
                    </p>
                </article>
            </div>
        </div>
    )
}

export default ArticleCard
