import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { fetchPosts } from '../utils/api'

const Rq = () => {
  const [page, setPage] = useState(1)
  const pageSize = 4;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;



  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  const handleNext = () => {
    setPage(prev => prev + 1)
  }

  const handlePrev = () => {
    setPage(prev => prev - 1)
  }

  if (isLoading) return <h2>Loading...</h2>
  return (
    <div className='p-1 max-w-screen-md mx-auto'>
      {data?.slice(start, end).map((e) => {
        return <div key={e.id} className='my-5 bg-gray-200 shadow-xl p-4'>
          <h1>{e.id}</h1>
          <p className='font-semibold'>{e.title}</p>
          <p>{e.body}</p>
        </div>
      })}
      <div className="flex justify-center items-center gap-4">
        <button onClick={handlePrev} disabled={page === 1} className='px-3 disabled:text-zinc-500 cursor-pointer font-semibold py-1 bg-gray-200 rounded-md'>prev</button>
        <h2>{page}</h2>
        <button onClick={handleNext} className='px-3 cursor-pointer font-semibold py-1 bg-gray-200 rounded-md'>next</button>
      </div>
    </div>
  )
}

export default Rq