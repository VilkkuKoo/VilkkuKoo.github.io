let originalContent;

window.addEventListener('DOMContentLoaded', (event) => {
    originalContent = document.getElementById('main-content').innerHTML;

    document.getElementById('projectsButton').addEventListener('click', function() {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';
    
        for (let i = 0; i < 8; i++) { // Change to 16 for a 4x4 grid
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
    
            const img = document.createElement('img');
            img.src = `images/projects/project-${i+1}.png`; // Ensure this path is correct
            img.alt = `Image ${i+1}`;
    
            const header = document.createElement('h3');
            header.textContent = `Project ${i+1}`;
    
            const description = document.createElement('p');
            description.textContent = `Description for project ${i+1}.`;
    
            gridItem.appendChild(img);
            gridItem.appendChild(header);
            gridItem.appendChild(description);
            gridContainer.appendChild(gridItem);
        }
    
        document.getElementById('main-content').innerHTML = '';
        document.getElementById('main-content').appendChild(gridContainer);
    
        // Update the page header
        document.getElementById('pageHeader').textContent = 'My Projects';
    });

    document.getElementById('homeButton').addEventListener('click', function() {
        document.getElementById('main-content').innerHTML = originalContent;
    
        // Update the page header
        document.getElementById('pageHeader').textContent = 'Welcome to My Website';
    });

    document.getElementById('toolsButton').addEventListener('click', function() {
        const toolsContainer = document.createElement('div');
    
        const header = document.createElement('h2');
        header.textContent = 'My Tools';
        toolsContainer.appendChild(header);
    
        const toolsText = document.createElement('p');
        toolsText.textContent = 'Here will be some useful tools';
        toolsContainer.appendChild(toolsText);
    
        document.getElementById('main-content').innerHTML = '';
        document.getElementById('main-content').appendChild(toolsContainer);
    
        // Update the page header
        document.getElementById('pageHeader').textContent = 'My Tools';
    });
});