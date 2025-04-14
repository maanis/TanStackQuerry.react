import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'

const Nq = () => {
  const [data, setData] = useState()
  const fetchPosts = async () => {
    const res = await api.get('/posts')
    setData(res.data)
  }
  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <div className='p-4 max-w-screen-md mx-auto'>
      {data?.map((e) => {
        return <div key={e.id} className='my-5 bg-gray-200 shadow-xl p-4'>
          <p className='font-semibold'>{e.title}</p>
          <p>{e.body}</p>
        </div>
      })}
    </div>
  )
}

export default Nq