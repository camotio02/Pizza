import React, { useState } from 'react';
import { Typography, Stack, Box, Button, Input } from '@mui/material';
// Imports de imagens omitidos por brevidade

const Items = [
  // Itens omitidos para brevidade
];

const MandatoryItems = ({ setPedido }) => {
  const [selectedItems, setSelectedItems] = useState(
    new Array(Items.length).fill(false)
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (index) => {
    const updatedItems = [...selectedItems];
    updatedItems[index] = !updatedItems[index];
    setSelectedItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < Items.length; i++) {
      if (selectedItems[i]) {
        total += (Items[i].percentage / 100) * Items[i].price;
      }
    }
    setTotalPrice(total);
  };

  const handleOrder = () => {
    if (selectedItems.every((item) => !item)) {
      alert('Selecione pelo menos um item.');
    } else {
      alert('Pedido feito com sucesso!');
    }
  };

  const addBebida = () => {
  //Chama as funções necessárias e depois setPedido
    handleOrder();
    calculateTotalPrice();

    // Agora você pode definirPedido com o preço total atualizado e itens selecionados
    setPedido((prevPedido) => ({
      ...prevPedido,
      bebidas: [...prevPedido.bebidas, 'Nova Bebida'],
      totalPrice: totalPrice,
      selectedItems: selectedItems,
    }));
  };

  return (
    <Stack
      sx={{
        // Estilos omitidos por brevidade
      }}
    >
      {Items.length > 0 &&
        Items.map((drinks, index) => (
          <Box key={index}>
            <Box
              sx={{
                // Estilos omitidos por brevidade
              }}
            >
              <img src={drinks?.Image} width={95} height={100} alt="" />
              <Typography>{drinks?.userName}</Typography>
              <input
                type="checkbox"
                checked={selectedItems[index]}
                onChange={() => handleCheckboxChange(index)}
              />
            </Box>
          </Box>
        ))}

      <Stack
        sx={{
          // Estilos omitidos por brevidade
        }}
      >
        <Button
          sx={{
            // Estilos omitidos por brevidade
          }}
          onClick={calculateTotalPrice}
        >
          Calcular Preço Total
        </Button>
        <Typography
          sx={{
            // Estilos omitidos por brevidade
          }}
        >
          Total: R$ {totalPrice.toFixed(2)}
        </Typography>
        <Button
          sx={{
            // Estilos omitidos por brevidade
          }}
          onClick={addBebida}
        >
          Fazer Pedido
        </Button>
      </Stack>
    </Stack>
  );
};

export default MandatoryItems;
