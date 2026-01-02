import WindowControls from "../WindowControls/WindowControls";
import "@/styles/ProjectPanel/ProjectPanel.css";

export default function ProjectPanel(){
    return (
        <div className="project-panel-content">
            <div className="project-panel-header">
                <WindowControls/>
            </div>
            <div className="project-panel-body">
                <h2>Projects</h2>
                <p>This is the project panel where projects can be viewed and selected.</p>
            </div>
        </div>
    );
}