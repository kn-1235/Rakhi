document.addEventListener('DOMContentLoaded', function() {
    // Selecting elements
    const card = document.querySelector('.card');
    const audio = document.querySelector('.audio');
    
    // Adding click event listener to toggle card on hover
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });

    // Making audio controls responsive
    window.addEventListener('resize', function() {
        adjustAudioControls();
    });

    function adjustAudioControls() {
        const audioWidth = audio.offsetWidth;
        const audioHeight = audio.offsetHeight;

        // Adjusting controls based on audio element dimensions
        audio.style.width = '100%'; // Example responsive adjustment
        audio.style.height = 'auto'; // Example responsive adjustment
    }

    // Initial adjustment when the page loads
    adjustAudioControls();
});
