import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticlesForTopics } from '../API/Api'
import styles from './TopicInfo.module.css'
import TopicLists from './TopicLists'

function TopicInfo() {
    const { topic_name } = useParams()
    const [articles, setArticles] = useState([])
    const [isLoading, setIsloading] = useState(null)

    useEffect(() => {
        setIsloading(true)
        getArticlesForTopics(topic_name)
            .then((data) => {
                setArticles(data)
                setIsloading(false)
            })
            .catch((err) => {
                setIsloading(true)
            })
    }, [topic_name])

    return isLoading ? (
        <div className={styles.loading}>
            <p>Loading content ... </p>
        </div>
    ) : (
        <div className={styles['topic-details']}>
            <TopicLists articles={articles} />
        </div>
    )
}

export default TopicInfo
