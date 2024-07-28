
// Function to show the initial content
function showInitialContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '<p>This website is created with assistance from copilot.</p>';
}

// Event listener for the Home button
document.getElementById('homeButton').addEventListener('click', function() {
    showInitialContent();
    document.getElementById('pageHeader').textContent = 'Vilkku Koo';
});
