export default function Contact() {
    return (
    <>
        <h2>Contact</h2>
        <div className="DualPanelContainer">
            <div className="LeftPanel">
                <img src="./res/Pic of me.jpg" className="SelfImg" alt="Picture of Joshua D" />
                {/* Email Address */}
                <button onClick={() => window.open("mailto:josh.des.21@gmail.com")}>
                    <img src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" alt="Gmail logo" />
                    Email Address
                </button>

                {/* Phone Number */}
                <button onClick={() => window.open("tel:+6473559303")}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4367/4367049.png" alt="Phone logo" />
                    Mobile Phone
                </button>
                

                {/* LinkedIn */}
                <button onClick={() => window.open("https://www.linkedin.com/in/joshua-desroches/")}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" alt="LinkedIn logo" />
                    Linkedin Profile
                </button>
                

                {/* Github */}
                <button onClick={() => window.open("https://github.com/TheGuy3201")}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" alt="Github logo" />
                    Github Profile
                </button>
                
            </div>

            <div className="Description">
                <p>Soon to contain form</p>
            </div>
        </div>
    </>
    );
}