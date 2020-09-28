import React from 'react';

// Styles
import './AboutMe.scss'

const AboutMe = () => {
    return (
        <section className="AboutMe">
            <div className="container">
                <div className="AboutMe__block AboutMe__header">
                    <h1 className="AboutMe__name">Ilya Oleynik</h1>
                    <ul className="AboutMe__headList">
                        <li className="AboutMe__headItem">
                            <p>Phone:</p>
                            <a href="tel:380 954 660 090">+380 954 660 090</a>
                        </li>
                        <li className="AboutMe__headItem">
                            <p>Email:</p>
                            <span>illiaoliynik@gmail.com</span>
                        </li>
                        <li className="AboutMe__headItem">
                            <p>GitHub:</p>
                            <a href="https://github.com/ilya-maker">ilya-maker</a>
                        </li>
                    </ul>
                </div>
                <div className="AboutMe__block AboutMe__summary">
                    <p className="AboutMe__title">
                        Summary
                    </p>
                    <p className="AboutMe___text">
                        I am a responsible, reliable, initiative, and hard-working developer looking for new opportunities in
                        Front-End. Moreover, I am a positive and proactive person, well organized, and capable to adapt to
                        different teams. I enjoy seeing the tangible results of my work and always do my best to find the
                        best and fastest solution to solve some problems.
                        I have good knowledge of React, React Native, JavaScript stack.
                        Also, I have more than 100 solved algorithmic tasks on Codewars and more than 70 training
                        projects on GitHub. I would be very happy to join a team of developers to be useful to achieve
                        common goals.
                    </p>
                </div>
                <div className="AboutMe__block AboutMe__skills">
                    <p className="AboutMe__title">
                        Skills and competences
                    </p>
                    <div className="AboutMe__list--container">
                        <div className="AboutMe__firstSkills">
                            <p className="AboutMe__titleList">
                                Front-end developer:
                            </p>
                            <ul className="AboutMe__list">
                                <li className="AboutMe__item">
                                    JS, JSX, ES6+, ESLint
                                </li>
                                <li className="AboutMe__item">
                                    HTML5, CSS3
                                </li>
                                <li className="AboutMe__item">
                                    React, React Native
                                </li>
                                <li className="AboutMe__item">
                                    Redux
                                </li>
                                <li className="AboutMe__item">
                                    TypeScript                    
                                </li>
                                <li className="AboutMe__item">
                                    Sass (SCSS), Less                    
                                </li>
                                <li className="AboutMe__item">
                                    BEM                    
                                </li>
                                <li className="AboutMe__item">
                                    JSON, Ajax
                                </li>
                                <li className="AboutMe__item">
                                    Git
                                </li>
                            </ul>
                        </div>
                        <div className="AboutMe__secondSkills">
                        <p className="AboutMe__titleList">
                            Different applications: 
                        </p>
                        <ul className="AboutMe__list">
                            <li className="AboutMe__item">
                                C#, C++, Assembler
                            </li>
                        </ul>

                        <p className="AboutMe__titleList">
                            Soft skills:
                        </p>
                        <ul className="AboutMe__list">
                            <li className="AboutMe__item">
                                Hardworking person
                            </li>
                            <li className="AboutMe__item">
                                Good communication
                            </li>
                            <li className="AboutMe__item">
                                Desire to develop
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="AboutMe__block AboutMe__skills">
                    <p className="AboutMe__title">
                        Education
                    </p>
                    <ul className="AboutMe__list">
                        <li className="AboutMe__item">
                            Bachelor’s degree: “Dnipro University of Railway Transport”, Faculty of Software Engineering, Dnipro                        </li>
                        <li className="AboutMe__item">
                            Frontend course: Full time, every weekday, 4 months
                        </li>
                        <li className="AboutMe__item">
                            Book: Fullstack react native Devin Abbot
                        </li>
                        <li className="AboutMe__item">
                            Freecodecamp.org: completed most of the courses
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;