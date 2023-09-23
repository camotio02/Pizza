import React, { useState } from 'react';
import { Typography, Stack, Box, Button, Input } from '@mui/material';

// Assuming ItemComponent is a valid component that displays an item

import cherry from '../img/cherry.png';
import Milho from '../img/corn.png';
import chilli_1 from '../img/chilli-1.png';
import garlic from '../img/garlic-2.png';
import jalapeno from '../img/jalapeno.png';
import leaves from '../img/leaves.png';

// Define your items
const Items = [
    {
        Image: cherry,
        percentage: 40,
        userName: 'Tomate',
        price: 6.50,
    },
    {
        Image: Milho,
        percentage: 40,
        userName: 'Tomate',
        price: 18.99,
    },
    {
        Image: chilli_1,
        percentage: 40,
        userName: 'Tomate',
        price: 11.99,
    },
    {
        Image: garlic,
        percentage: 40,
        userName: 'Tomate',
        price: 9.5,
    },
    {
        Image: jalapeno,
        percentage: 40,
        userName: 'Tomate',
        price: 10,
    },
    {
        Image: leaves,
        percentage: 40,
        userName: 'Tomate',
        price: 8.9,
    },


];

const MandatoryItems = () => {
    const [selectedItems, setSelectedItems] = useState(new Array(Items.length).fill(false));
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
            // Handle the order logic here
            alert('Pedido feito com sucesso!');
        }
    };

    return (
        <Stack sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            flexDirection: 'row',
            height: 'auto',
            bgcolor: 'blue',
            // overflowY: 'scroll',
            // background: 'red',
            flexWrap: 'wrap',
            padding: '3rem',
            gap: '2rem'

        }}>
            {Items.length > 0 && Items.map((addPizza, index) => (
                <Box>
                    <Box sx={{
                        color: 'red',
                        border: '1px solid orange',
                        borderRadius: '8px',
                        Width: '450px',
                        // background: 'green',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center'

                    }}  key={index}>
                        <img src={addPizza?.Image} width={95} height={65} alt="" />

                        <input type="checkbox" checked={selectedItems[index]} onChange={() => handleCheckboxChange(index)} />
                    </Box>

                    <Stack sx={{
                        color: 'whate',
                        bgcolor: 'blue'
                    }} item={Items} />
                </Box>
            ))}


            <Stack sx={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                flexDirection: 'row',
                height: 'auto',
                // overflowY: 'scroll',
                background: 'green',
                flexWrap: 'wrap',
                gap: '2rem',

                '@media only screen and (max-width: 805px)': {
                    height: 'auto',
                    width: '100%',
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                },

            }}>
            <Button sx={{
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
            }} onClick={calculateTotalPrice}>Calcular Preço Total</Button>
            <Typography sx={{
                borderRadius: '4px',
                bgcolor: '#f6410a',
                fontSize: '12px',
                fontWeight: '800',
                padding: '1rem 2rem',
                Color: 'black',
                border: 'none',
                outline: 'none',
                fontFamily: 'Roboto sans-serif',
                fontFamily: 'Shrikhand cursive',
                fontWeight: '900',
                gap: '2rem',
                backgroundColor: '#FF6510 !important',
            }}>Total: R$ {totalPrice.toFixed(2)}</Typography>
            <Button sx={{
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
            }} onClick={handleOrder}>Fazer Pedido</Button>
            </Stack>
           
        </Stack>
    );
};

export default MandatoryItems;
