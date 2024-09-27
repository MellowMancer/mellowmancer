
function About() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>About Me</h1>
            <section>
                <h2>Introduction</h2>
                <p>
                    Hello! My name is [Your Name]. I am a [Your Job Title] with a passion for [Your Passion].
                </p>
            </section>
            <section>
                <h2>Skillset</h2>
                <ul>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                    <li>Skill 4</li>
                </ul>
            </section>
            <section>
                <h2>Resume</h2>
                <p>
                    You can view my resume <a href="[Link to your resume]" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
            </section>
        </div>
    );
};

export default About;