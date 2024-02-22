import React from "react";
import angularlogo from '../assets/logo/angular.png';
import awslogo from '../assets/logo/aws.png';
import azurelogo from '../assets/logo/azure.png';
import csharplogo from '../assets/logo/csharp.png';
import csslogo from '../assets/logo/css.png';
import expressjslogo from '../assets/logo/expressjs.png';
import graphqllogo from '../assets/logo/graphql.png';
import htmllogo from '../assets/logo/html.png';
import javascriptlogo from '../assets/logo/javascript.png';
import kotlinlogo from '../assets/logo/kotlin.png';
import mongodblogo from '../assets/logo/mongodb.png';
import nodejslogo from '../assets/logo/nodejs.png';
import pythonlogo from '../assets/logo/python.png';
import reactlogo from '../assets/logo/react.png';
import springbootlogo from '../assets/logo/springboot.png';
import sqllogo from '../assets/logo/sql.png';
import '../styles/Skills.css';

function Skills() {
    return (
        <div className="skills-container">
            <h1></h1>
            <div className="skills-list">
                <div><img src={angularlogo} alt="Angular Logo" className="logo"/> Angular</div>
                <div><img src={awslogo} alt="AWS Logo" className="logo"/> AWS</div>
                <div><img src={azurelogo} alt="Azure Logo" className="logo"/> Azure</div>
                <div><img src={csharplogo} alt="C# Logo" className="logo"/> C#</div>
                <div><img src={csslogo} alt="CSS Logo" className="logo"/> CSS</div>
                <div><img src={expressjslogo} alt="ExpressJS Logo" className="logo"/> ExpressJS</div>
                <div><img src={graphqllogo} alt="GraphQL Logo" className="logo"/> GraphQL</div>
                <div><img src={htmllogo} alt="HTML Logo" className="logo"/> HTML</div>
                <div><img src={javascriptlogo} alt="JavaScript Logo" className="logo"/> JavaScript</div>
                <div><img src={kotlinlogo} alt="Kotlin Logo" className="logo"/> Kotlin</div>
                <div><img src={mongodblogo} alt="MongoDB Logo" className="logo"/> MongoDB</div>
                <div><img src={nodejslogo} alt="NodeJS Logo" className="logo"/> NodeJS</div>
                <div><img src={pythonlogo} alt="Python Logo" className="logo"/> Python</div>
                <div><img src={reactlogo} alt="React Logo" className="logo"/> React</div>
                <div><img src={springbootlogo} alt="Spring Boot Logo" className="logo"/> Spring Boot</div>
                <div><img src={sqllogo} alt="SQL Logo" className="logo"/> SQL</div>
            </div>
        </div>
    );
}

export default Skills;
