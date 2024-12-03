import { createContext, useEffect, useState } from "react"
import { toast } from 'sonner';
import { getRequest } from "../helper/help";

const PostContext = createContext()

const PostProvider = ({ children }) => {
    const url = `${import.meta.env.VITE_API_URL}`
    const [dataPost, setDataPost] = useState([]);

    const getPost = async () => {
        try {
            const response = await getRequest(url);
            setDataPost(response);
        } catch (error) {
            console.error(error.message);
            toast.success(error.message)
        }
    }

    useEffect(() => {
        getPost()
    }, []);
    
    const data = {
      getPost, dataPost
    }

    return (
        <PostContext.Provider value={data}>{children}</PostContext.Provider>
    )
}

export { PostProvider }
export default PostContext