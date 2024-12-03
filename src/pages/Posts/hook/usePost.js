import { useState, useEffect, useContext } from 'react';
import PostContext from '../../../context/PostContext';
import UserContext from '../../../context/UserContext';

export const usePost = () => {
    const { dataPost, guardarPost, eliminarPost } = useContext(PostContext);
    const { dataUsers } = useContext(UserContext);

    const [modal, setModal] = useState(false);

    const onSubmit = async (data) => {
        guardarPost(data)
    };    

    /**
     * Crea un mapa que asocia cada userId con su nombre.
     * @param {Array} dataUsers - Lista de usuarios con propiedades id y name.
     * @returns {Object} - Un objeto donde cada clave es un userId y su valor es el nombre del usuario.
   */
    const userIdToNameMap = dataUsers.reduce((acc, user) => {
        acc[user.id] = user.name;
        return acc;
    }, {});

    /**
     * Reemplaza el userId de cada post con el nombre del usuario correspondiente.
     * @param {Array} dataPost - Lista de objetos de posts donde cada post tiene un userId.
     * @param {Object} userIdToNameMap - Mapa que asocia cada userId con un nombre de usuario.
     * @returns {Array} - Nueva lista de posts con userId reemplazado por el nombre del usuario.
    */
    const updatedPosts = dataPost.map(post => ({
        ...post,
        userId: userIdToNameMap[post.userId]
    }));

    return {
        modal, setModal, dataPost, updatedPosts, onSubmit, eliminarPost
    }
}