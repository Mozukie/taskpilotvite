import HeaderLogin from "../components/HeaderLogin";

function About(){
    return(
    <div>
        <header>
            <HeaderLogin/>
        </header>
        <div className="about-wrapper">
            <div className="about-page">
                <h2>About TaskPilot</h2>
                <p>TaskPilot is a task management application designed to help you organize and prioritize your tasks efficiently.</p>
                <p>With TaskPilot, you can create, edit, and delete tasks, set deadlines, and track your progress.</p>
                <p>Whether you're managing personal projects or collaborating with a team, TaskPilot provides the tools you need to stay on top of your tasks.</p>
            </div>

    </div>
    )
}


export default About;