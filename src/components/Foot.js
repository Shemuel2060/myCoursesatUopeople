 
import { Link } from 'react-router-dom';
import React from "react";
import {Box,Container,Row,Column,Heading,CourseLink} from "./FooterStyles";


const Foot = () => {
    return (
        <div class="footer-dark">
            {/* <footer>
                <div>
                    <div className="row">
                        <div className="navigate-here">
                            <h3>Navigate to Courses</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Python">Programming Fundamentals</Link></li>
                                <li><Link to="/Java1">Programming I</Link></li>
                                <li><Link to="/Java2">Programming II</Link></li>
                                <li><Link to="/Web">Web Programming I</Link></li>    
                                <li><Link to="/Database1">Database I</Link></li>
                                <li><Link to="/ComputerSystems">Computer Systems</Link></li> 
                                <li><Link to="/English">English Composition II</Link></li>
                            </ul>
                        </div>
                    </div>
                <p class="copyright">Samuel Katongole © 2023</p>
                </div>
            </footer> */}



	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		Samuel Katongole: A Computer Science student at UoPeople
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About UoPeople</Heading>
			<Link to="https://www.uopeople.edu/about/uopeople/mission-values/">Mission & Values</Link>
			<Link to="https://www.uopeople.edu/student-reviews/">Testimonials</Link>
		</Column>
		
		<Column>
			<Heading>Navigate to Courses</Heading>
			<CourseLink><Link to="/">Home</Link></CourseLink>
            <CourseLink><Link to="/Python">Programming Fundamentals</Link></CourseLink>
            <CourseLink><Link to="/Java1">Programming I</Link></CourseLink>
            <CourseLink><Link to="/Java2">Programming II</Link></CourseLink>
            <CourseLink><Link to="/Web">Web Programming I</Link></CourseLink>    
            <CourseLink><Link to="/Database1">Database I</Link></CourseLink>
            <CourseLink><Link to="/ComputerSystems">Computer Systems</Link></CourseLink> 
            <CourseLink><Link to="/English">English Composition II</Link></CourseLink>
							
		</Column>
		<Column>
			<Heading>Contact Me</Heading>
			<Link to="/contact">Contact</Link>
			
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<Link to="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</Link>
			
			<Link to="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</Link>
			<Link to="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</Link>
		</Column>
		</Row>
	</Container>
	</Box>
);

        </div>
    )
}
export default Foot;