import React, { useState } from 'react';
import { Typography, Stack, Box, Button, Input } from '@mui/material';

import AguaComgas from '../img/agua-mineral-com-gas.png';
import AguaSemgas from '../img/agua-mineral-sem-gas.png';
import FantaLaranja from '../img/fanta.png';
import FantaUva from '../img/fanta-uva-.png';
import Pessego from '../img/pessego.png';

import AguaTonica from '../img/agua-tonica-.png';
import Tonica from '../img/agua-tonica.jpg';
import GuaranaAntarctica from '../img/guarana-antarctica-removebg-preview.png';
import refreDeMaca from '../img/ilustracao-removebg-preview.png';
import Pepis from '../img/pepis.png';
import RefriPepis from '../img/refrigerante-pepis.png';

import Coca from '../img/refrigerante-coca-lata.jpg';
import RefriAbacaxi from '../img/Refrigerante-de-abacaxi-removebg-preview.png';
import Refriuva from '../img/refrigerante-de-uva.png';
import Sprite from '../img/sprite.png';
import Antarctica2l from '../img/Refrigerante-Guaraná-Antarctica-2l.jpg';
import Coca2l from '../img/refri-cocacola.png'

const Items = [
    {
        Image: Coca2l,
        percentage: 40,
        userName: 'Coca 2l',
        price: 12.50,
    },
    {
        Image: Antarctica2l,
        percentage: 40,
        userName: 'Garaná 2l',
        price: 12.50,
    },
    {
        Image: AguaComgas,
        percentage: 40,
        userName: 'Água Com Gás',
        price: 12.50,
    },
    {
        Image: AguaSemgas,
        percentage: 40,
        userName: 'Água Sem Gás',
        price: 10.99,
    },
    {
        Image: FantaLaranja,
        percentage: 40,
        userName: 'Fanta Laranja',
        price: 7.99,
    },
    {
        Image: FantaUva,
        percentage: 40,
        userName: 'Fanta Uva',
        price: 7.99,
    },
    {
        Image: Pessego,
        percentage: 40,
        userName: 'Suco de Pessego',
        price: 5.99,
    },
   




    {
        Image: AguaTonica,
        percentage: 40,
        userName: 'Água Tonica',
        price: 10.50,
    },
    {
        Image: Tonica,
        percentage: 40,
        userName: 'Água Tonica',
        price: 9.99,
    },
    {
        Image: GuaranaAntarctica,
        percentage: 40,
        userName: 'Guarana Antarctica',
        price: 7.99,
    },
    {
        Image: refreDeMaca,
        percentage: 40,
        userName: 'Refri de Maçã',
        price: 9.5,
    },
    {
        Image: Pepis,
        percentage: 40,
        userName: 'Pepis',
        price: 9.99,
    },
    {
        Image: RefriPepis,
        percentage: 40,
        userName: 'Pepis',
        price: 7.90,
    },








    {
        Image: Coca,
        percentage: 40,
        userName: 'Coca',
        price: 6.99,
    },
    {
        Image: RefriAbacaxi,
        percentage: 40,
        userName: 'Refri de Abacaxi',
        price: 8.99,
    },
    {
        Image: Refriuva,
        percentage: 40,
        userName: 'Refri de  Morango',
        price: 10.99,
    },
    {
        Image: FantaUva,
        percentage: 40,
        userName: 'Fanta Uva',
        price: 9.5,
    },
    {
        Image: Sprite,
        percentage: 40,
        userName: 'Sprite',
        price: 10.99,
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
            flexWrap: 'wrap',
            gap: '2rem',
            // // overflowY: 'scroll',
            // // background: 'red',
        }}>
            {Items.length > 0 && Items.map((drinks, index) => (
                <Box>
                    <Box sx={{
                        color: 'red',
                        border: '1px solid orange',
                        borderRadius: '8px',
                        // Width: '450px',
                        // height:'500px',
                        // background: 'greebebidasn',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center'

                    }} key={index}>



                        <img src={drinks?.Image} width={95} height={100} alt="" />
                            <Typography>
                                {drinks?.userName}
                            </Typography>
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
                // background: 'green',
                flexWrap: 'wrap',
                gap: '2rem',

                '@media only screen and (max-width: 805px)': {
                    height: 'auto',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
