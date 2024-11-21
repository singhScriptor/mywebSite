document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');

    const modeToggle = document.getElementById('toggle_checkbox');
    const body = document.body;

    // Check for saved mode in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        modeToggle.checked = true;
    }

    modeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');

        // Save the current mode in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
