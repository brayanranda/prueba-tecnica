import React, { useState } from 'react'
import { DataTable } from '../../../components/DataTable';
import PostModalEliminar from './PostModalEliminar';
import columns from '../util/utilPost';

export default function PostList({ dataPost, eliminarPost, setDefaultValues, setIsEdit, setModal }) {

  const [modalEliminar, setModalEliminar] = useState(false);
  const [idEliminar, setIdEliminar] = useState("");

  const handleDelete = async (data) => {
    setIdEliminar(data?.id)
    setModalEliminar(true);
  }

  const handleAction = (dataPost) => {
    setIsEdit(true)
    setModal(true)
    
    setDefaultValues(dataPost)
  }

  return (
    <article className='w-11/12 mx-auto mt-8'>
      {
        modalEliminar &&
          <PostModalEliminar
            handleEliminar={eliminarPost}
            setModal={setModalEliminar}
            idEliminar={idEliminar}
          />
      }
        <DataTable columns={columns(handleAction, handleDelete)} data={dataPost} />
    </article>
  )
}
