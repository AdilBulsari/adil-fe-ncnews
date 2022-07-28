import axios from 'axios'

export function getArticlesForTopics(topic_name) {
    return axios
        .get(
            `https://adil-nc-news.herokuapp.com/api/articles?filter_by=${topic_name}`
        )
        .then((res) => {
            return res.data
        })
}

export function getAllTopics() {
    return axios
        .get('https://adil-nc-news.herokuapp.com/api/topics')
        .then((res) => {
            return res.data
        })
}

export function getArticleById(article_id) {
    return axios
        .get(`https://adil-nc-news.herokuapp.com/api/articles/${article_id}`)
        .then((res) => {
            return res.data
        })
}

export function patchVoteById(article_id, vote_count) {
    return axios
        .patch(
            `https://adil-nc-news.herokuapp.com/api/articles/${article_id}`,
            { inc_votes: vote_count }
        )
        .then((res) => {
            return res.data
        })
}

export function getCommentsByArticleId(article_id) {
    return axios
        .get(
            `https://adil-nc-news.herokuapp.com/api/articles/${article_id}/comments`
        )
        .then((res) => {
            console.log(res.data)
            return res.data
        })
}
