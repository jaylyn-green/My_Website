document.addEventListener('DOMContentLoaded', () => {
    const displayContainer = document.getElementById('display');

    const content = {
        home: `
            <h2>About Me</h2>
            <p>Detailed information about yourself...</p>
        `,
        experience: {
            "Teacher's assistant": `
            <div class="exp-description">    
                <h3>Teacher's <span style=color:var(--color-purple)>Assitant</span> <span style="color:var(--color-orange)">@Georgia Southwestern Univeristy</span></h3>
                <p>August <span style=color:var(--color-green)>2023</span> - December 2023</p>
                <ul>
                    <li>Teaching <span style=color:var(--color-blue)>assitant</span> for entry level programming classes</li>
                    <li>Helped fellow students understand the basics of <span style=color:var(--color-green)>programming</span> principles</li>
                    <li><span style=color:var(--color-orange)>Tutored</span> those who needed an extra push</li>
                </ul>
            </div>
            `,
            "Freelance Data Annotater": `
            <div class = "exp-description">    
                <h3>Freelance Data <span style=color:var(--color-green)>Annotater</span> <span style="color:var(--color-orange)">@DataAnnotation.tech</span></h3>
                <p>May <span style=color:var(--color-orange)>2024</span> - <span style=color:var(--color-blue)>Present</span></p>
                <ul>
                <li>Labeled and <span style=color:var(--color-purple)>annotated</span> large datasets for machine learning and AI training.</li>
                <li>Utilized programming languages (Python, <span style=color:var(--color-blue)>JavaScript</span>, HTML, C++, C#, SQL) to solve <span style=color:var(--color-purple)>coding</span> problems and complete projects.</li>
                <li>Worked on various projects involving data <span style=color:var(--color-green)>collection</span>, AI model training, and data categorization.</li>
                <li>Maintained high accuracy and attention to <span style=color:var(--color-green)>detail</span>, ensuring the quality of annotated data.</li>
                <li>Successfully managed <span style=color:var(--color-purple)>multiple</span> projects with varying deadlines in a remote, <span style=color:var(--color-orange)>flexible</span> work environment.</li>
            </div>
            `
        },
        projects: {
            'FitnessTracker': `
            <div class="project-desc">    
                    <h2 style="color:var(--color-green)">FitnessTracker</h2>
                    <button type="button" onclick="window.open('https://github.com/jaylyn-green/fitness_tracker_fullstack', '_blank')">Github</button>
                <p>
                    <span style = "color:var(--color-orange)">Developed</span> a full-stack fitness tracking application for runners using the <span style="color: var(--color-blue);">MERN</span> stack (MongoDB, Express, ReactJS, Node.js). Designed a secure back-end API with Node.js and <span style="colorLvar(--color-blue)">Express</span> to manage running data, integrating it with a MongoDB <span style="color: var(--color-orange);">database</span>. Built an <span style="color:var(--color-blue)">interactive</span> front-end user interface with ReactJS, enabling users to log and <span style="color: var(--color-green);">track</span> runs effortlessly. Implemented key features such as adding, <span style ="color: var(--color-orange)">managing</span>, and analyzing metrics like <span style="color: var(--color-purple);">distance</span>, time, and pace. <span style=color:var(--color-green)>Ensured</span> seamless integration between front-end and backend components to deliver a smooth and intuitive <span style="color: var(--color-blue);">experience</span>.
                <p>      
                    <div class = img-container>
                        <img src="./pics/run_app1.png">                  
                    </div>
                    <div class = img-container>
                        <img src="./pics/run_app2.png">    
                    </div>
                    <div class = img-container>
                        <img src="./pics/run_app3.png">                    
                    </div>
                <h3>Technologies used:</h3>
                <ul class="tech-stack">
                    <li><img src="./svgs/react.svg" alt="React" class="svg">React</li>
                    <li><img src="./svgs/nodejs.svg" alt="Node.js" class="svg">Node.JS</li>
                    <li><img src="./svgs/express.svg" alt="Express.js" class="svg">Express</li>
                    <li><img src="./svgs/db.svg" alt="Database" class="svg">MongoDB</li>
                </ul>
            </div>
            `,
            'CityUpdate': `
            <div class="project-desc">    
            <h2 style="color:var(--color-blue)">CityUpdate</h2>
             <button type="button" onclick="window.open('https://github.com/jaylyn-green/CityUpdate', '_blank')">Github</button>
                <p>
                    The <span style="color: var(--color-blue);">City Infrastructure Tracker</span> is a web application that allows users to manage and visualize city projects, such as <span style="color: var(--color-orange);">roadwork</span> or <span style="color: var(--color-green);">construction</span>, on an interactive <span style="color: var(--color-purple);">Google Map</span>. Users can register projects by submitting details like <span style="color: var(--color-purple);">type</span>, location, status, and impact through a form, with the data stored in a backend <span style="color: var(--color-orange);">database</span>. The map dynamically displays <span style="color: var(--color-blue);">markers</span> for each project, which users can click to view detailed information or delete to remove the project from both the map and the backend. The application ensures <span style="color: var(--color-green);">real-time updates</span> to markers while maintaining a seamless map interaction experience. Built with <span style="color: var(--color-purple);">React</span>, <span style="color: var(--color-blue);">Google Maps API</span>, and a RESTful backend, it provides an efficient way to track and manage infrastructure projects.
                </p>

                <div class=img-container>
                    <img src="./pics/city_update.png">
                </div>
                <h3>Technologies used:</h3>
                <ul class="tech-stack">
                    <li><img src="./svgs/react.svg" alt="React" class="svg">React</li>
                    <li><img src="./svgs/nodejs.svg" alt="Node.js" class="svg">Node.JS</li>
                    <li><img src="./svgs/express.svg" alt="Express.js" class="svg">Express</li>
                    <li><img src="./svgs/db.svg" alt="Database" class="svg">MongoDB</li>
                </ul>
            </div>
`,
            'ChatApp': `
            <div class="project-desc">    
                <h2 style="color:var(--color-purple)">ChatApp</h2>
             <button type="button" onclick="window.open('https://github.com/jaylyn-green/ChatApp', '_blank')">Github</button>
                <p><span style="color:var(--color-green)">Created</span> a real-time messaging application with robust communication features. Work in progress...</p>
                <h3>Technologies used:</h3>
                <ul class="tech-stack">
                    <li><img src="./svgs/react.svg" alt="React" class="svg">React</li>
                    <li><img src="./svgs/nodejs.svg" alt="Node.js" class="svg">Node.JS</li>
                    <li><img src="./svgs/express.svg" alt="Express.js" class="svg">Express</li>
                    <li><img src="./svgs/db.svg" alt="Database" class="svg">MongoDB</li>
                    <li><img src="./svgs/socket.svg" alt="Socket.io" class="svg">Socket.io</li>
                </ul>
            </div>
`
        },
        skills: {
            'Java': `
                <h2><span style="color: var(--color-orange)">Java</span></h2>
                <div class="skill-details">
                    <p>Developed <span style="color:var(--color-purple)">object-oriented</span> applications with <span style="color: var(--color-orange)">Java</span> concepts including but not limited to:</p>
                    <ul>
                        <li>Inheritance and Polymorphism</li>
                        <li>Exception Handling</li>
                        <li>Multithreading</li>
                        <li>Collections Framework</li>
                    </ul>
                </div>
            `,
            'Python': `
                <h2 style="color:var(--color-green)">Python</h2>
                <div class="skill-details">
                    <p><span style = "color:var(--color-blue)">Specialized</span> in:</p>
                    <ul>
                        <li>Data Analysis</li>
                        <li>Machine Learning Libraries (Pandas, NumPy)</li>
                        <li>Web Scraping</li>
                        <li>Automation Scripts</li>
                    </ul>
                    <h3>Frameworks & <span style="color:var(--color-pruple)"Libraries</span>:</h3>
                    <ul>
                        <li>Django</li>
                        <li>Flask</li>
                    </ul>
                </div>
            `,
            'JavaScript': `
                <h2 style="color:var(--color-orange)">JavaScript</h2>
                <div class="skill-details">
                    <p>Proficient in modern <span style="color:var(--color-orange)">JavaScript</span> development:</p>
                    <ul>
                        <li>ES6+ Features</li>
                        <li>Async Programming</li>
                        <li>DOM Manipulation</li>
                        <li>Event-Driven Programming</li>
                    </ul>
                    <h3>Frameworks & <span style="color:var(--color-green)">Libraries</span>:</h3>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>jQuery</li>
                    </ul>
                </div>
            `,
            'Html': `
                <h2 style="color:var(--color-purple)">HTML</h2>
                <div class="skill-details">
                    <p>Semantic <span style="color:var(--color-purple)">HTML5</span> development with <span style="color:var(--color-blue)">focus</span> on:</p>
                    <ul>
                        <li>Accessibility</li>
                        <li>Responsive Design</li>
                        <li>SEO Optimization</li>
                        <li>Form Design</li>
                    </ul>
                </div>
            `,
            'CSS': `
                <h2 style="color:var(--color-blue)">CSS</h2>
                <div class="skill-details">
                    <p><span style="color:var(--color-orange)">Advanced</span> styling techniques:</p>
                    <ul>
                        <li>Flexbox & Grid Layouts</li>
                        <li>CSS Variables</li>
                        <li>Media Queries</li>
                        <li>Animations & Transitions</li>
                    </ul>
                    <h3><span style="color:var(--color-green)">Frameworks</span>:</h3>
                    <ul>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            `,
            'Git': `
                <h2 style="color:var(--color-green)">Git</h2>
                <div class="skill-details">
                    <p>Version <span style="color:var(--color-purple)">Control</span> & <span style="color:var(--color-blue)">Collaboration</span> Skills:</p>
                    <ul>
                        <li>Branch Management</li>
                        <li>Merge Conflicts Resolution</li>
                        <li>Pull Request Workflows</li>
                        <li>Repository Management</li>
                    </ul>
                    <h3><span style="color:var(--color-purple)">Platforms</span>:</h3>
                    <ul>
                        <li>GitHub</li>
                        <li>GitLab</li>
                        <li>Bitbucket</li>
                    </ul>
                </div>
            `,
            'Node.JS': `
                <h2 style="color:var(--color-blue)">Node.js</h2>
                <div class="skill-details">
                    <p><span style="color:var(--color-purple)">Backend</span> Development Capabilities:</p>
                    <ul>
                        <li>RESTful API Development</li>
                        <li>Server-Side Rendering</li>
                        <li>Middleware Implementation</li>
                        <li>NPM Package Management</li>
                    </ul>
                </div>
            `,
            'React': `
                <h2 style="color:var(--color-orange)">React</h2>
                <div class="skill-details">
                    <p>Modern React <span style="color:var(--color-green)">development</span> expertise:</p>
                    <ul>
                        <li>Component-Based Architecture</li>
                        <li>React Hooks</li>
                        <li>State Management</li>
                        <li>React Router</li>
                    </ul>
                    <h3>Key <span style="color:var(--color-blue)">strengths</span>:</h3>
                    <ul>
                        <li>Performance Optimization</li>
                        <li>Functional Component Design</li>
                        <li>Context API Usage</li>
                        <li>Responsive Web Applications</li>
                    </ul>
                </div>
`,
            'SQL': `
                <h2 style="color:var(--color-purple)">SQL</h2>
                <div class="skill-details">
                    <p>Database <span style=color:var(--color-green)>design</span> and query  <span style=color:var(--color-blue)>optimization</span>:</p>
                    <ul>
                        <li>Complex Query Writing</li>
                        <li>Database Schema Design</li>
                        <li>Joins and Subqueries</li>
                        <li>Stored Procedures</li>
                    </ul>
                    <h3>Database <span style=color:var(--color-orange)>systems</span>:</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>SQLite</li>
                        <li>Query Performance Tuning</li>
                    </ul>
                </div>
`,
            'TypeScript': `
                <h2 style="color:var(--color-blue)">TypeScript</h2>
                <div class="skill-details">
                    <p>Strong typing and <span style=color:var(--color-green)>enhanced</span> JavaScript development:</p>
                    <ul>
                        <li>Type Definitions</li>
                        <li>Generics</li>
                        <li>Interfaces and Type Aliases</li>
                        <li>Compile-Time Type Checking</li>
                    </ul>
                    <h3>Integration <span style=color:var(--color-purple)>experience</span>:</h3>
                    <ul>
                        <li>React with TypeScript</li>
                        <li>Node.js Type Definitions</li>
                        <li>Advanced Type Inference</li>
                        <li>Strict Mode Development</li>
                    </ul>
                </div>
`,
            'Bash': `
                <h2 style="color:var(--color-green)">Bash</h2>
                <div class="skill-details">
                    <p>Shell  <span style=color:var(--color-blue)>scripting</span> and System automation:</p>
                    <ul>
                        <li>Script Development</li>
                        <li>System Administration Tasks</li>
                        <li>Command Line Efficiency</li>
                        <li>File and Process Management</li>
                    </ul>
                    <h3> <span style=color:var(--color-orange)>Key</span> capabilities:</h3>
                    <ul>
                        <li>Automation Scripts</li>
                        <li>Environment Configuration</li>
                        <li>Log Processing</li>
                        <li>Deployment Scripting</li>
                    </ul>
                </div>
`,
            'MongoDB': `
                <h2 style="color:var(--color-purple)">MongoDB</h2>
                <div class="skill-details">
                    <p>NoSQL <span style=color:var(--color-blue)>database</span> management:</p>
                    <ul>
                        <li>Document-Oriented Design</li>
                        <li>Complex Aggregation Pipelines</li>
                        <li>Indexing Strategies</li>
                        <li>Data Modeling</li>
                    </ul>
                    <h3>Integration <span style=color:var(--color-purple)>experience</span>:</h3>
                    <ul>
                        <li>Mongoose ODM</li>
                        <li>MERN Stack Development</li>
                        <li>Performance Optimization</li>
                        <li>Scalable Database Solutions</li>
                    </ul>
                </div>
`,
            'C#': `
                <h2 style="color:var(--color-blue)">C#</h2>
                <div class="skill-details">
                    <p>.NET  <span style=color:var(--color-green)>framework</span> and application  <span style=color:var(--color-orange)>development</span>:</p>
                    <ul>
                        <li>Object-Oriented Programming</li>
                        <li>LINQ Queries</li>
                        <li>Windows Forms/WPF</li>
                        <li>Basic ASP.NET</li>
                    </ul>
                    <h3>Development <span style=color:var(--color-purple)>areas</span>:</h3>
                    <ul>
                        <li>Console Applications</li>
                        <li>Desktop Software</li>
                        <li>Basic Web Development</li>
                        <li>Game Development Foundations</li>
                    </ul>
                </div>
`
        }
    };

    displayContainer.innerHTML = content.home;

    document.querySelector('.home-container').addEventListener('click', function () {
        displayContainer.innerHTML = content.home;
        updateSelectedSection(this);
    });

    const experienceItems = document.querySelectorAll('.exp-container li');
    experienceItems.forEach(item => {
        item.addEventListener('click', function () {
            const experienceName = this.textContent.trim();
            if (content.experience[experienceName]) {
                displayContainer.innerHTML = content.experience[experienceName];
            }
            updateSelectedSection(document.querySelector('.exp-container'));
        });
    });

    const projectItems = document.querySelectorAll('.proj-container li');
    projectItems.forEach(item => {
        item.addEventListener('click', function () {
            const projectName = this.textContent.trim();
            if (content.projects[projectName]) {
                displayContainer.innerHTML = content.projects[projectName];
            }
            updateSelectedSection(document.querySelector('.proj-container'));
        });
    });

    const skillItems = document.querySelectorAll('.skills-container li');
    skillItems.forEach(item => {
        item.addEventListener('click', function () {
            const skillName = this.textContent.trim();
            if (content.skills[skillName]) {
                displayContainer.innerHTML = content.skills[skillName];
            }
            updateSelectedSection(document.querySelector('.skills-container'));
        });
    });

    function updateSelectedSection(selectedElement) {
        document.querySelectorAll('.main-container > div > div').forEach(div => {
            div.classList.remove('selected');
        });
        selectedElement.classList.add('selected');
    }
});