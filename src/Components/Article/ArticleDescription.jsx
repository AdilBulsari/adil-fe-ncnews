import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../API/Api'
import Vote from '../Topics/Vote'
import styles from './ArticleDescription.module.css'

function ArticleDescription() {
    const { article_id } = useParams()
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then((data) => {
            setArticle(data.article)
            setVotes(data.article.votes)
            setIsLoading(false)
        })
    }, [article_id])

    return !isLoading ? (
        <>
            <h1> Description</h1>
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
                    <p>
                        <b>Votes : </b>
                        {votes}
                    </p>
                    <p>
                        <b>Comments made :</b> {article.total_comments}
                    </p>
                    <Vote
                        article={article}
                        votes={votes}
                        setVotes={setVotes}
                        setArticle={setArticle}
                    />
                </div>
            </div>
        </>
    ) : (
        <p className={styles.loading}>Loading ... </p>
    )
}
export default ArticleDescription
