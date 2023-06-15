import "../styles/courses.css"
import logo from '../images/Arola.png'
import { Link } from 'react-router-dom'




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
                <h2>👋Welcome to CS 1101- Programming Fundamentals</h2>
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
                <p>
                    
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                    opposed to using 'Content here, content here', making it look like readable                     English. Many desktop publishing packages and web page editors now use Lorem <br/>
                    Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                    many web sites still in their infancy. Various versions have evolved over the 
                    years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
            </div>
            
        </div>
        
    )
    

}





export default Python