import WindowControls from "../WindowControls/WindowControls";
import "@/styles/WallpaperPanel/WallpaperPanel.css";

export default function WallpaperPanel(){
    return (
        <div className="wallpaper-panel-content">
            <div className="wallpaper-panel-header">
                <WindowControls/>
            </div>
            <div className="wallpaper-panel-body">
                <h2>Wallpapers</h2>
                <p>This is the wallpaper panel where wallpapers can be viewed and selected.</p>
            </div>
        </div>
    );
}