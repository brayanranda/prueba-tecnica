import React from 'react'
import GenericModal from '../../../components/GenericModal'

export default function PostModalEliminar({ handleEliminar, setModal }) {

  return (
    <GenericModal
        title="Eliminar Registro"
        titleBtn="Eliminar"
        method={handleEliminar}
        close={() => setModal(false)}
        buttonType="button"
    >
        <p>¿Esta seguro de Eliminar este Post?</p>
    </GenericModal>
  )
}
