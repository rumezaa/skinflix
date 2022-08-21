import React from 'react'

const Tags = ({tags}) => {
    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4'>{tags.map((tag) => (<div className='bg-yellow-400 text-white rounded-full text-center px-3 py-2 mx-3'>{tag.name}</div>))}</div>
    )
}

export default Tags