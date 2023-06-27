
import React from 'react'

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


//customizing the styles
import { createTheme, ThemeProvider } from '@mui/material';
// this is the theme that will be used to customize the the styles
const theme = createTheme({ 
    components: { // what to customize 
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2'
                    },
                    styles: {
                        fontSize: 11,
                        color: "#c62828" // not working yet	
                    }

                },
                 {
                    props: { // not working yet
                        variant: 'subtitle1'
                    },
                    styles: {
                        fontColor: 'red' // not working
                    }

                }

            ]
            
        },
    }

})


const BookCard = (book) => { // the prop book is an array of books objects
    return (
        
        <Grid item xs={3} spacing={5}>
            <ThemeProvider theme={theme}>            
                <Paper elevation={3}
                    sx={{
                        backgroundColor: 'WhiteSmoke',
                        height: 100}} >
                    {book.map((bk) => (
                        <Box paddingX ={2}>
                            <Typography variant='subtitle1' component='h4'
                                sx={{ color: 'deeppink', fontWeight: 'bold' }}>
                                Title: {bk.title}
                                Author: {bk.author}
                                <Link to={`${bk.url}`} target='_parent'>Get it here</Link>
                            </Typography>                    
                        </Box>                       
                    ))}
                </Paper>
            </ThemeProvider>               
        </Grid>      
  )
}

export default BookCard
