import { Box, Button, Modal } from '@mui/material'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './../styles/Header.scss'
import { SiBuymeacoffee } from 'react-icons/si'
import { ImMenu3 } from 'react-icons/im'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'80%',
  maxHeight:'550px',
  height:'90%',
  overflowY: 'scroll',
  maxWidth:'300px',
  borderRadius:'20px',
  background: '#f6e6da67',
  backdropFilter:'blur(10px)',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Header({handleOpen}) {
    const [open,setOpen] = useState(false)

    const openMenu = () => setOpen(true)
    const closeMenu = () => setOpen(false)

  return (
    <>
        <header className="header">
            <div className="logo">
                <SiBuymeacoffee  size={40}/>
            </div>
            <nav className="header__nav">
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/'>Blog</Link>
                <Button onClick={handleOpen} id='search-input' color='' variant='contained'>
                  <FaSearch/> Search
                </Button>
            </nav>
            <div className="header__menu" onClick={openMenu}>
              <ImMenu3 size={40}/>
            </div>
        </header>
        <Modal
        open={open}
        onClose={closeMenu}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
        <nav className="modal__nav">
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/'>Payment</Link>
                <Link to='/'>Blog</Link>
                <Button onClick={handleOpen} className='modal__nav__search' color='primary' variant='contained'>
                  <FaSearch/> 
                </Button>
            </nav>
        </Box>
      </Modal> 
    </>
  )
}
