import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticlesForTopics } from '../API/Api'
import ArticleCard from '../Card/ArticleCard'
import styles from './TopicInfo.module.css'

function TopicInfo() {
    const { topic_name } = useParams()
    const [article, setArticle] = useState([])

    const [isLoading, setIsloading] = useState(null)

    useEffect(() => {
        setIsloading(true)
        getArticlesForTopics(topic_name).then((data) => {
            setArticle(data)
            setIsloading(false)
        })
    }, [topic_name])

    return isLoading ? (
        <div className={styles.loading}>
            <p>Loading ... </p>
        </div>
    ) : (
        <div className={styles.topic_detail}>
            <h1>
                All Articles for{' '}
                {topic_name.charAt(0).toUpperCase() + topic_name.slice(1)}
            </h1>
            <ArticleCard article={article} />
        </div>
    )
}

export default TopicInfo
