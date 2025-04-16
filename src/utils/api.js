import axios from "axios";

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const fetchPosts = async () => {
    const res = await api.get(`/posts`)
    return res.data
}

export const deletePost = async (id) => {
    const res = await api.delete(`/posts/${id}`)
    return res
}