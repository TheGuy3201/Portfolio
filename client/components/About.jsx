export default function About() {
    return (
    <>
        {/* About Me page */}
        <h1>About</h1>
        <div className="DualPanelContainer"> {/* Essentially a two column layout page */}
            <div className="LeftPanel"> {/* The left panel with picture of me and buttons to resume and contact page */}
                <img className="SelfImg" src="./res/Pic of me.jpg" alt="Picture of Joshua D" />
                <button onClick={() => window.open("./res/Joshua Desroches Resume.pdf", "_blank")}>Open Resume</button>
                <button onClick={() => window.location.href = "/contact"}>Contact Me <img src="https://cdn-icons-png.freepik.com/256/11714/11714679.png?semt=ais_hybrid" alt="Contact Icon" /> </button>
            </div>
            {/* The right panel with a little introduction to me */}
            <div className="Description">
                <p>My name is Joshua Desroches</p>
                <p>I am a 2nd year software engineering technology student at Centennial College, specializing in Game Programming. Throughout my time at Centennial College, I've developed skills in a variety of programming languages such as C#, Java, JavaScript, HTML/CSS, C++, MySQL. With these skills, i've exceeded expectations, overcome challenges, and completed various tasks. In addition, I believe in bringing a friendly and positive attitude towards work and relationships to build strong connections and to succeed in anything I work towards.</p>
            </div>
        </div>
    </>
    );
}