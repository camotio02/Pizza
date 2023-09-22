import React from 'react';
import { TextField, Typography, Stack, Box, Button, Input } from '@mui/material';


export const Crustelection = () => {
    return (
        <>
            <Stack sx={{
                bgcolor: 'blue',
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',

            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    gap: '2px'

                }}>
                    <Input type='radio' nome={crust} />
                    Traditionol
                </Box>
            </Stack>
        </>
    )
}