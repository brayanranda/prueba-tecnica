import React from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function GenericModal({ title, close, children }) {

  return (
    <section className='w-full min-h-screen flex items-start md:items-center justify-center absolute z-50 md:inset-0 bg-black bg-opacity-80'>
        <article className='bg-white rounded-xl p-10 w-96 lg:w-[35rem]'>
            <div className='flex justify-between items-center'>
                <p className='text-2xl font-medium'>{title}</p>
                <button
                    className="rounded-full bg-cyan text-gray-900 font-bold hover:bg-gray-200 py-2 px-4 hover:scale-105 duration-300"
                    onClick={close}
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
            {children}
        </article>
    </section>
  )
}