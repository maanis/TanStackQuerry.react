import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPosts } from '../utils/api'

const Rq = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
  console.log(data)
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

export default Rq