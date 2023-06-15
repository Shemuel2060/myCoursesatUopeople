
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SubjectCard from '../components/SubjectCard';


import subjects from '../data.json';

const Home = () => {
    return (
        <div className="App">
      
      
      <Container fixed sx={{marginTop:5}}>
        <h1 >My Courses at UoPeople</h1><br/>
        <Grid container spacing={2}>
          {subjects.map((subject,index) => <SubjectCard subject={subject} key={index} /> )}
        </Grid>
      </Container>
      
           
    </div>
    )
    
}
export default Home