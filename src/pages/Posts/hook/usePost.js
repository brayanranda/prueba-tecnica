import { useState, useEffect, useContext } from 'react';
import PostContext from '../../../context/PostContext';
import UserContext from '../../../context/UserContext';

export const usePost = () => {
    const { dataPost, guardarPost, eliminarPost, editarPost } = useContext(PostContext);
    const { dataUsers } = useContext(UserContext);
    const [isEdit, setIsEdit] = useState(false);

    const [modal, setModal] = useState(false);

    const initialState = {
        userId: "",
        title: "",
        body: "",
    }

    const [defaultValues, setDefaultValues] = useState(initialState);

    const onSubmit = async (data) => {
        console.log(data);
        console.log("isEdit", isEdit);
        
        
        isEdit ? editarPost(data, data?.id) : guardarPost(data)
    };

    const closeModal = () => {
        setModal(false);
        setDefaultValues(initialState)
    }

    return {
        modal, setModal, dataPost, onSubmit, eliminarPost, dataUsers, isEdit, setIsEdit, defaultValues, setDefaultValues, closeModal
    }
}