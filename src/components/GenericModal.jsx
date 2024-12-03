import React from 'react'
import { faSave, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function GenericModal({ title, titleBtn, method, close, children }) {

    const colors = {
        Registrar: "bg-sky-500 hover:bg-sky-600",
        Eliminar: "bg-red-500 hover:bg-red-600",
    }

  return (
    <section className='w-full min-h-screen flex items-start md:items-center justify-center absolute z-50 md:inset-0 bg-black bg-opacity-80'>
        <article className='bg-white rounded-xl p-10 w-96 lg:w-[35rem]'>
            <p className='text-2xl font-medium'>{title}</p>
            {children}
            <div className='flex items-center gap-2'>
                <button
                    className={`rounded-full bg-cyan text-white font-bold  py-2 px-4 hover:scale-105 duration-300 ${colors[titleBtn]}`}
                    onClick={method}
                >
                    <FontAwesomeIcon icon={faSave} className='mr-2' />
                    {titleBtn}
                </button>
                <button
                    className="rounded-full bg-cyan text-gray-900 font-bold bg-gray-200 py-2 px-4 hover:scale-105 duration-300 hover:bg-gray-300"
                    onClick={close}
                >
                    <FontAwesomeIcon icon={faX} className='mr-2' />
                    Cancelar
                </button>
            </div>
        </article>
    </section>
  )
}