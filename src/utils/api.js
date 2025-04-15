import axios from "axios";

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const fetchPosts = async () => {
    const res = await api.get(`/posts`)
    return res.data
}