import React, { useState, useEffect, Fragment } from 'react'
import { TextField, Typography, Stack, Box, Button, Input } from '@mui/material'
import { SizeSelection } from './SizeSelection'
import { Crustelection } from './Crustelection'
import { Topping } from './Topping'
const sizes = [
  {
    size: 'Pequena',
    percentage: 30,
    tamanho: '40px',
  },
  {
    size: 'Média',
    percentage: 15,
    tamanho: '49px',
  },
  {
    size: 'Grande',
    percentage: 30,
    tamanho: '57px',
  },
]
export const CreatPizza = ({ data }) => {
  const [size, setSize] = useState('Pequeno')
  const [crust, setCrust] = useState('traditional')
  const [additionalTopping, setAdditionalTopping] = useState([])
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0)

  const [price, setPrice] = useState(0)

  const [myNewCards, setMyNewCards] = useState(null)
  const [abreMenuPizza, setAbreMenuPizza] = useState(true)
  const [selectedSize, setSelectedSize] = useState('')

  const handleSizeSelection = (size) => {
    setSelectedSize(size)
  }

  const openModal = (newCard) => {
    setMyNewCards(!img)
    const myNewCard = {
      Image: img.Image,
      userName: img.userName,
      description: img.description,
      pizzaPrice: img.pizzaPrice,
    }
    setMyNewCards(img)
  }

  return (
    <>
      <Stack
        sx={{
          display: 'grid',
          height: 'auto',
          gridTemplateColumns: '1fr 2fr',
          gap: '1rem',
          position: 'relative',
          '@media only screen and (max-width: 805px)': {
            gridTemplateColumns: ' 1fr',
          },
        }}
      >
        <Box
          sx={{
            '@media only screen and (max-width: 805px)': {
              // background: 'red',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            },
          }}
        >
          <img
            id="minha-imagem"
            width={250}
            height={250}
            src={data?.Image}
            alt="Pizza"
            sx={{
              '@media screen and (max-width: 805px)': {
                width: '50px',
                height: 'auto',
              },
            }}
          />
        </Box>

        <Box>
          <Stack
            sx={{
              
              position: 'relative',
              height: '33rem',
              gap: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              '@media only screen and (max-width: 805px)': {
                height: '50rem',
                width: '100%',
              },
            }}
          >
            <Stack
              sx={{ 
                height: '30rem',
                padding: '1rem',
                gap: '2rem',
                // background: 'green',
                overflowY: 'scroll',

                '@media only screen and (max-width: 805px)': {
                  height: 'auto',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                },
              }}
            >
              <Box
                sx={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: 'red',
                }}
              >
                {data?.userName}
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Typography
                    sx={{
                      display: 'flex',
                      // bgcolor: 'red',
                      width: '100%',
                      
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      marginBottom: '2rem',
                    }}
                  >
                    {sizes.map((size, index) => {
                      return (
                        <Box sx={{ gap: '2rem' }} key={index}>
                          <img
                            style={{
                              width: size.tamanho,
                              height: size.tamanho,
                            }}
                            src={data.Image}
                            alt={data.description}
                          />
                          <Stack>
                            <Box sx={{ color: 'black', gap: '2rem' }}>{size.size}</Box>
                            <input
                              type="radio"
                              name={selectedSize}
                              value={size.size}
                              checked={selectedSize === size.size}
                              onChange={() => handleSizeSelection(size.size)}
                            />
                          </Stack>
                        </Box>
                      )
                    })}
                  </Typography>
                </Typography>              

                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Topping />
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: 'black',
                  fontSize: '1.4rem',
                  marginBottom: '3rem',
                }}
                variant="body2"
                color="text.secondary"
              >
                {data?.description}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: ' space-between',
              textAlign: 'center',
              fontSize: '2rem',
              fontWeight: '600',
              color: 'rgb(3,37,77)',
              position: 'absolute',
              bottom: '0',
            }}
          >
            <Button
              sx={{
                borderRadius: '4px',
                bgcolor: '#f6410a',
                fontSize: '12px',
                fontWeight: '500',
                padding: '1rem 2rem',
                Color: '#fff',
                border: 'none',
                outline: 'none',
                fontFamily: 'Roboto sans-serif',
                fontFamily: 'Shrikhand cursive',
                fontWeight: '900',
                gap: '2rem',
                backgroundColor: '#FF6510 !important',

                '&:hover': {
                  background: 'transparent',
                  transition: '0.6s',
                },
              }}
            >
              Adicionar na sacola
              <Box sx={{ height: 'auto' }}>
                {sizes.map((item, index) => {
                  const calculatePrice = () => {
                    const percentage = item.percentage / 100
                    const price = data.pizzaPrice

                    if (selectedSize === 'small') {
                      return price - price * percentage
                    } else {
                      return price + price * percentage
                    }
                  }

                  return (
                    <Fragment key={index}>
                      {item.size === selectedSize && (
                        <Fragment>
                          {`R$ ${calculatePrice().toFixed(2)}`}
                        </Fragment>
                      )}
                    </Fragment>
                  )
                })}
              </Box>
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}

export default CreatPizza;
