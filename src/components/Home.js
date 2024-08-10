import React, { useEffect } from 'react';
import './Home.css';
import logo from './Figures/logo.png';
import machine1 from './Figures/Machine1.jpg';
import machine2 from './Figures/Machine2.jpg';
import machine3 from './Figures/Machine3.jpg';
import robot from './Figures/Robot.png';
import plant from './Figures/Plant.jpg';

const Home = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        }, {
          threshold: 0.1
        });
    
        const elements = document.querySelectorAll('.hidden');
        elements.forEach(element => observer.observe(element));
    }, []);

    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to PRECI-COM CNC</h1>
                    <p>Your trusted partner in automobile parts manufacturing.</p>
                </div>
            </section>
            <section className="overview hidden">
                <h2>About Us</h2>
                <p>PRECI-COM CNC established in the year 2000. We manufacture precision machined automobile and engineering components with state-of-the-art CNC machines.</p>
                <p>The company is located in Chennai, India, and has around 90 employees working in two shifts.</p>
            </section>
            <section className="mission hidden">
                <h2>Our Mission</h2>
                <p>To be the most preferred partner for precision machined parts and sub-assemblies.</p>
            </section>
            <section className="vision hidden">
                <h2>Our Vision</h2>
                <p>To be a world-class machining solutions provider through innovation and technology.</p>
            </section>
            <section className="gallery hidden">
                <h2>Gallery</h2>
                <div className="gallery-container">
                    <div className="card">
                        <img src={machine1} alt="Machine 1" />
                        <div className="card-content">
                            <h3>Machine 1</h3>
                        </div>
                    </div>
                    <div className="card">
                        <img src={machine2} alt="Machine 2" />
                        <div className="card-content">
                            <h3>Machine 2</h3>
                        </div>
                    </div>
                    <div className="card">
                        <img src={robot} alt="Robot" />
                        <div className="card-content">
                            <h3>Robot</h3>
                        </div>
                    </div>
                    <div className="card">
                        <img src={machine3} alt="Machine 3" />
                        <div className="card-content">
                            <h3>Machine 3</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="future" id="future">
                <h2>Forging Ahead into the Future</h2>
                <div className="statistics">
                <div className="stat">
                    <h3>5</h3>
                    <p>Large Manufacturing Plants</p>
                </div>
                <div className="stat">
                    <h3>3</h3>
                    <p>Global Offices</p>
                </div>
                <div className="stat">
                    <h3>1800</h3>
                    <p>Team Members</p>
                </div>
                <div className="stat">
                    <h3>24000</h3>
                    <p>Tons of Steel Forged</p>
                </div>
                <div className="stat">
                    <h3>8000</h3>
                    <p>Tons of Aluminum Forged</p>
                </div>
                <div className="stat">
                    <h3>60%</h3>
                    <p>Renewable Energy</p>
                </div>
                </div>
            </section>

            <section className="clients" id="clients">
                <h2>Our Esteemed Clients</h2>
                <div className="client-logos">
                <img src="./Figures/client1.png" alt="Client 1" />
                <img src="./Figures/client2.png" alt="Client 2" />
                <img src="./Figures/client3.png" alt="Client 3" />
                <img src="./Figures/client4.png" alt="Client 4" />
                </div>
            </section>
            <section className="contact-info hidden">
                <h2>Contact Information</h2>
                <p>Email: info@precicomcnc.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Auto Parts Blvd, Industry City, Country</p>
            </section>
        </main>
    );
}

export default Home;
