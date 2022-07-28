import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../API/Api'
import ArticleCard from '../Utils/ArticleCard'
import styles from './ArticleDescription.module.css'

function ArticleDescription() {
    const { article_id } = useParams()
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then((data) => {
            setArticle(data.article)
            setIsLoading(false)
        })
    }, [article_id])

    return !isLoading ? (
        <>
            <ArticleCard article={article} />
        </>
    ) : (
        <p className={styles.loading}>Loading ... </p>
    )
}
export default ArticleDescription
