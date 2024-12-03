import { createContext, useEffect, useState } from "react"
import { toast } from 'sonner';
import { deleteRequest, getRequest, postRequest, putRequest } from "../helper/help";

const PostContext = createContext()

const PostProvider = ({ children }) => {
    const url = `${import.meta.env.VITE_API_URL}posts`
    const [dataPost, setDataPost] = useState([]);

    const getPosts = async () => {
        try {
            const response = await getRequest(url);
            setDataPost(response);
        } catch (error) {
            console.error(error.message);
            toast.success(error.message)
        }
    }

    const guardarPost = async (data) => {
        try {
            const res = await postRequest(url, data);
            await getPosts()

            toast.success(`El post con id ${res.id} ha sido creado`);
          } catch (error) {
            toast.error(error.message);
        }
    }

    const editarPost = async (data, idPost) => {
        const url_editar = `${url}/${idPost}`;

        try {
            const res = await putRequest(url_editar, data);
            await getPosts()

            toast.success(`Se modifico el post con el id ${res.id}`);
          } catch (error) {
            toast.error(error.message);
        }
    }

    const eliminarPost = async (idPost) => {
        const url_eliminar = `${url}/${idPost}`;

        try {
            const res = await deleteRequest(url_eliminar);
            await getPosts()
            
            toast.success(`Se elimino el post con el ${res.id}`);
          } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getPosts()
    }, []);
    
    const data = {
      getPosts, dataPost, guardarPost, eliminarPost
    }

    return (
        <PostContext.Provider value={data}>{children}</PostContext.Provider>
    )
}

export { PostProvider }
export default PostContext