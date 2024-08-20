import React, { useEffect } from 'react';
import './Home.css';
import machine1 from './Figures/Machine1.jpg';
import machine2 from './Figures/Machine2.jpg';
import machine3 from './Figures/Machine3.jpg';
import robot from './Figures/Robot.png';

const Home = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              animateCountUp()
            } else {
              entry.target.classList.remove('show');
            }
          });
        }, {
          threshold: 0.1
        });
    
        const elements = document.querySelectorAll('.hidden');
        elements.forEach(element => observer.observe(element));
        
        const left = document.getElementById("left-side");
        const handleMove = e => {
        left.style.width = `${e.clientX / window.innerWidth * 100}%`;
        }
        document.onmousemove = e => handleMove(e);
        document.ontouchmove = e => handleMove(e.touches[0]);


        const subtitle = document.getElementsByClassName("card-subtitle")[0];
        const createWord = (text, index) => {
            const word = document.createElement("span");
            
            word.innerHTML = `${text} `;
            
            word.classList.add("card-subtitle-word");
            
            word.style.transitionDelay = `${index * 40}ms`;
            
            return word;
        }
        const addWord = (text, index) => subtitle.appendChild(createWord(text, index));
        const createSubtitle = text => text.split(" ").map(addWord);
        createSubtitle("But in a much more real sense, I have no idea what I'm doing.");


        function animateCountUp() {
            const counters = document.querySelectorAll('.fact h3');
            const duration = 10000; // Duration in milliseconds
            let cum_inc = 0;
        
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const start = 0;
                let increment = target / (duration / 16); // Calculate increment as a number
                
                const updateCount = () => {
                    const currentValue = +counter.innerText.replace(/,/g, ''); // Remove commas if any
                    cum_inc += increment;
        
                    // Handle cumulative increment and ensure it increases at least by 1
                    let newValue = currentValue;
                    if (cum_inc >= 1) {
                        newValue += Math.floor(cum_inc);
                        cum_inc -= Math.floor(cum_inc);
                    }
        
                    if (newValue < target) {
                        counter.innerText = Math.ceil(newValue).toLocaleString();
                        setTimeout(updateCount, 16); // Approximately 60 frames per second
                    } else {
                        counter.innerText = target.toLocaleString(); // Ensure the target value is reached exactly
                    }
                };
        
                updateCount();
            });
        }

        }, []);

    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h1>Precision Machining Excellence Since 2000</h1>
                    <p>Your trusted partner in automobile and engineering component manufacturing</p>
                    <a href="#contact" className="cta-button">Get a Quote</a>
                </div>
            </section>

            <section className="overview ">
                <div className="about">
                    <div className="about-content hidden">
                        <h2>About PRECI-COM CNC</h2>
                        <p>Established in 2000, PRECI-COM CNC is a leading manufacturer of precision machined automobile and engineering components. Located in Chennai, India, we operate with state-of-the-art CNC machines and a team of 90+ skilled employees working round the clock.</p>
                    </div>
                </div>
                <div className="mission-vision">
                    <div className="mouse-move-icon">
                        <div className="icon-arrow-left"></div>
                        <div className="icon-arrow-right"></div>
                    </div>
                    <div id="left-side" className="side hidden">
                        <div className="mv">
                            <h2>Our <span className="fancy">Mission</span></h2>
                            <p>To be the most preferred partner for precision machined parts and sub-assemblies, providing machining solutions for complex engineering parts and meaningful work opportunities for our employees.</p>
                        </div>
                    </div>
                    <div id="right-side" className="side hidden">
                        <div className="mv">
                            <h2>Our <span className="fancy">Vision</span></h2>
                            <p>To be a world-class machining solutions provider through innovation and technology, sensitive to our community and the environment, with a committed team of high-performance employees.</p>
                        </div>
                    </div>
                </div>
                    <div className="key-facts">
                    <div className="fact hidden">
                        <h3 data-target="24">0</h3>
                        <p>Years of Excellence</p>
                    </div>
                    <div className="fact hidden">
                        <h3 data-target="90">0</h3>
                        <p>Skilled Workforce</p>
                    </div>
                    <div className="fact hidden">
                        <h3 data-target="2400000">0</h3>
                        <p>Parts Manufactured per Year</p>
                    </div>
                    <div className="fact hidden">
                        <h3 data-target="1100">0</h3>
                        <p>Manufacturing Area (m²)</p>
                    </div>
                    <div className="fact hidden">
                        <h3 data-target="40">0</h3>
                        <p>CNC Machines</p>
                    </div>
                    <div className="fact hidden">
                        <h3 data-target="30">0</h3>
                        <p>Renewable Energy</p>
                    </div>
                </div>

                
            </section>

            <section className="why-choose-us">
                <h2>Why Choose PRECI-COM CNC?</h2>
                {/* <div className="reasons">
                    <div className="reason">
                        <h3>Cutting-Edge Technology</h3>
                        <p>Our facility is equipped with advanced CNC machines and robotic systems. And Our operations are controlled and monitored by an ERP software.</p>
                    </div>
                    <div className="reason">
                        <h3>Quality Assurance</h3>
                        <p>ISO 9001:2015 & IATF16949 certified, ensuring top-notch quality.</p>
                    </div>
                    <div className="reason">
                        <h3>Diverse Capabilities</h3>
                        <p>Expertise in machining various materials including Steel, Aluminum, and Stainless steel.</p>
                    </div>
                </div> */}

                <div class="why-choose-us-container hidden">
                    <div class="card">
                        <div class="card-content">
                            <h3 class="card-title">Cutting-Edge Technology</h3>
                            <h4 class="card-subtitle"></h4>
                        </div>
                        <i class="fa-solid fa-hat-witch card-icon"></i>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <h3 class="card-title">Quality Assurance</h3>
                            <h4 class="card-subtitle"></h4>
                        </div>
                        <i class="fa-solid fa-hat-witch card-icon"></i>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <h3 class="card-title">Diverse Capabilities</h3>
                            <h4 class="card-subtitle"></h4>
                        </div>
                        <i class="fa-solid fa-hat-witch card-icon"></i>
                    </div>
                </div>
            </section>

            <section className="timeline hidden">
                <h2>Our Journey</h2>
                <div className="timeline-container">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>2000</h3>
                            <p>PRECI-COM CNC established</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>2003</h3>
                            <p>ISO 9001-2000 Certification obtained</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>2016</h3>
                            <p>IATF16949-2009 & ISO9001-2015 Certification</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>2023</h3>
                            <p>Best Supplier Award from Super Auto Forge Ltd</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gallery hidden">
                <h2>Our Facility</h2>
                <div className="gallery-container">
                    <div className="g-card">
                        <img src={machine1} alt="CNC Machine" />
                        <div className="g-card-content">
                            <h3>Advanced CNC Machines</h3>
                        </div>
                    </div>
                    <div className="g-card">
                        <img src={machine2} alt="VMC Machine" />
                        <div className="g-card-content">
                            <h3>Vertical Machining Centers</h3>
                        </div>
                    </div>
                    <div className="g-card">
                        <img src={robot} alt="Robotic System" />
                        <div className="g-card-content">
                            <h3>Robotic Automation</h3>
                        </div>
                    </div>
                    <div className="g-card">
                        <img src={machine3} alt="Quality Control" />
                        <div className="g-card-content">
                            <h3>Quality Control Equipment</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="clients hidden">
                <h2>Our Esteemed Clients</h2>
                <div className="client-logos">
                    <img src="./Figures/client1.png" alt="GE T & D INDIA LTD" />
                    <img src="./Figures/client2.png" alt="GATES UNITTA INDIA COMPANY PVT LTD" />
                    <img src="./Figures/client3.png" alt="SUPER AUTO FORGE LTD" />
                    <img src="./Figures/client4.png" alt="USUI SUSIRA INTERNATIONAL PVT LTD" />
                    <img src="./Figures/client5.png" alt="WOOSU AUTOMOTIVE INDIA PVT LTD" />
                </div>
            </section>

            <section className="contact-form hidden" id="contact">
                <h2>Get in Touch</h2>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>

            <section className="contact-info hidden">
                <h2>Contact Information</h2>
                <p>Email: info@precicomcnc.com</p>
                <p>Phone: +91 9841407398</p>
                <p>Address: K–19, 9th Street, South Phase, Ambattur Industrial Estate, Chennai – 600 058, Tamil Nadu, India</p>
            </section>
        </main>
    );
}

export default Home;