import "../styles/courses.css"
import logo from '../images/Arola.png'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid.jsx'

import BookCard from '../components/Books';
import subjects from '../data.json';


const Python = () => {
    return (
        <div className="page-content-div">
            <h1 >CS 1101 <span width='20'>-</span> Programming Fundamentals </h1>  
            <h2 className='exp-text' marginTop={50}>My experience and tips</h2>
            
            <div className='logo-name-contactLink'>
                <img className='logo' src={`${logo}`} alt='Arola-logo' width='50' height='50'/>
                <h3 className='name'>Samuel Katongole</h3>
                <Link to='/contact' className='contactPage'>Contact</Link>
            </div>

            <div className='course-image'>
                <img src='https://i0.wp.com/idsc.miami.edu/wp-content/uploads/2021/11/Python-image-with-logo-730x350-1.jpg?fit=730%2C349&ssl=1'
                        alt= "python-programming"/>
            </div>
            <div className='body-text'>
                <h2>👋Welcome to CS 1101- Programming Fundamentals</h2><br/>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <br/>
                <h2>📂Course Content</h2><br/>
                <ul>
                    <li>Unit 1: Introduction and Fundamental Concepts </li>
                    <li>Unit 2: Variables, Expressions, Statements and Functions </li>
                    <li>Unit 3: Conditionals and Recursion </li>
                    <li>Unit 4: Functions and Return Values </li>
                    <li>Unit 5: Iteration and Strings </li>
                    <li>Unit 6: Lists </li>
                    <li>Unit 7: Dictionaries and Tuples </li>
                    <li>Unit 8: Files </li>
                    <li>Unit 9: Course Review & Final Exam </li><br/>
                    <hr style={{width: '100%'}}/><br/>
                    <h3>📚 Relevant Texts</h3>
                     <Grid container spacing={2}>
                        {subjects.map((subject,index) => <BookCard subject={subject} key={index} /> )}
                    </Grid>
                    <ul>
                        <li>{} by <i>{}</i>. Get it <a href='{}'>here</a></li>
                        <li>Text book 2. Get it <a href=''>here</a></li>
                        <li>Text book 3. Get it <a href=''>here</a></li>
                    </ul>
                </ul><br/>
                <h2>👋My work</h2>
                <p>

                </p><br/>
                <h2>👋Recommended Map</h2><br/>
                <p>

                </p>
            </div>
            
        </div>
        
    )
    

}





export default Python