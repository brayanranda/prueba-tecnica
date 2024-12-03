import React, { useState } from 'react'
import { DataTable } from '../../../components/DataTable';
import PostModalEliminar from './PostModalEliminar';
import columns from '../util/utilPost';


export default function PostList({ dataPost, eliminarPost }) {

  const [modalEliminar, setModalEliminar] = useState(false);
 

  const handleDelete = (idPost) => {
    setModalEliminar(true)
    eliminarPost(idPost);
  }

  const handleAction = (dataPost) => {
    console.log(dataPost);
  }

  return (
    <article className='w-11/12 mx-auto mt-8'>
      {
        modalEliminar &&
          <PostModalEliminar
            handleEliminar={handleDelete}
            setModal={setModalEliminar}
          />
      }
        <DataTable columns={columns(handleAction, handleAction)} data={dataPost} />
    </article>
  )
}
