import React, { useEffect, useState } from 'react'
import { Button, Box, Stack, Typography } from '@mui/material'
import NestedModal from '../componets/DateSlection'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Topping } from '../mask'
import TextField from '@mui/material/TextField'

export const PaidIngredients = () => {
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [cep, setCep] = useState('')
  const [block, setBlock] = useState('')
  const [floor, setFloor] = useState('')
  const [apartment, setApartment] = useState('')

  const [errors, setErrors] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    cep: '',
    block: '',
    floor: '',
    apartment: '',
  })

  const handleFullNameChange = (event) => {
    const value = event.target.value
    setFullName(value)
    setErrors({ ...errors, fullName: value ? '' : 'Campo obrigatório' })
  }

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value
    setPhoneNumber(value)
    setErrors({ ...errors, phoneNumber: value ? '' : 'Campo obrigatório' })
  }

  const handleSubmit = () => {
    handleFullNameChange()
    handlePhoneNumberChange()
  }

  return (
    <>
      <Stack
        sx={{
          width: '65rem',
          height: '45rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'ceneter',
          flexDirection: 'column',
          bgcolor: '#dedede',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: '2.8rem',
          gap: '3rem',

          '@media only screen and (max-width: 805px)': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '99%',
            height: '100vh',
            outline: 'none',
            gap: '4rem',
          },
        }}
      >
        <Stack
          sx={{
            width: '100%',
            height: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridGap: '10px',

            '@media only screen and (max-width: 805px)': {
              gridTemplateColumns: 'repeat(1, 1fr)',
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridGap: '10px',

              '@media only screen and (max-width: 805px)': {
                gridTemplateColumns: 'repeat(1, 1fr)',
              },
            }}
          >
            <TextField
              type="text"
              placeholder="Nome completo"
              value={fullName}
              onChange={handleFullNameChange}
              error={errors.fullName}
              sx={{
                bgcolor: 'white',
                borderRadius: '8px',
                fontSize: '30px',
                fontWeight: '900',
              }}
            />


            <TextField
              type="text"
              placeholder="Número de telefone"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              error={errors.phoneNumber}
              sx={{
                bgcolor: 'white',
                borderRadius: '8px',
                fontSize: '30px',
                fontWeight: '900',
              }}
            />
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridGap: '10px',

              '@media only screen and (max-width: 805px)': {
                gridTemplateColumns: 'repeat(1, 1fr)',
              },
            }}
          >
            <TextField
              type="text"
              placeholder="Endereço de entrega"
              sx={{
                bgcolor: 'white',
                borderRadius: '8px',
                fontSize: '30px',
                fontWeight: '900',
              }}
            />

            <TextField
              type="text"
              placeholder="CEP"
              sx={{
                bgcolor: 'white',
                borderRadius: '8px',
                fontSize: '30px',
                fontWeight: '900',
              }}
            />
          </Box>

          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridGap: '10px',
            }}
          >
            <TextField
              type="text"
              placeholder="Bloco"
              sx={{
                bgcolor: 'white',
                borderRadius: '8px',
                fontSize: '30px',
                fontWeight: '900',
              }}
            />

            <TextField
              type="text"
              placeholder="Andar"
              sx={{
                bgcolor: 'white',
                borderRadius: '8px',
                fontSize: '30px',
                fontWeight: '900',
              }}
            />
            <TextField
              type="text"
              placeholder="apartamento"
              sx={{
                bgcolor: 'white',
                borderRadius: '8px',
                fontSize: '30px',
                fontWeight: '900',
              }}
            />
          </Box>

          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gridGap: '10px',
            }}
          >
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={7}
              placeholder="A sua mensagem é muito importante"
              sx={{
                bgcolor: 'white',
                color: 'black',
                borderRadius: '8px',
                fontSize: '30px',
                fontWeight: '900',
              }}
            />
          </Box>
        </Stack>

        <Stack>
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
            }}
            onClick={handleSubmit}
          >
            Finalizar pedido
          </Button>
        </Stack>
      </Stack>
    </>
  )
}
