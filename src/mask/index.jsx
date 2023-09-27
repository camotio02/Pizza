import react, { useState, useEffect } from 'react'
import { TextField, Typography, Stack, Box, Button, Input } from '@mui/material'

import { ingredientesMock } from './components/ingredients'
export const Topping = ({ soma, setSoma, setPedido }) => {
  const [selectedItems, setSelectedItems] = useState([])
  const calculateTotal = () => {
    const total = selectedItems.reduce(
      (acc, index) => acc + ingredientesMock[index].price,
      0
    )
    setSoma(total)
  }

  const getIngrediente = ({ arrayIndex }) => {
    const ingredientes = []
    for (let i = 0; i < arrayIndex.length; i++) {
      const ingrediente = {
        name: ingredientesMock[arrayIndex[i]].name,
        price: ingredientesMock[arrayIndex[i]].price,
      }
      ingredientes.push(ingrediente)
    }
    return ingredientes
  }
  const handleItemToggle = (index) => {
    const itemIndex = selectedItems.indexOf(index)
    if (itemIndex === -1) {
      setSelectedItems([...selectedItems, index])
    } else {
      const updatedItems = [...selectedItems]
      updatedItems.splice(itemIndex, 1)
      setSelectedItems(updatedItems)
    }
  }

  const addIngrediente = () => {
    calculateTotal()
    console.log(selectedItems)
    const Itens = getIngrediente(selectedItems)
    setPedido((prevPedido) => ({
      ...prevPedido,
      ingredientes: [...prevPedido.ingredientes, Itens],
    }))
  }

  return (
    <Stack
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        height: 'auto',
        flexWrap: 'wrap',
        gap: '2rem',
      }}
    >
      {ingredientesMock.length > 0 &&
        ingredientesMock.map((addPizza, index) => {
          const isChecked = selectedItems.includes(index)

          return (
            <Typography
              key={index}
              sx={{
                color: 'red',
                border: '1px solid orange',
                borderRadius: '8px',
                Width: '450px',
                // background: 'green',
                display: 'flex',
                flexDirection: 'column',

                textAlign: 'center',
              }}
            >
              <Box>
                <img src={addPizza?.Image} width={95} height={65} alt="" />
              </Box>
              <Box>{addPizza?.name}</Box>
              <Box sx={{ color: 'blue' }}>{addPizza?.price}</Box>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleItemToggle(index)}
              />
            </Typography>
          )
        })}

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
        onClick={addIngrediente}
      >
        Calcular Total
      </Button>

      {/* Exiba os itens marcados e o total */}
      {selectedItems.length > 0 && (
        <div>
          <Typography
            sx={{
              color: 'green',
              fontSize: '1.8rem',
              fontWeight: '900',
            }}
          >
            Total: {soma}
          </Typography>
        </div>
      )}
    </Stack>
  )
}
