import React from 'react'

const NotFound = () => {
    return (
        <div className='bg-theme-light flex items-center justify-center'>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <i class="bi bi-exclamation-octagon-fill text-8xl"></i>
                <h1 className='text-4xl uppercase'>Working on it...</h1>
                <p className='text-2xl capitalize'>
                    it will finish
                </p>
            </div>
        </div>
    )
}

export default NotFound
