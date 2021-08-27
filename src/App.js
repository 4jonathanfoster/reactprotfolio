import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        
    <header>
        <h1>Jonathan Foster</h1>

        <ul>
            <li><a href = "#about-me">About Me</a></li>
            <li><a href = "#work">Work</a></li>
            <li><a href = "#contact-me">Contact Me</a></li>
            <li><a href = "./assets/photos/Resume.pdf">Resume</a></li>
            <li><a href = "https://www.linkedin.com/in/jonathan-foster-b0999990/">linkedin</a></li>
            
        
        </ul>
    </header>

    <main>
        <div>
            <h1>Welcome To My Page!</h1>
        </div>

        <section className="about-me" id="about-me">
            <h1>About Me</h1>

            <div>
                <p>
                   I have always had an intrest in computers and a desire to work in the tech feild. Going to a Univerty of Texas Coding Bootcamp was the best desion i ever made! Having strong communication, leadership, and technical background this feild is perfect for me. I am driven by roles that will leverage my strengths in a DevOps while working in team settings 
                </p>
            </div>
        </section>

        <section className = "work" id = "work">
            <h1>Work</h1>

            <div className = 'project-cards'>

                <div className="project-card" id = "main-card">
                    <a href = "https://4jonathanfoster.github.io/JGF-Code-Refactor/">
                    <img src = "./assets/photos/horiseon-refactor.png" />
                    </a>
                    <div>
                        <h3>Code Refactoring</h3>
                        <p>HTML/CSS</p>
                    </div>
                </div>

                <div className="project-card">
                    <a href = "https://4jonathanfoster.github.io/Weather-API/">
                    <img src = "./assets/photos/weather.png "/>
                </a>
                    <div>
                        <h3>Weather Dashboard</h3>
                        <p>Api</p>
                    </div>
                </div>

                <div className="project-card">
                    <a href = "https://4jonathanfoster.github.io/Quiz-Master/">
                        <img src = "./assets/photos/Quiz.png"/>
                        </a>
                    <div>
                        <h3>Work Day Scheduler</h3>
                        <p>JS/Local Storage</p>
                    </div>
                </div>

                <div className="project-card"> 
                    <a href = "https://4jonathanfoster.github.io/TopTourist/">
                            <img src = "./assets/photos/TopTourist.png"/>
                                </a>
                            <div>
                                <h3>Top Tourist</h3>
                                <p>Project One</p>
                    </div>
                </div>

                <div className="project-card">
                    <a href = "https://4jonathanfoster.github.io/meet-up/">
                        <img src = "./assets/photos/meetup.png" />
                        </a>
                        <div>
                            <h3>Meet up  </h3>
                            <p>Project Two</p>
                    </div>
                </div>

            </div>
        </section>

        <section className="contact-me" id = "contact-me">
            <h1>Contact Me</h1>
            <ul>
                <li>210-630-1120</li>
                <li><a href = "mailto:4jonathanfoster@gmail.com.com">4jonathanfoster@gmail.com</a></li>
                <li><a href = "https://github.com/4jonathanfoster">Github</a></li>

                
            </ul>
        </section>
    </main>

    <footer>
        <p>Made by Jonathan Foster</p>
    </footer>
    </div>
  );
}

export default App;
