import React, { useEffect, useState } from 'react'
import './header.css'
import { Stack, Box,Typography} from '@mui/material'
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3'
import MenuIcon from '@mui/icons-material/Menu'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom'

export const Header = () => {
  useEffect(() => {
    const header = document.querySelector('.Container_Header')
    const handleScroll = () => {
      header.classList.toggle('sticky', window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [abreMeno, setabreMeno] = useState(false)
  const MenuAberto = () => {
    setAbrirIcon(true)
  }
  const FecharMenu = () => {
    setabreMeno(!abreMeno)
  }


  return (
    <header className="Container_Header">
      <Box className="div-box-text">
        <h2>
          Pizzaria<span> Sow</span>
        </h2>
      </Box>

      <Box 
        sx={{
        
    
            display: 'flex',
    
    
            '@media only screen and (max-width: 700px)': {
              display:'none'
              },
        
      }}  className="div-box-button">
        <WifiCalling3Icon
          sx={{
            color: '#FF6510',
            width: '2rem',
            height: '3.8rem',
            width: '3.8rem',
          }}
        />
        <Box>
          <p>24/7 serviço de entrega de pizza</p>
          <h3>+55 41 99760-748</h3>
        </Box>

        <Box sx={{
          bgcolor: 'green',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'

        }}>
      
      
          <LocalMallIcon sx={{
            color: '#FF6510',
            fontSize: '3rem'
          }}/>
      

        <Typography 
         sx={{
          
         position: 'absolute',
          top: '1.3rem',
          // right: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          fontSize: '1.5rem',
          bgcolor: 'black',
          height: '18px',
          width: '1.8rem'
        }}
        >3</Typography>
        </Box>

      </Box>

      <Stack 
      sx={{
        display: 'none',

        '@media only screen and (max-width: 700px)': {
           display: 'flex'
          },
      }}
      
      >
        <Box className="logoIcons">
          <span onClick={FecharMenu}>
            {abreMeno ? <RestaurantMenuIcon /> : <MenuIcon />}
          </span>
        </Box>

        {abreMeno && (
          
    
            <Box className="menu-celular">
              <Box className="div-box-icon">
                <WifiCalling3Icon
                  sx={{
                    color: '#FF6510',
                    width: '2rem',
                    height: '3.8rem',
                    width: '3.8rem',
                  }}
                />
                <Box>
                  <p>24/7 serviço de entrega de pizza</p>
                  <h3>+55 41 99760-748</h3>
                </Box>
              </Box>
            </Box>
         
        )}
      </Stack>
    </header>
  )
}


// jjkjkwlk