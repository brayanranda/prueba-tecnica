import React, { Fragment } from 'react'
import GenericModal from '../../../components/GenericModal';

export default function PostForm({ setModal }) {

  const handleSave = () => { 
    console.log("handleSave");
  }

  return (
    <Fragment>
      <GenericModal
        title="Registrar un post"
        titleBtn="Registrar"
        method={handleSave}
        close={() => setModal(false)}
      >
        <div className='py-5 space-y-3 flex flex-col'>
          <label>
            <p>User</p>
            <select className='w-full bg-gray-100 py-2 px-4 rounded-md' name="" id="">
              <option value="">User 1</option>
              <option value="">User 2</option>
              <option value="">User 3</option>
            </select>
          </label>

          <label>
            <p>Title</p>
            <textarea className='bg-gray-100 py-2 px-4 rounded-md w-full resize-none' name="" id=""></textarea>
          </label>

          <label>
            <p>Body</p>
            <textarea className='bg-gray-100 py-2 px-4 rounded-md w-full resize-none h-36' name="" id=""></textarea>
          </label>
        </div>
      </GenericModal>
    </Fragment>
  )
}
