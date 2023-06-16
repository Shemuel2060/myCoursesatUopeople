
import React from 'react'

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';


//customizing the styles
import { createTheme, ThemeProvider } from '@mui/material';



// this is the them that will be used to customize the the styles
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


const BookCard = ({subject}) => {
    return (
        
        <Grid item xs={3} spacing={5}>
            <ThemeProvider theme={theme}>
            
                <Paper elevation={3}
                    sx={{
                        backgroundColor: 'WhiteSmoke',
                        height: 100,
                    }} >
                <img
                        src={`${ subject.books.1.url }`} alt={`${subject.alt}`}
                    className='img' />
                <Box paddingX={2}>
                        <Typography variant='subtitle1' component='h2'
                        sx={{color:'deeppink', fontWeight: 'bold'}}>
                            <Link to={`${subject.googleDriveLink}`} target='_parent'>{subject.name}</Link>
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                        marginTop={3}
                    >
                        <AccessTime sx={{ width:12.5 }} />
                        <Typography variant='body2' component='p' marginLeft={0.5}>
                            {subject.duration}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    marginTop={0.5}
                    >
                        
                        <Rating name="read-only" value={subject.rating} readOnly precision={0.5}
                            size='small' />
                        <Typography variant='body2' component='p' marginLeft={1}>
                            {subject.rating}
                        </Typography>
                        
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    marginTop={0.5}
                    >          
                        
                        <Typography variant='body2' component='p' marginLeft={1}>
                            Grade: {subject.grade}
                        </Typography>
                        
                    </Box>
                    
                    
                </Box>
                </Paper>
                </ThemeProvider>               
                </Grid>      
  )
}

export default SubjectCard
