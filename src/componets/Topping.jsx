import react, { useState, useEffect } from "react";
import { TextField, Typography, Stack, Box, Button, Input } from '@mui/material';

import cherry from '../img/cherry.png';
import Milho from '../img/corn.png';
import chilli_1 from '../img/chilli-1.png';
import garlic from '../img/garlic-2.png';
import jalapeno from '../img/jalapeno.png';
import leaves from '../img/leaves.png';
import AzonasBranco from '../img/Azeitonas-braco.png';
import AzonasPreto from '../img/Azonas-preto.png';

import TomatesFrescos from '../img/fresh-tomatoes.png';
import Mussarela from '../img/mozzarella.png';
import Cogumerlo  from '../img/mushrooms.png';
import Olives from '../img/olives.png';
import Parmesao from '../img/parmesan.png';
import Folhas from '../img/leaves.png';


const myImge = [
    {
        Image: AzonasBranco,
        percentage: 28.99,
        userName: ' Azeitonas Branco',
    },
    {
        Image: AzonasPreto,
        percentage: 23.99,
        userName: ' Azeitonas Preto',
    },
    {
        Image: cherry,
        percentage: 14.19,
        userName: ' Tomate',
    },
    {
        Image: Milho,
        percentage: 14.99,
        userName: ' Milho',
    },
    {
        Image: chilli_1,
        percentage: 10.44,
        userName: 'pimenta',
    },
    {
        Image: garlic,
        percentage: 9.66,
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


    {
        Image: TomatesFrescos,
        percentage: 12,
        userName: ' Tomates Frescos',
    },
    {
        Image: Mussarela,
        percentage: 10,
        userName: ' Mussarela',
    },
    {
        Image: Cogumerlo,
        percentage: 10,
        userName: 'Cogumerlo',
    },
    {
        Image: Olives,
        percentage: 21,
        userName: ' Olives',
    },

    {
        Image: Parmesao,
        percentage: 8,
        userName: 'Parmesão',
    },
    {
        Image: Folhas,
        percentage: 20,
        userName: ' Folhas',
    },

]



export const Topping = () => {


    const [selectedItems, setSelectedItems] = useState([]);
    const [soma, setSoma] = useState(0);

    // Função para lidar com a marcação/desmarcação de itens
    const handleItemToggle = (index) => {
        const itemIndex = selectedItems.indexOf(index);
        if (itemIndex === -1) {
            setSelectedItems([...selectedItems, index]);
        } else {
            const updatedItems = [...selectedItems];
            updatedItems.splice(itemIndex, 1);
            setSelectedItems(updatedItems);
        }
    };

    // Função para calcular o total dos itens marcados
    const calculateTotal = () => {
        const total = selectedItems.reduce((acc, index) => acc + myImge[index].percentage, 0);
        setSoma(total);
    };



    // return(
    //    <Stack
    //         sx={{
    //             width: '100%',
    //             height: 'auto',
    //             display: 'flex',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             position: 'relative',
    //             flexDirection: 'row',
    //             height: 'auto',
    //             // overflowY: 'scroll',
    //             // background: 'red',
    //             flexWrap: 'wrap',
    //             gap: '2rem'

    //         }}
    //     >
    //         {
    //             myImge.length > 0 && myImge.map((addPizza, index) => {
    //                 return (
    //                     <Typography key={index} sx={{
    //                         color: 'red',
    //                         border: '1px solid orange',
    //                         borderRadius: '8px',
    //                         Width: '450px',
    //                         // background: 'green',
    //                         display: 'flex',
    //                         flexDirection: 'column',

    //                         textAlign: 'center'

    //                     }}>
    //                         <Box>
    //                             <img src={addPizza?.Image} width={95} height={65} alt="" />
    //                         </Box>
    //                         <Box>
    //                             {addPizza?.userName}
    //                         </Box>
    //                         <Box sx={{color: 'blue'}}>
    //                             {addPizza?.percentage}
    //                         </Box>
    //                         <input type="checkbox" />
    //                     </Typography>
    //                 )

    //             })
    //         }


    //     </Stack>
    // );









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
            {
                myImge.length > 0 && myImge.map((addPizza, index) => {
                    const isChecked = selectedItems.includes(index);

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
                            <Box sx={{ color: 'blue' }}>
                                {addPizza?.percentage}
                            </Box>
                            <input type="checkbox" checked={isChecked} onChange={() => handleItemToggle(index)} />
                        </Typography>
                    )
                })
            }

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

                }} onClick={calculateTotal}>
                Calcular Total
            </Button>

            {/* Exiba os itens marcados e o total */}
            {selectedItems.length > 0 && (
                <div>
                    {/* <Typography sx={{ color: 'green' }}>
                        Itens Marcados:
                    </Typography>
                    <ul>
                        {selectedItems.map((index) => (
                            <li key={index}>{myImge[index].userName}</li>
                        ))}
                    </ul> */}
                    <Typography sx={{
                        color: 'green',
                        fontSize: '1.8rem',
                        fontWeight: '900',
                    }}>
                        Total: {soma}
                    </Typography>
                </div>
            )}
        </Stack>
    );
}

