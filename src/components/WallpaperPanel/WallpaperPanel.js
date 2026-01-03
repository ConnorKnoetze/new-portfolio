import WindowControls from "../WindowControls/WindowControls";
import "@/styles/WallpaperPanel/WallpaperPanel.css";

const wallpaperFiles = [
    "20250827224255_1.jpg",
    "2f88vbbi9kue195.png",
    "788rircudz0c1.png",
    "9213o4hips3d1.jpg",
    "9inv0o6ek0qd1.png",
    "ai8l9hbf6tkd1.png",
    "DnDGo1.png",
    "kjm887zhqjie1.png",
    "van-Gogh-Almond-Blossom-1890.jpg",
    "yo33qdyyfozc1.jpeg",
    "z7t5x3p9olud1.png"
];

export default function WallpaperPanel(){
    return (
        <div className="wallpaper-panel-content">
            <div className="wallpaper-panel-header">
                <WindowControls/>
            </div>
            <div className="wallpaper-panel-body">
                <div className="wallpaper-panel-grid">
                    {wallpaperFiles.map((file) => (
                        <div key={file} className="wallpaper-item">
                            <img src={`/images/wallpapers/${file}`} alt={`Wallpaper ${file}`} className="wallpaper-image" loading="lazy" decoding="async"/>
                            <p>Set As Wallpaper</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}