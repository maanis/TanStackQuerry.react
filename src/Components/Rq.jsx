import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { deletePost, fetchPosts } from '../utils/api'

const Rq = () => {
  const [page, setPage] = useState(1)
  const pageSize = 3;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const queryClient = useQueryClient()

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

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(['posts'], (old) => {
        return old?.filter(e => e.id != id)
      })
    }
  })

  if (isLoading) return <h2>Loading...</h2>
  return (
    <div className='p-1 max-w-screen-md mx-auto'>
      <div className="flex justify-center items-center gap-4 mt-2 select-none">
        <button onClick={handlePrev} disabled={page === 1} className='px-3 disabled:text-zinc-500 cursor-pointer font-semibold py-1 bg-gray-200 rounded-md'>prev</button>
        <h2>{page}</h2>
        <button disabled={page === Math.ceil(data?.length / pageSize)} onClick={handleNext} className='px-3 disabled:text-zinc-500 cursor-pointer font-semibold py-1 bg-gray-200 rounded-md'>next</button>
      </div>
      {data?.slice(start, end).map((e) => {
        return <div key={e.id} className='my-5 bg-gray-200 shadow-xl p-4'>
          <h1>{e.id}</h1>
          <p className='font-semibold'>{e.title}</p>
          <p>{e.body}</p>
          <button onClick={() => deleteMutation.mutate(e.id)} disabled={deleteMutation.isPending} className='px-3 py-1 rounded-md bg-red-600 font-semibold cursor-pointer text-white mt-3'>Delete</button>
        </div>
      })}

    </div>
  )
}

export default Rq