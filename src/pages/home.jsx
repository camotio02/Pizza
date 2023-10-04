import React, { useState } from 'react'
import './home.css'
import { TextField, Typography, Stack, Box } from '@mui/material'
import Pizza from '../componets/pizza'
import Banner from '../componets/Banner'
import { Header } from '../Header/Header'
import { MyFooter } from '../componets/Footer'
import { useEffect } from 'react'
import { api_pizzas } from '../api/back'
import { PaidIngredients } from '../paidIngredients'

export const MyHome = () => {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await api_pizzas.
        setPizzas(response)
      } catch (err) {
        console.err(err)
      }
    }
    getPizzas()
  }, [])
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
        <Pizza pizzas={pizzas}/>
      
        <PaidIngredients/>
        <MyFooter />
      </Stack>
    </>
  )
}
