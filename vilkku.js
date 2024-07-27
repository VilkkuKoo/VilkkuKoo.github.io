// List of 8 projects
let projects = [
    { name: 'Ardino robot', description: 'A basic robot built with arduino' },
    { name: 'My tools', description: 'The growing list of atleast semi-useful tools that are free' },
    { name: 'Project 3', description: 'Description for project 3' },
    { name: 'Project 4', description: 'Description for project 4' },
    { name: 'Project 5', description: 'Description for project 5' },
    { name: 'Project 6', description: 'Description for project 6' },
    { name: 'Project 7', description: 'Description for project 7' },
    { name: 'Project 8', description: 'Description for project 8' }
];

// Function to update a specific project
function updateProject(index, newName, newDescription) {
    // Ensure the index is within bounds
    if (index < 0 || index >= projects.length) {
        console.error('Invalid project index');
        return;
    }

    // Update the project's name and description
    projects[index].name = newName;
    projects[index].description = newDescription;

    // Re-render the projects to reflect the changes
    renderProjects();
}
function renderProjects() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Clear existing content

    projects.forEach((project, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        const img = document.createElement('img');
        img.src = `images/projects/project-${index + 1}.png`; // Ensure this path is correct
        img.alt = `Image ${index + 1}`;

        const header = document.createElement('h3');
        header.textContent = project.name;

        const description = document.createElement('p');
        description.textContent = project.description;

        gridItem.appendChild(img);
        gridItem.appendChild(header);
        gridItem.appendChild(description);
        gridContainer.appendChild(gridItem);
    });
}

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
    const originalContent = '<p>Welcome to the homepage!</p>'; // Define original content
    document.getElementById('main-content').innerHTML = originalContent;

    // Update the page header
    document.getElementById('pageHeader').textContent = 'Welcome to My Website';
});

document.getElementById('toolsButton').addEventListener('click', function() {
    const toolsContainer = document.createElement('div');
    toolsContainer.className = 'grid-container';

    for (let i = 0; i < 8; i++) { // Change to 16 for a 4x4 grid
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        const img = document.createElement('img');
        img.src = `images/tools/tool-${i+1}.png`; // Ensure this path is correct
        img.alt = `Tool Image ${i+1}`;

        const header = document.createElement('h3');
        header.textContent = `Tool ${i+1}`;

        const description = document.createElement('p');
        description.textContent = `Description for tool ${i+1}.`;

        gridItem.appendChild(img);
        gridItem.appendChild(header);
        gridItem.appendChild(description);
        toolsContainer.appendChild(gridItem);
    }

    document.getElementById('main-content').innerHTML = '';
    document.getElementById('main-content').appendChild(toolsContainer);

    // Update the page header
    document.getElementById('pageHeader').textContent = 'My Tools';
});

// Initial render of projects
document.getElementById('projectsButton').addEventListener('click', function() {
    renderProjects();
});

// Example usage: Update project 5 (index 4) with new name and description
updateProject(4, 'Updated Project Name', 'Updated description for project 5');

// Log the updated projects list to verify the changes
console.log(projects);
