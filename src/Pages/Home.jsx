import React, { useState } from 'react';
import Text from '../Components/Text';
import Button from '../Components/Button';
import ClickableText from '../Components/ClickableText';

import './Home.css'
import Typist from 'react-typist';

function Home() {
    // Constant for the choices made by user
    const MAIN = "main";
    const PROJECT = "project";
    const EXPERIENCE = "experience";
    const MAIN2 = "main2";
    const ABOUT = "about";
    const CONTACT = "contact";

    const [choice, setChoice] = useState(MAIN);

    if (choice === MAIN) {
        return (
            <div className="parent-container">
                <Typist key={1} avgTypingDelay={40}>
                    <div className="paragraph">

                        <Text>Hi,</Text>
                        <Text>Welcome to my online portofolio, in this section you can choose what do you want to know about me.</Text>
                        <Text>You can choose it with the button below, have fun exploring about me :)</Text>
                    </div>
                    <div className="choice">
                        <Button onClick={() => setChoice(ABOUT)} >About Me</Button>
                        <Button onClick={() => setChoice(PROJECT)} >My Projects</Button>
                        <Button onClick={() => setChoice(EXPERIENCE)} >My Experience</Button>
                        <Button onClick={() => setChoice(CONTACT)} >My Contact</Button>
                    </div>
                </Typist>
            </div>
        )
    }
    else if (choice === PROJECT) {
        return (
            <div className="parent-container">
                <Typist key={2} avgTypingDelay={40}>
                    <div className="paragraph">
                        <Text>Here are my projects:</Text>
                        <ClickableText link="http://mahimahi.herokuapp.com/main/">MAHIMAHI - Food Recommender</ClickableText>
                        <Text>A Web based food recommender system using user based collaborative filtering. The project's target audience are the students of University of Indonesia that majoring in Computer Science.</Text>
                        <br />
                        <ClickableText link="https://chillnema.net">Chillnema - Streaming Website</ClickableText>
                        <Text>A proof-of-concept on-demand streaming website. Built with Golang as its backend and ReactJS as its frontend. User can watch videos that is stored on S3, while admin can add film using an API.</Text>
                        <br />
                        <ClickableText link="https://ezza-ardiala.itch.io/castle-panic">Castle Panic - Simple 2D Platformer</ClickableText>
                        <Text>A simple platforming game made using Godot Engine. Player must control the creature so he can escape the castle using keyboard and mouse.</Text>
                        <br />
                        <Text>Is there anything else that you wanna know?</Text>
                    </div>
                    <div className="choice">
                        <Button onClick={() => setChoice(ABOUT)} >About Me</Button>
                        <Button onClick={() => setChoice(EXPERIENCE)} >My Experience</Button>
                        <Button onClick={() => setChoice(CONTACT)} >My Contact</Button>
                        <Button onClick={() => setChoice(MAIN2)} >That's All</Button>
                    </div>
                </Typist>
            </div>

        )
    }
    else if (choice === EXPERIENCE) {
        return (
            <div className="parent-container">
                <Typist key={3} avgTypingDelay={40}>
                    <div className="paragraph">
                        <Text>Here are my experiences :</Text>
                        <Text>PT. GO Online Destination - Finance Intern</Text>
                        <Text>Responsible for processing highly sensitive business data and analyzing on Excel. Learned to be thorough when analyzing the data and learned to communicate to other team member and superior officers.</Text>
                        <br />
                        <Text>PT. Tokopedia - Test Engineer Intern</Text>
                        <Text>Tasked with creating a dashboard  that unified all of Tokopedia's data that  is stored and displayed on other dashboard that they used (eg. Datadog, Fabric, Prometheus)</Text>
                        <br />
                        <Text>Is there anything else that you wanna know</Text>
                    </div>
                    <div className="choice">
                        <Button onClick={() => setChoice(ABOUT)} >About Me</Button>
                        <Button onClick={() => setChoice(PROJECT)} >My Project</Button>
                        <Button onClick={() => setChoice(CONTACT)} >My Contact</Button>
                        <Button onClick={() => setChoice(MAIN2)} >That's All</Button>
                    </div>
                </Typist>
            </div>
        )
    }
    else if (choice === MAIN2) {
        return (
            <div className="parent-container">
                <Typist key={6} avgTypingDelay={40}>
                    <div className="paragraph">
                        <Text>Thank you for visiting my site</Text>
                        <br/>
                        <Text>If you still need more info, you can download the PDF version <span><ClickableText link="https://drive.google.com/file/d/1_818LLwLRBzFIoSyXmAT89HPrPnlmrzR/view?usp=sharing">here</ClickableText></span></Text>
                        <br/>
                        <Text>And if you like the site, you can also fork it <span><ClickableText link="https://github.com/MieGorenk/portofolio">here</ClickableText></span></Text>
                    </div>
                    <div className="choice">
                        <Button onClick={() => setChoice(PROJECT)} p="My Projects" />
                    </div>
                </Typist>
            </div>
        )
    }
    else if (choice === ABOUT) {
        return (
            <div className="parent-container">
                <Typist key={4} avgTypingDelay={40}>
                    <div className="paragraph">
                        <Text>A student that is eager to learn many things to have a successful career becoming a developer. Have a good understanding on the foundation of computer science. Seeking work in a team environment to minimize my introverted habit.</Text>
                        <br />
                        <Text>Is there anything else you wanna know?</Text>
                    </div>
                    <div className="choice">
                        <Button onClick={() => setChoice(PROJECT)} >My Project</Button>
                        <Button onClick={() => setChoice(EXPERIENCE)} >My Experience</Button>
                        <Button onClick={() => setChoice(CONTACT)} >My Contact</Button>
                        <Button onClick={() => setChoice(MAIN2)} >That's All</Button>
                    </div>
                </Typist>
            </div>
        )
    }
    else if (choice === CONTACT) {
        return (
            <div className="parent-container">
                <Typist key={5} avgTypingDelay={40}>
                    <div className="paragraph">
                        <Text>You can find or contact me using the information below:</Text>
                        <br />
                        <Text>+62 857 1818 7896</Text>
                        <Text>ezzaardiala@gmail.com</Text>
                        <ClickableText link="https://github.com/MieGorenk">Github</ClickableText>
                        <br/>
                        <ClickableText link="https://gitlab.com/ezza11">Gitlab</ClickableText>
                        <br/>
                        <ClickableText link="https://www.linkedin.com/in/ezza-ardiala-0b8004155/">LinkedIn</ClickableText>
                        <br />
                        <Text>Is there anything else you wanna know?</Text>
                    </div>
                    <div className="choice">
                        <Button onClick={() => setChoice(ABOUT)} >About Me</Button>
                        <Button onClick={() => setChoice(EXPERIENCE)} >My Experience</Button>
                        <Button onClick={() => setChoice(PROJECT)} >My Project</Button>
                        <Button onClick={() => setChoice(MAIN2)} >That's All</Button>
                    </div>
                </Typist>
            </div>
        )
    }
    // Error
    else {
        return (
            <div className="parent-container">
                <div className="paragraph">
                    <Text>Whoops, it seems we encountered an error</Text>
                </div>
                <div className="choice">
                    <Button onClick={() => setChoice(MAIN)} p="RESTART" />
                </div>
            </div>
        )
    }
}

export default Home