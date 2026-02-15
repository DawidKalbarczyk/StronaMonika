async function readTime() {
    const response = await fetch('../backend/data/czas.txt');
    return await response.text();
}

export default readTime;