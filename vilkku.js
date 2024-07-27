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

// List of 8 tools
let tools = [
    { name: 'Color Picker', description: 'Just a basic Color Picker' },
    { name: 'Placeholder image generator', description: 'Can create multiple images at a time' },
    { name: 'Tool 3', description: 'Description for tool 3' },
    { name: 'Tool 4', description: 'Description for tool 4' },
    { name: 'Tool 5', description: 'Description for tool 5' },
    { name: 'Tool 6', description: 'Description for tool 6' },
    { name: 'Tool 7', description: 'Description for tool 7' },
    { name: 'Tool 8', description: 'Description for tool 8' }
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

// Function to show the initial content
function showInitialContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '<p>This website is created with assistance from copilot.</p>';
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

// Event listener for the Home button
document.getElementById('homeButton').addEventListener('click', function() {
    showInitialContent();
    document.getElementById('pageHeader').textContent = 'Vilkku Koo';
});

// Event listener for the Tools button
document.getElementById('toolsButton').addEventListener('click', function() {
    const toolsContainer = document.createElement('div');
    toolsContainer.className = 'grid-container';

    tools.forEach((tool, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        const img = document.createElement('img');
        img.src = `images/tools/tool-${index + 1}.png`; // Ensure this path is correct
        img.alt = `Tool Image ${index + 1}`;

        const header = document.createElement('h3');
        header.textContent = tool.name;

        const description = document.createElement('p');
        description.textContent = tool.description;

        gridItem.appendChild(img);
        gridItem.appendChild(header);
        gridItem.appendChild(description);
        toolsContainer.appendChild(gridItem);
    });

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
