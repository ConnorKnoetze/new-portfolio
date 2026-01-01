'use client'
import { useRouter } from 'next/navigation'
export default function NavContent(){
    return (
        <nav className="w-full bg-[color-mix(in_srgb,var(--color-blue-500),transparent_95%)] backdrop-blur-lg border-t border-[color-mix(in_srgb,var(--color-blue-500),transparent_95%)] saturate-150">
            <div className="icon-wrapper">
                <div className="nav-items">
                    <button 
                        className="nav-item"
                        type='button'
                        onClick={() => {
                            window.location.href = '/';
                        }}
                    >
                        <img src="/images/icon.webp"/>
                    </button>
                    <button 
                        className="nav-item"
                        type='button'
                        onClick={() => {
                            window.location.href = '/';
                        }}
                    >
                        <img src="/images/folder.png"/>
                    </button>
                    <button 
                        className="nav-item"
                        type='button'
                        onClick={() => {
                            window.location.href = '/';
                        }}
                    >
                        <img src="/images/folder.png"/>
                    </button>
                </div>
                <span className="widgets-area">
                    <div className="widget-item" style={{padding: '15px 8px'}}>
                        <img style={{width: '11px'}} src="/images/tray.png"/>
                    </div>
                    <div className="widget-item">
                        <img className='invert' src="/images/wifi.png"/>
                        <img src="/images/volume.png"/>
                    </div>
                    <div className="widget-item" style={{flexDirection: 'column', fontSize: '12px', lineHeight: '1', padding: '6px 8px', textAlign: 'center'}}>
                        <div className="time">
                            12:45 pm
                        </div>
                        <div className="date">
                            1/01/2026
                        </div>
                    </div>
                </span>
            </div>
        </nav>
    )
}