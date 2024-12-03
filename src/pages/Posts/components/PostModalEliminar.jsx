import React from 'react'
import GenericModal from '../../../components/GenericModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function PostModalEliminar({ handleEliminar, setModal }) {

  return (
    <GenericModal
        title="Eliminar Registro"
        close={() => setModal(false)}
    >
        <p className='py-5'>¿Esta seguro de Eliminar este Post?</p>
        <button
            className="rounded-full bg-cyan text-white font-bold  py-2 px-4 hover:scale-105 duration-300 bg-red-500 hover:bg-red-600"
            onClick={() => { handleEliminar() }}
        >
            <FontAwesomeIcon icon={faTrash} className='mr-2' />
            Eliminar
        </button>
    </GenericModal>
  )
}
