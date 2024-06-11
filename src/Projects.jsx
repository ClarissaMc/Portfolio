import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FilterButton } from './FilterButton';

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
                        {projects.map((project) => {
                            return (
                                <Col sm={6} md={4} className="mt-3">
                                    <Thumbnail
                                        title={project.title}
                                        image={project.image}
                                        alt={project.alt}
                                        skills={project.skills}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>

                <Col lg="2"></Col>
            </Row>
        </Container>
    );
};

export { Projects }