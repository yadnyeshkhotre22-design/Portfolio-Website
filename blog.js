// Create a button element
const button = document.createElement('button');
button.textContent = 'Click me';
button.id = 'myButton';

// Add styles (optional)
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.cursor = 'pointer';

// Add click event listener
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Append to body (or another container)
document.body.appendChild(button);