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