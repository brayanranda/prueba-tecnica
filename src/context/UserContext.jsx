import { createContext, useEffect, useState } from "react"
import { toast } from 'sonner';
import { getRequest } from "../helper/help";

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const url_api = `${import.meta.env.VITE_API_URL}users`
    const [dataUsers, setDataUsers] = useState([]);
    const [dataUser, setDataUser] = useState([]);

    const getUsers = async () => {
        try {
            const response = await getRequest(url_api);
            setDataUsers(response);
        } catch (error) {
            console.error(error.message);
            toast.success(error.message)
        }
    }

    const getUserById = async (id_user) => {
        const url = `${url_api}/${id_user}`
        try {
            const response = await getRequest(url);
            setDataUser(response);
        } catch (error) {
            console.error(error.message);
            toast.success(error.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, []);
    
    const data = {
      getUsers, dataUsers, getUserById, dataUser
    }

    return (
        <UserContext.Provider value={data}>{children}</UserContext.Provider>
    )
}

export { UserProvider }
export default UserContext