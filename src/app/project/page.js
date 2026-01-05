'use client';

import ImageCarousel from '@/components/ImageCarousel/ImageCarousel';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import '@/styles/ProjectPage/ProjectPage.css';

function ProjectContent() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const wallpaper = searchParams.get('w');
    const [repo, setRepo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRepoDetails();
    }, [name]);

    useEffect(() => {
        if (wallpaper) {
            document.body.style.transition = 'none';
            document.body.style.backgroundImage = `url('/images/wallpapers/${wallpaper}')`;
        }
    }, [wallpaper]);

    async function fetchRepoDetails() {
        try {
            const response = await fetch(`https://api.github.com/repos/ConnorKnoetze/${name}`, {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch repository');
            }

            const data = await response.json();
            setRepo(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching repo:', error);
            setError(error.message);
            setLoading(false);
        }
    }

    if (error) return <div className="project-page"><p style={{color: 'red'}}>Error: {error}</p></div>;
    if (!repo) return <div className="project-page"></div>;

    return (
        <div className="project-page">
            <div className='project-page-content'>
                <div className='image-carousel-panel'>
                    <ImageCarousel repoName={repo.name}/>
                </div>
                <div className='details-panel'>
                    <h1>{repo.name}</h1>
                    <p>{repo.description || 'No description available'}</p>
                    <div className="project-stats">
                        <span>⭐ {repo.stargazers_count}</span>
                        <span> | </span>
                        <span>🍴 {repo.forks_count}</span>
                        <span> | </span>
                        <span>👁️ {repo.watchers_count}</span>
                    </div>
                    <div className="project-meta">
                        <p><strong>Language:</strong> {repo.language || 'N/A'}</p>
                        <p><strong>Created:</strong> {new Date(repo.created_at).toLocaleDateString()}</p>
                        <p><strong>Updated:</strong> {new Date(repo.updated_at).toLocaleDateString()}</p>
                    </div>
                    {repo.topics && repo.topics.length > 0 && (
                        <div className="project-topics">
                            <strong>Topics:</strong>
                            {repo.topics.map(topic => (
                                <span key={topic} className="topic-tag">{topic}</span>
                            ))}
                        </div>
                    )}
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="github-link">
                        View on GitHub →
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Project() {
    return (
        <ProjectContent/>
    );
}