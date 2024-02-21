import React, { useState} from "react";
import { Link } from 'react-router-dom';
import '../styles/Project.css';
import GitIcon from '../assets/projects/Github.svg';
import CalculatorPreview from '../assets/projects/calculator.png';
import StudentEnrollmentPreview from '../assets/projects/Student-Enrollment App.png';
import S3Preview from '../assets/projects/AWS S3 Management App.png';
import PortfolioPreview from '../assets/projects/portfolio.png';
import RealEstatePreview from '../assets/projects/RealEstate.png';
import TutorPreview from '../assets/projects/tutor.png';
import VideoHubPreview from '../assets/projects/videohub.png'
import ComputerGamesPreview from '../assets/projects/computergames.png';
import ClickMe from '../assets/projects/click.png'

function Project(){
    const [selectedProject, setSelectedProject] = useState(null);
    const projectLinks = {
        Calculator: 'https://github.com/marcopaulo01/simpleCalculator',
        StudentEnrollment: 'https://github.com/marcopaulo01/springboot_enrollment',
        S3: 'https://github.com/marcopaulo01/AWS-Lab1',
        Portfolio: 'https://github.com/marcopaulo01/portfolio',
        RealEstate: 'https://github.com/marcopaulo01/realestateapi',
        Tutor: 'https://github.com/marcopaulo01/springboot_tutor',
        VideoHub: 'https://github.com/marcopaulo01/videohub',
        ComputerGames: 'https://github.com/marcopaulo01/computer_games_data'

    };

    return(
        <div className="project-background">
            <div className="title">
                <h1>
                    <span>Projects / </span>
                    <Link to='https://github.com/marcopaulo01?tab=repositories' target="_blank" rel="noopener noreferrer">Github Repositories
                    <img src={GitIcon} alt="Git Icon" /></Link>
                </h1>
                    
            </div>
            <div className="content">
                <div className="project-list">
                    <ul className='accordion'>
                    <li>
                        <label for="first">Portfolio<img src={ClickMe} alt="Click Me" /></label>
                        <input type="radio" name="list" id='first'  onChange={() => setSelectedProject('Portfolio')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>Developed a personal portfolio website showcasing skills, projects, and experiences.</li>
                                    <li>Implemented a responsive design using HTML, CSS, and JavaScript frameworks like React, ensuring compatibility across devices.</li>
                                    <li>Featured projects with descriptions, technologies used, and links to live demos or repositories.</li>
                                    <li>Integrated contact information and social media links for networking and communication purposes.</li>
                                    <li>Optimized performance and user experience through efficient loading times and intuitive navigation.</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <label for="second">Calculator<img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='second'  onChange={() => setSelectedProject('Calculator')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>Build using Windows Presentation Foundation(WPF) in C#</li>
                                    <li>Creates a user-friendly calculator interface with digit and operation buttons, 
                                        supporting basic arithmetic operations (+, -, ×, ÷), decimal input, and sign toggling</li>
                                    <li>Accepts user inputs for numbers and operations, executing calculations accurately 
                                        while managing display updates dynamically</li>
                                    <li>Implements basic error handling, preventing division by zero scenarios and 
                                        displaying "Invalid" appropriately</li>
                                    <li>Manages the display output efficiently, updating results and handling 
                                        user inputs to maintain a clear and functional interface</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <label for="third">Student-Enrollment App <img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='third' onChange={() => setSelectedProject('StudentEnrollment')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>Developed an enterprise-level student enrollment system utilizing Spring Boot MVC 
                                        and Spring Data JPA, ensuring seamless integration and efficient data handling</li>
                                    <li>Successfully implemented CRUD functionalities for student registration, program
                                         selection, payment processing, and profile modification, ensuring complete data management</li>
                                    <li>Implemented robust form validations and error handling mechanisms both on the front-end 
                                        using Thymeleaf and back-end using entity class annotations, ensuring data integrity and user input correctness</li>
                                    <li>Designed a structured MySQL database with optimized tables (Students, Programs, Enrollments) and appropriate 
                                        relationships, incorporating primary keys and foreign keys for efficient data storage and retrieval</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <label for="fourth">AWS S3 Management App <img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='fourth' onChange={() => setSelectedProject('S3')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>Developed a comprehensive Python-based AWS S3 management suite using a Tkinter-driven appication</li>
                                    <li>Orchestrated a central control panel serving as a navigation hub between bucket 
                                        and object operations within the AWS S3 environment</li>
                                    <li>Incorporated functionalities for creating, listing, and deleting buckets via an intuitive graphical interface</li>
                                    <li>Enabled browsing, selection, and uploading of local files to chosen buckets, along with object listing functionalities</li>
                                    <li>Leveraged AWS Boto3 for streamlined interactions with AWS S3, ensuring efficient file handling and management within specified buckets</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <label for="fifth">Real Estate API with AWS DynamoDB<img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='fifth' onChange={() => setSelectedProject('RealEstate')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>ASP.NET Core for robust API development</li>
                                    <li>Amazon DynamoDB as a NoSQL database for data storage</li>
                                    <li>Utilizes built-in Swagger for API documentation</li>
                                    <li>Implements HTTP methods (GET, POST, PUT, DELETE, PATCH) for full data management</li>
                                    <li>CRUD functionalities for Realtor and Property entities</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <label for="sixth">Tutor Management System<img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='sixth' onChange={() => setSelectedProject('Tutor')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>Developed a robust full-stack tutor management system leveraging Spring Boot Web Flux, MongoDB, and Thymeleaf technologies for comprehensive front and back-end functionalities</li>
                                    <li>Engineered RESTful APIs handling tutors, subjects, students, and appointments, ensuring seamless communication between the front-end and back-end components</li>
                                    <li>Implemented feature-rich CRUD operations for tutors, subjects, students, and appointments, providing comprehensive data management capabilities across the application</li>
                                    <li>Ensured data integrity and user input correctness through meticulous form validations and error handling mechanisms. Employed Thymeleaf for front-end validations and MongoDB schema validations at the back end</li>
                                    <li>Designed and optimized a structured MongoDB database encompassing collections for Tutors, Subjects, Students, and Appointments, enabling efficient data storage and retrieval</li>
                                    <li>Seamlessly integrated Thymeleaf-based front-end components with the Spring Boot Web Flux back end, delivering an intuitive and interactive user experience</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <label for="seventh">VideoHub (AWS services)<img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='seventh' onChange={() => setSelectedProject('VideoHub')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>Implement user registration and login functionalities using ASP.Net Core MVC</li>
                                    <li>Store user registration information securely in RDS (Microsoft SQL Server)</li>
                                    <li>Utilize AWS S3 to store videos, and DynamoDB to manage metadata, comments, and ratings</li>
                                    <li>Design a DynamoDB table with a primary key for videos, storing metadata like title, genre, director(s), release time, etc</li>
                                    <li>Implement functionalities to allow users to Create new videos, edit or delete only their uploaded videos, allow anyone to download videos but restrict editing and deletion rights to the respective uploader and filter video lists by genre efficiently using DynamoDB's secondary indexes</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <label for="eighth">Computer Games Data<img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='eighth' onChange={() => setSelectedProject('ComputerGames')}/>
                            <div className="content">
                                <ul className="feature">
                                <li>Dataset source: <a href="https://www.kaggle.com/datasets/iamsouravbanerjee/computer-games-dataset">https://www.kaggle.com/datasets/iamsouravbanerjee/computer-games-dataset</a></li>
                                <li>Utilize Python and Pandas to clean and preprocess the dataset</li>
                                <li>Perform exploratory data analysis (EDA) to understand the dataset and its features</li>
                                <li>Visualize the dataset using Matplotlib and Power BI to gain insights and trends</li>
                                <li>Pie Chart, Bar Chart, Treemaps</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="project-container">
    <div className="project-preview">
        {selectedProject === 'Calculator' && <img src={CalculatorPreview} alt="Calculator Preview" />}
        {selectedProject === 'StudentEnrollment' && <img src={StudentEnrollmentPreview} alt="Student Enrollment Preview" />}
        {selectedProject === 'S3' && <img src={S3Preview} alt="AWS S3 Preview" />}
        {selectedProject === 'Portfolio' && <img src={PortfolioPreview} alt="Portfolio Preview" />}
        {selectedProject === 'RealEstate' && <img src={RealEstatePreview} alt="Real Estate Preview" />}
        {selectedProject === 'Tutor' && <img src={TutorPreview} alt="Tutor Preview" />}
        {selectedProject === 'VideoHub' && <img src={VideoHubPreview} alt="VideoHub Preview" />}
        {selectedProject === 'ComputerGames' && <img src={ComputerGamesPreview} alt="ComputerGames Preview" />}
        {selectedProject && (
            <p>
                <a href={projectLinks[selectedProject]} target="_blank" rel="noopener noreferrer">
                    Github Link to Project
                </a>
            </p>
        )}
    </div>
</div>

            </div>
        </div>
    );
}

export default Project;