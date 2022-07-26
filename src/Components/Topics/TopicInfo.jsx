import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticlesForTopics } from '../API/Api'
import styles from './TopicInfo.module.css'
import TopicLists from './TopicLists'

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
            <p>Loading content ... </p>
        </div>
    ) : (
        <div className={styles.topic_detail}>
            <h1
                style={{
                    fontFamily: 'Geneva',
                    letterSpacing: '0.1em',
                }}
            >
                Article type -{' '}
                {topic_name.charAt(0).toUpperCase() + topic_name.slice(1)}
            </h1>
            <TopicLists article={article} />
        </div>
    )
}

export default TopicInfo
