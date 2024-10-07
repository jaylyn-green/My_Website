const Skills = () => {
    return ( 
        <div className="text-blue-200 text-base mx-auto ml-5 pt-3">
            <p className="text-2xl">Skills-Tools</p>
            <div className="border border-blue-200">
                <ul className="text-white pl-2">            {/**implement the icons for each list entry */}
                    <li>Html</li>
                    <li>CSS</li>                            {/**need to implement links for each list entry */}
                    <li>JavaScript</li>                     {/**display clicked link in a div in the center of the viewport */}
                    <li>Java</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Bash</li>
                    <li>Git</li>
                    <li>React</li>
                </ul>

            </div>
        </div>
     );
}
 
export default Skills;