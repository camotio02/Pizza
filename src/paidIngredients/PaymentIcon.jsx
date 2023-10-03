import React from "react"
import { Box, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { PaidIngredients } from "./index";


export const PaymentIcon = () => {

    // const [openPaidIngredient, setOpenPaidIngredient] = useState(false)
    // const TogglebreIngredientePago = () => {
    //   setOpenPaidIngredient(!openPaidIngredient)
    // }

    return (
        <>
        <Box
          sx={{
            bgcolor: 'green',
            width: '100%',
            height: '100%',
            // position: 'absolute',
            zIndex: '553',
            top:'50px',
            laft: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          
        >
         
            <LocalMallIcon 
            sx={{ color: '#FF6510', 
             fontSize: '3rem',
            

             }} 
            />

            
            <Typography
            sx={{
              position: 'absolute',
              top: '1.3rem',
              // right: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              fontSize: '1.5rem',
              bgcolor: 'black',
              height: '18px',
              width: '1.8rem',
            }}
          >
            3
          </Typography>
        
        </Box>
    
        </>
    )
}