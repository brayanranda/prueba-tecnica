import React from 'react'
import Menu from '../../components/Menu'
import { usePost } from './hook/usePost'
import PostForm from './components/PostForm'
import PostTitle from './components/PostTitle'
import PostList from './components/PostList'
import { Toaster } from 'sonner'

export default function Post() {

    const {
        modal, setModal, dataPost, onSubmit, eliminarPost, closeModal,
        dataUsers, isEdit, setIsEdit, defaultValues, setDefaultValues
    } = usePost()

    return (
        <main className='md:flex'>
            <Toaster position="bottom-right" />
            <Menu />
            <section className='w-full md:w-10/12 py-10 relative'>
                {
                    modal &&
                        <PostForm
                            onSubmit={onSubmit}
                            users={dataUsers}
                            isEdit={isEdit}
                            defaultValues={defaultValues}
                            closeModal={closeModal}
                        />
                }
                <PostTitle setModal={setModal} />
                <PostList
                    dataPost={dataPost}
                    eliminarPost={eliminarPost}
                    setIsEdit={setIsEdit}
                    setModal={setModal}
                    setDefaultValues={setDefaultValues}
                />
            </section>
        </main>
    )
}
