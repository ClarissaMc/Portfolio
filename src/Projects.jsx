import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FilterButton } from './FilterButton';
import { Thumbnail } from './Thumbnail';

const filters = [
    "Python",
    "Java",
    "C",
    "R",
    "HTML/CSS",
    "JavaScript",
    "React",
    "MERN",
    "SQL",
    "Data Analysis",
    "Data Viz",
    "Front End",
    "Back End",
    "Full Stack",
];

const Projects = ({ projects }) => {
    const thumbnails = projects.map((project, index) => {
        var title = project.title;
        var image = project.img;
        var alt = project.alt;
        var skills = project.skills;

        return (
            <Col className="mt-3" key={index}>
                <Thumbnail
                    title={title}
                    image={image}
                    alt={alt}
                    skills={skills}
                />
            </Col>
        );
    });

    return (
        <Container id="projects-section">
            <Row>
                <Col lg="2"></Col>

                <Col lg="8">
                    <Row>
                        <h2>Projects</h2>
                    </Row>
                    <Row className="filter-row">
                        <FilterButton
                            terms={filters}
                        />
                    </Row>
                    <Row id="projects-container">
                        {thumbnails.map((thumbnail, index) => (
                            <span key={index}>{thumbnail}</span>
                        ))}
                    </Row>
                </Col>

                <Col lg="2"></Col>
            </Row>
        </Container>
    );
};

export { Projects }