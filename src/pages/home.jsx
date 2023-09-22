import React from 'react'
import './home.css'
import { TextField, Typography, Stack, Box } from '@mui/material'
import Pizza from '../componets/pizza'
import Banner from '../componets/Banner'
import { Header } from '../Header/header'
import { CarMobileIcon } from '../componets/CarMobileIcon'
import { MyFooter } from '../componets/Footer'
import { Cta } from '../componets/Cta'

export const MyHome = () => {
  return (
    <>
      <Stack
        sx={{
          minHeight: '100vh',
          width: '100%',
          //   padding: '5rem 9% 2rem',
          backgroundColor: '#081b29',

          background: 'red',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'colunm',
          // gap: '5rem',

          '@media only screen and (max-width: 800px)': {
            width: '100%',
            position: 'relative',
          },
        }}
      >
        <Header />

        <Banner />
        <Pizza />

        <MyFooter />
      </Stack>
    </>
  )
}
