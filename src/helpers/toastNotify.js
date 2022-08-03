import {toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Toastify = (msg) => {
    toast.warn(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

