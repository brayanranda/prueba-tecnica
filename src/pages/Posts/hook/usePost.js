import React, { useState, useEffect, useContext } from 'react';
import PostContext from '../../../context/PostContext';

export const usePost = () => {
    const { dataPost } = useContext(PostContext);
    const [modal, setModal] = useState(false);

    return {
        modal, setModal, dataPost
    }
}