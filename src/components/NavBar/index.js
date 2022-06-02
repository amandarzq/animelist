import React, { useContext, useEffect }  from 'react'
import { useNavigate } from 'react-router-dom';
import { FiHome, FiGrid } from "react-icons/fi";
import { Nav, MenuItem, Name } from './style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CollectionContext } from '../../context/collection';

export const NavBar = () => {
  const navigate = useNavigate()
  const { notif } = useContext(CollectionContext)
  
  useEffect(() => {
    if (notif?.message) {
      const { mode, message } = notif || {}
      toast[mode](message)
    }
  }, [notif])

  return (
    <Nav>
      <MenuItem onClick={() => navigate('/')}>
        <FiHome size={26}/>
      </MenuItem>
      <MenuItem onClick={() => navigate('/collection')}>
        <FiGrid size={26}/>
      </MenuItem>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </Nav>
  )
}