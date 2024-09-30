function About() {
  return (
    <div className="w-full h-full mx-20 py-10 flex justify-start border-4">
      <div className="perspective-1000 w-1/2 h-full">
        <h1 className="about h-full py-4 flex text-7xl font-sofia items-end font-bold border-2">
          <div className="self-center">About&nbsp;</div>
          <div className="-rotate-[90deg] origin-bottom-left ml-10 text-[2.8rem] self-center">
            Me
          </div>
        </h1>
      </div>
      {/* <h1>About Me</h1>
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
            </section> */}
    </div>
  );
}

export default About;
