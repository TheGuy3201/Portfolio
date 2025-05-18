export default function Home() {
    return ( 
<>
    <h2 style={{ fontFamily: "sans-serif Roboto" }}>Welcome to Joshua Desroches page</h2> 
    <img src="./res/Pic of me.jpg" alt="Picture of Joshua D" className="HomeSelfImg" onClick={() => {window.location.href = "/about"}}/>
    <h1 className="missionStatement">I strive to bring innovative ideas to life through a blend of technology, creativity, and forward-thinking — driven by a passion for building meaningful solutions that make a difference.</h1>
        
    <h2 className="RedirectText">To learn more about me, click either buttons below.</h2>
    <nav>
        <button className="RedirectButton" onClick={() => window.location.href = "/about"}>About Me <img className="RedirectIcon" src="https://static.vecteezy.com/system/resources/thumbnails/033/882/148/small_2x/transparent-background-person-icon-free-png.png"/> </button>
        <button className="RedirectButton" onClick={() => window.location.href = "/project"}>My Projects <img className="RedirectIcon" src="https://cdn-icons-png.freepik.com/256/12148/12148631.png?semt=ais_hybrid"/> </button>
    </nav>
</>
)
}