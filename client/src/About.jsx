export default function About() {
    return (
    <>
        <h2>About</h2>
        <div className="DualPanelContainer">
            <div className="LeftPanel">
                <img className="SelfImg" src="./res/Pic of me.jpg" alt="Picture of Joshua D" />
                <button onClick={() => window.open("./res/Joshua Desroches Resume.pdf", "_blank")}>Open Resume</button>
                <button onClick={() => window.location.href = "/contact"}>Contact Me <img src="https://www.freeiconspng.com/uploads/contact-icon-17.png" alt="Contact Icon" /> </button>
            </div>

            <div className="Description">
                <p>My name is Joshua Desroches</p>
                <p>I am a 2nd year software engineering technology student at Centennial College, specializing in Game Programming. Throughout my time at Centennial College, I've developed skills in a variety of programming languages such as C#, Java, JavaScript, HTML/CSS, C++, MySQL. With these skills, i've exceeded expectations, overcome challenges, and completed various tasks. In addition, I believe in bringing a friendly and positive attitude towards work and relationships to build strong connections and to succeed in anything I work towards.</p>
            </div>
        </div>
    </>
    );
}