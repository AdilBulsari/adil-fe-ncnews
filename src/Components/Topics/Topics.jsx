import axios from 'axios'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TopicsContext } from '../Context/TopicsContext'

import styles from '../Topics/Topics.module.css'

function Topics() {
    const { topics, setTopic } = useContext(TopicsContext)

    useEffect(() => {
        axios
            .get('https://adil-nc-news.herokuapp.com/api/topics')
            .then((res) => {
                setTopic(res.data.topic)
            })
    }, [setTopic])

    return (
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
