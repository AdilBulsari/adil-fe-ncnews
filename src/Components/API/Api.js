import axios from 'axios'
const url = 'https://adil-nc-news.cyclic.app/'
export function getArticlesForTopics(topic_name) {
    return axios
        .get(`${url}/api/articles?filter_by=${topic_name}`)
        .then((res) => {
            return res.data
        })
}
export const deleteComment = (comment_id) => {
    return axios.delete(`${url}/api/comments/${comment_id}`).catch((err) => {
        console.log(err)
    })
}

export function getAllTopics() {
    return axios.get(`${url}/api/topics`).then((res) => {
        return res.data
    })
}

export function getArticleById(article_id) {
    return axios.get(`${url}/api/articles/${article_id}`).then((res) => {
        return res.data
    })
}

export function patchVoteById(article_id, vote_count) {
    return axios
        .patch(`${url}/api/articles/${article_id}`, { inc_votes: vote_count })
        .then((res) => {
            return res.data
        })
}

export function getCommentsByArticleId(article_id) {
    return axios
        .get(`${url}/api/articles/${article_id}/comments`)
        .then((res) => {
            console.log(res.data)
            return res.data
        })
}

export function postCommentByArticleId(article_id, body) {
    return axios.post(`${url}/api/articles/${article_id}/comments`, body)
}

export function sortByDate(type) {
    return axios.get(`${url}/api/articles/?sort_by=${type}`).then((res) => {
        return res.data
    })
}
