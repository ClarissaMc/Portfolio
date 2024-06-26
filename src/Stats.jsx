import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';

import skill from './assets/skills.png';
import goal from './assets/goal.png';
import book from './assets/book.png';

import { StatCard } from './StatCard';

const langPopover = (
    <Popover>
        <Popover.Body>
            <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>R</li>
                <li>JavaScript</li>
            </ul>
        </Popover.Body>
    </Popover>
);

const skillsPopover = (
    <Popover>
        <Popover.Body>
            <ul>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>R</li>
                <li>SQL</li>
                <li>Data Analysis</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>React.js</li>
            </ul>
        </Popover.Body>
    </Popover>
);

const projectsPopover = (
    <Popover>
        <Popover.Body>
            <strong>2 Python:</strong>
            <ul>
                <li>Stock Trader</li>
                <li>Learning Log</li>
            </ul>
            <strong>2 HTML/CSS:</strong>
            <ul>
                <li>Portfolio Website v1</li>
                <li>UPositive Website</li>
            </ul>
            <strong>3 JavaScript:</strong>
            <ul>
                <li>3D Travel Globe</li>
                <li>Blog App</li>
                <li>Tech News Search Engine</li>
            </ul>
            <strong>1 R:</strong>
            <ul>
                <li>Data Analytics Case Study</li>
            </ul>
        </Popover.Body>
    </Popover>
);

const coursesPopover = (
    <Popover>
        <Popover.Body>
            <strong>5 Books:</strong>
            <ul>
                <li>
                    <a href="https://www.amazon.com/dp/1593279280?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank">
                    <em>Python Crash Course</em></a> by Eric Matthes
                </li>
                <li>
                    <a href="https://www.amazon.com/dp/1118907442?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank">
                    <em>HTML & CSS</em></a> by Jon Duckett
                </li>
                <li>
                    <a href="https://www.amazon.com/dp/1118907442?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank">
                    <em>JavaScript & JQuery</em></a> by Jon Duckett
                </li>
                <li>
                    <a href="https://www.amazon.com/dp/9811480281?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank">
                    <em>Beginning Node.js, Express & MongoDB Development</em></a> by Greg Lim
                </li>
                <li>
                    <a href="https://www.amazon.com/dp/172004399X?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank">
                    <em>The Road to React</em></a> by Robin Wieruch
                </li>
            </ul>
            <strong>3 Courses:</strong>
            <ul>
                <li>edX IBM Introduction to Web Development</li>
                <li>edX UC3M Introduction to Java Programming</li>
                <li>Google Data Analytics Professional Certificate</li>
            </ul>
        </Popover.Body>
    </Popover>
);

const Stats = ({ id, langs, skills, projects, courses }) => {
    const langImg = (<svg viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>fundamentals/javascript/syntax</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="fundamentals/javascript/syntax" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="container" transform="translate(2.000000, 2.000000)" fillRule="nonzero"> <rect id="mask" stroke="#a86c89" strokeWidth="2" fill="#EE99C2" x="-1" y="-1" width="71" height="71" rx="14"> </rect> <path d="M14,3.27720645e-15 L15.1769479,3.55271368e-15 L69,53.8980361 L69,55 C69,62.7319865 62.7319865,69 55,69 L14,69 C6.2680135,69 9.46895252e-16,62.7319865 0,55 L-3.55271368e-15,14 C-4.49960893e-15,6.2680135 6.2680135,1.42034288e-15 14,0 Z" id="mask" fill="#D179A3"> </path> </g> <path d="M24.8710938,47.1484375 C22.9335841,47.1484375 21.6328158,46.8593779 20.96875,46.28125 C20.3046842,45.7109346 19.9726562,44.5586024 19.9726562,42.8242188 L19.9726562,40.3046875 C19.9726562,39.7578098 19.9238286,39.2714865 19.8261719,38.8457031 C19.7285151,38.4199197 19.5703136,38.0898449 19.3515625,37.8554688 C19.1406239,37.6289051 18.8398457,37.460938 18.4492188,37.3515625 C18.0585918,37.242187 17.6015651,37.1875 17.078125,37.1875 L16,37.1875 L16,34.9492188 L17.078125,34.9492188 C18.1718805,34.9492188 18.9296854,34.7265647 19.3515625,34.28125 C19.7656271,33.8281227 19.9726562,33.0117246 19.9726562,31.8320312 L19.9726562,29.3125 C19.9726562,27.5781163 20.3046842,26.4257841 20.96875,25.8554688 C21.6171907,25.2851534 22.917959,25 24.8710938,25 L26.6289062,25 L26.6289062,27.2265625 L25.1875,27.2265625 C24.3671834,27.2265625 23.8242201,27.3906234 23.5585938,27.71875 C23.2851549,28.0546892 23.1484375,28.7773382 23.1484375,29.8867188 L23.1484375,32.3359375 C23.1484375,33.6250064 22.9570332,34.5312474 22.5742188,35.0546875 C22.1914043,35.5703151 21.5078174,35.9062492 20.5234375,36.0625 C21.5000049,36.2265633 22.1835918,36.5742161 22.5742188,37.1054688 C22.9570332,37.6289089 23.1484375,38.5351498 23.1484375,39.8242188 L23.1484375,42.2265625 C23.1484375,43.3437556 23.2851549,44.074217 23.5585938,44.4179688 C23.8242201,44.7460954 24.3671834,44.9101562 25.1875,44.9101562 L26.6289062,44.9101562 L26.6289062,47.1484375 L24.8710938,47.1484375 Z M46.46875,44.9101562 L47.8867188,44.9101562 C48.6992228,44.9101562 49.2460923,44.7421892 49.5273438,44.40625 C49.8085952,44.0703108 49.9492188,43.3437556 49.9492188,42.2265625 L49.9492188,39.8242188 C49.9492188,38.5351498 50.1406231,37.6289089 50.5234375,37.1054688 C50.7265635,36.8320299 51.0019514,36.6093759 51.3496094,36.4375 C51.6972674,36.2656241 52.1015602,36.1406254 52.5625,36.0625 C51.5703075,35.9062492 50.8906268,35.5703151 50.5234375,35.0546875 C50.1406231,34.5312474 49.9492188,33.6250064 49.9492188,32.3359375 L49.9492188,29.8867188 C49.9492188,28.7929633 49.8125014,28.0742205 49.5390625,27.7304688 C49.3906243,27.5507804 49.1718764,27.4218754 48.8828125,27.34375 C48.5937486,27.2656246 48.2617206,27.2265625 47.8867188,27.2265625 L46.46875,27.2265625 L46.46875,25 L48.2265625,25 C50.1718847,25 51.4687468,25.2851534 52.1171875,25.8554688 C52.7656282,26.4335966 53.0898438,27.5859289 53.0898438,29.3125 L53.0898438,31.8320312 C53.0898438,32.4648469 53.1464838,32.9746074 53.2597656,33.3613281 C53.3730474,33.7480488 53.531249,34.0507802 53.734375,34.2695312 C53.937501,34.4882823 54.2226544,34.6562494 54.5898438,34.7734375 C54.9570331,34.8906256 55.4335908,34.9492188 56.0195312,34.9492188 L57.0976562,34.9492188 L57.0976562,37.1875 L56.0195312,37.1875 C54.9179632,37.1875 54.1562521,37.4140602 53.734375,37.8671875 C53.3046854,38.3203148 53.0898438,39.1328066 53.0898438,40.3046875 L53.0898438,42.8242188 C53.0898438,44.5507899 52.7656282,45.7031221 52.1171875,46.28125 C51.4531217,46.8593779 50.1562596,47.1484375 48.2265625,47.1484375 L46.46875,47.1484375 L46.46875,44.9101562 Z" id="{-}" fill="#FFFFFF"> </path> <path d="M36.5351562,33.1464844 C36.241535,33.1464844 35.9765637,33.092774 35.7402344,32.9853516 C35.5039051,32.8779292 35.3033862,32.7418628 35.1386719,32.5771484 C34.9309885,32.3694651 34.7823898,32.13672 34.6928711,31.8789062 C34.6033524,31.6210925 34.5585938,31.3525405 34.5585938,31.0732422 C34.5585938,30.750975 34.6123042,30.4627291 34.7197266,30.2084961 C34.827149,29.9542631 34.9632153,29.7412118 35.1279297,29.5693359 C35.32129,29.3831371 35.5415027,29.2416997 35.7885742,29.1450195 C36.0356458,29.0483394 36.295246,29 36.5673828,29 C37.1116564,29 37.5807272,29.1897767 37.9746094,29.5693359 C38.1464852,29.7483733 38.2843419,29.9614245 38.3881836,30.2084961 C38.4920253,30.4555676 38.5439453,30.7402328 38.5439453,31.0625 C38.5439453,31.3847672 38.4920253,31.6730131 38.3881836,31.9272461 C38.2843419,32.1814791 38.1464852,32.3981111 37.9746094,32.5771484 C37.795572,32.7490243 37.5825208,32.886881 37.3354492,32.9907227 C37.0883777,33.0945643 36.821616,33.1464844 36.5351562,33.1464844 Z M34,44.3291016 L34.1611328,44.2539062 C34.555015,44.0891919 34.9238264,43.883302 35.2675781,43.6362305 C35.6113298,43.3891589 35.8977853,43.1223973 36.1269531,42.8359375 C36.3346365,42.5781237 36.5065097,42.2791358 36.6425781,41.9389648 C36.7786465,41.5987939 36.8610025,41.2317728 36.8896484,40.8378906 C36.8180335,40.8522136 36.7714845,40.859375 36.75,40.859375 L36.6425781,40.859375 C36.3919258,40.859375 36.1430676,40.8199874 35.8959961,40.7412109 C35.6489245,40.6624345 35.4358733,40.5406909 35.2568359,40.3759766 C35.0706371,40.2112622 34.9327804,40.0125337 34.8432617,39.7797852 C34.753743,39.5470366 34.7089844,39.2874363 34.7089844,39.0009766 C34.7089844,38.4208955 34.9023418,37.9625668 35.2890625,37.6259766 C35.3893234,37.5400386 35.4913732,37.4666344 35.5952148,37.4057617 C35.6990565,37.344889 35.8118483,37.2893883 35.9335938,37.2392578 C36.0338547,37.2034503 36.1484369,37.1748048 36.2773438,37.1533203 C36.4062506,37.1318358 36.5458977,37.1210938 36.6962891,37.1210938 C36.8610034,37.1210938 37.0221346,37.1372069 37.1796875,37.1694336 C37.3372404,37.2016603 37.4876295,37.2571611 37.6308594,37.3359375 C37.9173191,37.4720059 38.1500642,37.6796861 38.3291016,37.9589844 C38.4293625,38.1093758 38.5135088,38.2615552 38.581543,38.4155273 C38.6495772,38.5694995 38.7050779,38.7395824 38.7480469,38.9257812 C38.7981773,39.1119801 38.8339843,39.3089182 38.8554688,39.5166016 C38.8769532,39.7242849 38.8876953,39.9427072 38.8876953,40.171875 C38.8876953,40.8450554 38.7963876,41.4680961 38.6137695,42.0410156 C38.4311514,42.6139352 38.1679705,43.1331357 37.8242188,43.5986328 C37.1581998,44.5224656 36.152025,45.2386042 34.8056641,45.7470703 L34.6552734,45.8007812 L34,44.3291016 Z" id=";" fill="#FFFFFF"> </path> </g> </g></svg>)
    const skillsImg = (<img src={skill} alt="skills"/>);
    const projectImg = (<img src={goal} alt="flag on top of mountain"/>);
    const courseImg = (<img src={book} alt="book"/>);

    const langDesc = "proficient languages";
    const skillsDesc = "skills acquired in the past year";
    const projectDesc = "projects completed in the past year";
    const courseDesc = "books & courses finished in the past year";

    return (
        <Container id={id}>
            <div className='stats'>
                <Row className='align-items-center'>
                    <Col lg="2"></Col>

                    <Col lg="8">
                        <Row>       {/*Title Row*/}
                            <h2>My Work Ethic at a Glance</h2>
                        </Row>
                        <Row>       {/*Stats Row*/}
                            <Col className='align-items-center'>   {/*Col 1*/}
                                <Row className='justify-content-center'>
                                    <StatCard 
                                        img={langImg}
                                        num={langs}
                                        description={langDesc}
                                        popover={langPopover}
                                    />
                                </Row>
                                <Row className="stat-expansion"></Row>
                            </Col>

                            <Col>   {/*Col 2*/}
                                <Row className='justify-content-center'>
                                    <StatCard 
                                        img={skillsImg}
                                        num={skills}
                                        description={skillsDesc}
                                        popover={skillsPopover}
                                    />
                                </Row>
                                <Row className='stat-expansion'></Row>
                            </Col>

                            <Col>   {/*Col 3*/}
                                <Row className='justify-content-center'>
                                    <StatCard
                                        img={projectImg}
                                        num={projects}
                                        description={projectDesc}
                                        popover={projectsPopover}
                                    />
                                </Row>
                                <Row className='justify-content-center'></Row>
                            </Col>

                            <Col>   {/*Col 4*/}
                                <Row className='justify-content-center'>
                                    <StatCard
                                        img={courseImg}
                                        num={courses}
                                        description={courseDesc}
                                        popover={coursesPopover}
                                    />
                                </Row>
                                <Row className='justify-content-center'></Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg="2"></Col>
                </Row>
            </div>
        </Container>
    );
}

export { Stats };