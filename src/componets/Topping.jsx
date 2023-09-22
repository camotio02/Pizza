import react, { useState, useEffect } from "react";
import { TextField, Typography, Stack, Box, Button, Input } from '@mui/material';

import cherry from '../img/cherry.png';
import Milho from '../img/corn.png';
import chilli_1 from '../img/chilli-1.png';
import garlic from '../img/garlic-2.png';
import jalapeno from '../img/jalapeno.png';
import leaves from '../img/leaves.png';

const myImge = [
    {
        Image: cherry,
        percentage: 40,
        userName: ' Tomate',
    },
    {
        Image: Milho,
        percentage: 30,
        userName: ' Milho',
    },
    {
        Image: chilli_1,
        percentage: 10,
        userName: 'pimenta',
    },
    {
        Image: garlic,
        percentage: 21,
        userName: ' Alho',
    },

    {
        Image: jalapeno,
        percentage: 8,
        userName: 'Queijo',
    },
    {
        Image: leaves,
        percentage: 20,
        userName: ' Queijo',
    },

]



export const Topping = () => (

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
            // overflowY: 'scroll',
            // background: 'red',
            flexWrap: 'wrap',
            gap: '2rem'

        }}
    >
        {
            myImge.length > 0 && myImge.map((addPizza, index) => {
                return (
                    <Typography key={index} sx={{
                        color: 'red',
                        border: '1px solid orange',
                        borderRadius: '8px',
                        Width: '450px',
                        // background: 'green',
                        display: 'flex',
                        flexDirection: 'column',

                        textAlign: 'center'

                    }}>
                        <Box>
                            <img src={addPizza?.Image} width={95} height={65} alt="" />
                        </Box>
                        <Box>
                            {addPizza?.userName}
                        </Box>
                        <Box sx={{color: 'blue'}}>
                            {addPizza?.percentage}
                        </Box>
                        <input type="checkbox" />
                    </Typography>
                )

            })
        }


    </Stack>

)