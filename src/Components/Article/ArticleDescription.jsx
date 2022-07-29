import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../API/Api'
import AddComment from '../Comments/AddComment'

import Vote from '../Topics/Vote'

import ArticleCard from '../Utils/ArticleCard'

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
            {
                <div className={styles.description}>
                    <ArticleCard article={article} votes={votes} />
                    <Vote article={article} setVotes={setVotes} />
                    <AddComment />
                </div>
            }
        </>
    ) : (
        <p className={styles.loading}>Loading ... </p>
    )
}
export default ArticleDescription
