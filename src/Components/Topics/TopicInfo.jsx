import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './TopicInfo.module.css'

function TopicInfo() {
    const { topic_name } = useParams()
    const [topic, setTopic] = useState([])

    const [isLoading, setIsloading] = useState(null)

    useEffect(() => {
        setIsloading(true)
        axios
            .get(
                `https://adil-nc-news.herokuapp.com/api/articles?filter_by=${topic_name}`
            )
            .then((res) => {
                setTopic(res.data)
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
            <ul>
                {topic.map((eachTopic) => (
                    <li className={styles.topicInfo_card}>
                        <p>
                            <b>Title :</b> {eachTopic.title}
                        </p>
                        <p>
                            <b>Author :</b>
                            {eachTopic.author}
                        </p>
                        <p>
                            <b>Votes :</b>
                            {eachTopic.votes}
                        </p>
                        <p>
                            <b>Date Posted :</b>
                            {eachTopic.created_at}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TopicInfo
