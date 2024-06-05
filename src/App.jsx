import * as React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

import { Header } from './Header';
import { Thumbnail } from './Thumbnail';

const App = () => {
  const aboutMe = "I'm a passionate programmer with an insatiable desire to learn!"
  return (
    <div className="container">
      <Header 
        bgColor = "#0C359E"
        fontColor = "#F6F5F5"
        heading = "Hi, I'm Clarissa!"
        subHeading = "Software Developer"
        text = {aboutMe}
      />
    </div>
  )
};

export default App;