import styles from './ArticleCard.module.css'

function ArticleCard({ article, votes }) {
    return (
        <div>
            <h1> {article.title}</h1>
            <div className={styles.description}>
                <div className={styles.article_view}>
                    <p>
                        <b>Title : </b>
                        {article.title}
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
                        {Date(article.created_at).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
