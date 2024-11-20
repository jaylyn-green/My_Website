document.addEventListener('DOMContentLoaded', () => {
    const displayContainer = document.getElementById('display');

    const content = {
        home: `
            <h2>About Me</h2>
            <p>Detailed information about yourself...</p>
        `,
        experience: `
            <h2>Experience Details</h2>
            <div>
                <h3>Teacher's Assistant @ GSW</h3>
                <p>Description of your role and responsibilities...</p>
                
                <h3>Freelance Data Annotater @ DataAnnotation</h3>
                <p>Description of your work and achievements...</p>
            </div>
        `,
        projects: {
            'FitnessTracker': `
                <h2>FitnessTracker</h2>
                <p>Description of FitnessTracker project...</p>
                <h3>Technologies Used:</h3>
                <ul>
                    <li>Technology 1</li>
                    <li>Technology 2</li>
                </ul>
            `,
            'CityUpdate': `
                <h2>CityUpdate</h2>
                <p>Description of CityUpdate project...</p>
            `,
            'ChatApp': `
                <h2>ChatApp</h2>
                <p>Description of ChatApp project...</p>
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

    document.querySelector('.exp-container').addEventListener('click', function () {
        displayContainer.innerHTML = content.experience;
        updateSelectedSection(this);
    });

    const projectItems = document.querySelectorAll('.proj-container li');
    projectItems.forEach(item => {
        item.addEventListener('click', function () {
            const projectName = this.textContent;
            if (content.projects[projectName]) {
                displayContainer.innerHTML = content.projects[projectName];
            }
            updateSelectedSection(document.querySelector('.proj-container'));
        });
    });

    const skillItems = document.querySelectorAll('.skills-container li');
    skillItems.forEach(item => {
        item.addEventListener('click', function () {
            const skillName = this.textContent;
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