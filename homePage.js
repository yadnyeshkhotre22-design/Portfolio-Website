// homePage.js
document.addEventListener('DOMContentLoaded', function() {
    // Create main container
    const body = document.body;
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.margin = '0';
    body.style.padding = '0';
    body.style.backgroundColor = '#f5f5f5';

    // Header
    const header = document.createElement('header');
    header.style.backgroundColor = '#333';
    header.style.color = '#fff';
    header.style.padding = '20px';
    header.innerHTML = '<h1>Welcome to My Site</h1>';
    body.appendChild(header);

    // Navigation
    const nav = document.createElement('nav');
    nav.style.backgroundColor = '#444';
    nav.style.padding = '10px';
    nav.innerHTML = '<a href="#" style="color: #fff; margin: 0 15px; text-decoration: none;">Home</a><a href="#" style="color: #fff; margin: 0 15px; text-decoration: none;">About</a><a href="#" style="color: #fff; margin: 0 15px; text-decoration: none;">Contact</a>';
    body.appendChild(nav);

    // Main content
    const main = document.createElement('main');
    main.style.padding = '40px';
    main.style.maxWidth = '1200px';
    main.style.margin = '0 auto';
    main.innerHTML = '<h2>Hello World!</h2><p>This is your homepage.</p>';
    body.appendChild(main);

    // Footer
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#333';
    footer.style.color = '#fff';
    footer.style.textAlign = 'center';
    footer.style.padding = '20px';
    footer.innerHTML = '<p>&copy; 2024 My Site. All rights reserved.</p>';
    body.appendChild(footer);
});