'use client';

import "@/styles/Desktop/Desktop.css";
import { useState } from 'react';
import WallpaperPanel from "@/components/WallpaperPanel/WallpaperPanel";
import ProjectPanel from "../ProjectPanel/ProjectPanel";
import AboutMePanel from "../AboutMePanel/AboutMePanel";

export default function DesktopContent(){
    const [clickedItem, setClickedItem] = useState(null);

    function clearHighlight(e) {
        if (e.target.className.includes('icon-image') || e.target.className.includes('icon-item') || e.target.className.includes('icon-item-clicked')) return;
        clickedItem && (clickedItem.className = 'icon-item');
        setClickedItem(null);
    }

    function doClickHighlight(e) {
        clickedItem && (clickedItem.className = 'icon-item');
        const target = e.currentTarget;
        target.className = target.className.includes('icon-item-clicked') ? 'icon-item' : 'icon-item icon-item-clicked';
        setClickedItem(target);
    }

    function openPanel(name) {
        // Logic to open wallpaper panel
        const wallpaperPanel = document.querySelector(`.${name}-panel`);
        wallpaperPanel.className = `${name}-panel-active`;
    }

    return (
        <div className="desktop-content">
            <div className="icon-grid" onClick={clearHighlight}>
                <div className="icon-item" onClick={doClickHighlight} onDoubleClick={() => openPanel('about-me')}>
                    <img src="/images/icons/pdf.png" alt="Home Icon" className="icon-image"/>
                    <span className="icon-label">About Me</span>
                </div>
                <div className="icon-item" onClick={doClickHighlight} onDoubleClick={() => openPanel('project')}>
                    <img src="/images/folder.png" alt="Home Icon" className="icon-image"/>
                    <span className="icon-label">Projects</span>
                </div>
                <div className="icon-item" onClick={doClickHighlight} onDoubleClick={() => openPanel('wallpaper')}>
                    <img src="/images/icons/photos.png" alt="Home Icon" className="icon-image"/>
                    <span className="icon-label">Wallpapers</span>
                </div>
            </div>

            <div className="about-me-panel">
                <AboutMePanel/>
            </div>

            <div name="project" className="project-panel">
                <ProjectPanel/>
            </div>

            <div name="wallpaper" className="wallpaper-panel">
                <WallpaperPanel/>
            </div>
        </div>
    )
}