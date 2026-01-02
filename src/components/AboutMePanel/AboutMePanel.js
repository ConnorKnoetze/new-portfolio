import WindowControls from "../WindowControls/WindowControls";
import "@/styles/AboutMePanel/AboutMePanel.css";


export default function AboutMePanel(){
    return (
        <div className="about-me-panel-content">
            <div className="about-me-panel-header">
                <WindowControls/>
            </div>
            <div className="about-me-panel-body">
                <h2>About Me</h2>
                <p>This is the about me panel where information about me can be viewed.</p>
            </div>
        </div>
    );
}