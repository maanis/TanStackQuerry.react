import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const data = ['home', 'about', 'nq', 'rq']
    return (
        <div className="flex justify-center gap-36 h-14 items-center shadow-lg">
            {data.map(e => {
                return <NavLink to={`/${e}`} key={e} className='capitalize text-xl font-semibold' >{e}</NavLink>
            })}
        </div>
    )
}

export default Navbar