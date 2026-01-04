import WindowControls from "../WindowControls/WindowControls";
import "@/styles/AboutMePanel/AboutMePanel.css";


export default function AboutMePanel(){
    return (
        <div className="about-me-panel-content" onClick={(e) => e.stopPropagation()}>
            <div className="about-me-panel-header">
                <WindowControls panelName="about-me"/>
            </div>
            <div className="about-me-panel-body">
                <h2>About Me</h2>
                <p>This is the about me panel where information about me can be viewed.</p>
            </div>
        </div>
    );
}