import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllTopics } from '../API/Api'
import { TopicsContext } from '../Context/TopicsContext'

import styles from '../Topics/Topics.module.css'

function Topics() {
    const { topics, setTopic } = useContext(TopicsContext)
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        setIsloading(true)
        getAllTopics().then(({ topic }) => {
            setTopic(topic)
            setIsloading(false)
        })
    }, [setTopic])

    return isLoading ? (
        <div className={styles.loading}>
            <p>Loading ... </p>
        </div>
    ) : (
        <section className={styles.table_flex}>
            <h1>There are total {topics.length} topics </h1>
            <table className={styles.topic_table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Topic</th>
                        <th className={styles.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <Link
                                        to={
                                            '/api/getTopicArticle/' + topic.slug
                                        }
                                    >
                                        {topic.slug.charAt(0).toUpperCase() +
                                            topic.slug.slice(1)}
                                    </Link>
                                </td>
                                <td>{topic.description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default Topics
