import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PostTitle({ setModal }) {
  return (
    <article className="w-11/12 mx-auto flex items-center justify-between relative">
        <p className="font-bold text-2xl text-white">Lista de Posts</p>
        <button
            onClick={() => setModal(true)}
            className="rounded-full bg-cyan text-white font-bold bg-sky-500 py-2 px-4 hover:scale-105 duration-300 hover:bg-sky-600"
        >
            <FontAwesomeIcon icon={faPlus} className='mr-3' />
            Agregar
        </button>
    </article>
  )
}
