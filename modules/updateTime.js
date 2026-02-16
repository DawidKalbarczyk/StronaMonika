async function readTime() {
    const isGitHubPages = window.location.hostname.endsWith("github.io");
    const repoSegment = isGitHubPages ? `/${window.location.pathname.split("/")[1]}` : "";
    const dataUrl = `${repoSegment}/backend/data/czas.txt`;
    
    const response = await fetch(dataUrl);
    return await response.text();
}

export default readTime;

