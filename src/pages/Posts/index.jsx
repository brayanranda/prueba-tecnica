import React from 'react'
import Menu from '../../components/Menu'
import { usePost } from './hook/usePost'
import PostForm from './components/PostForm'
import PostTitle from './components/PostTitle'
import PostList from './components/PostList'
import { Toaster } from 'sonner'

export default function Post() {

    const { modal, setModal, dataPost } = usePost()

    useEffect(() => {
        console.log(dataPost);
        
    }, []);

    return (
        <main className='md:flex'>
            <Toaster position="bottom-right" />
            <Menu />
            <section className='w-full md:w-10/12 py-10 relative'>
                { modal && <PostForm setModal={setModal} /> }
                <PostTitle setModal={setModal} />
                {/* <PostList dataPost={dataPost} /> */}
            </section>
        </main>
    )
}
