import "../styles/courses.css"
import logo from '../images/Arola.png'
import { Link } from 'react-router-dom'




const Univ1001 = () => {
    return (
        <div className="page-content-div">
            <h1 >Univ 1001 <span width='20'>-</span>Online Learning Strategies</h1>  
            <h2 className='exp-text' marginTop={50}>My experience and tips for this course</h2>
            
            <div>
                <img className='logo' src={`${logo}`} alt='Arola-logo' width='50' height='50'/>
                <h3 className='name'>Samuel Katongole</h3>
                <Link to='/contact'>Contact</Link>
            </div>

            {/* <div className='course-image'>
                <img src='https://i0.wp.com/idsc.miami.edu/wp-content/uploads/2021/11/Python-image-with-logo-730x350-1.jpg?fit=730%2C349&ssl=1'
                        alt= "python-programming"/>
            </div> */}
            <div className='body-text'>
                <h2>Welcome to CS 1102- Programming I</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum has been the industry's standard dummy text ever <br />
                    since the 1500s, when an unknown printer took a galley of type <br />
                    and scrambled it to make a type specimen book. It has survived not only five<br />
                    centuries, but also the leap into electronic typesetting, remaining essentially<br />
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets<br />
                    containing Lorem Ipsum passages, and more recently with desktop publishing software<br />
                    like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
                </p>
                <p>
                    
                    It is a long established fact that a reader will be distracted by the<br/>
                    readable content of a page when looking at its layout. The point of using<br/>
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as<br/>
                    opposed to using 'Content here, content here', making it look like readable <br/>
                    English. Many desktop publishing packages and web page editors now use Lorem <br/>
                    Ipsum as their default model text, and a search for 'lorem ipsum' will uncover <br/>
                    many web sites still in their infancy. Various versions have evolved over the <br/>
                    years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    <br /><br />
                    </p>
            </div>
        </div>
        
    )
    

}





export default Univ1001