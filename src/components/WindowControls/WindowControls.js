import "@/styles/WindowControls/WindowControls.css";

export default function WindowControls(){
    function closeWindow() {
        window.location.href = '/';
    }
    return (
        <div className="window-controls">
            <div className="window-control-button">
                <img className="window-control-icon" src="/images/WindowControls/remove.png" alt="Minimize Icon"/>
            </div>
            <div className="window-control-button">
                <img className="window-control-icon" src="/images/WindowControls/stop.png" alt="Minimize Icon"/>
            </div>
            <div className="window-control-button close" onClick={closeWindow}>
                <img className="window-control-icon" src="/images/WindowControls/close.png" alt="Minimize Icon"/>
            </div>
        </div>
    );
}