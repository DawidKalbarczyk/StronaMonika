async function readTime() {
    const isGitHubPages = window.location.hostname.endsWith("github.io");
    const repoSegment = isGitHubPages ? `/${window.location.pathname.split("/")[1]}` : "";
    const dataUrl = `${repoSegment}/backend/data/czas.txt?t=${Date.now()}`;
    
    const response = await fetch(dataUrl, { cache: 'no-store' });
    return await response.text();
}

export default readTime;

