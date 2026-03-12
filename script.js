// Listen for spacebar
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        openGarage();
    }
});

function openGarage() {
    // Trigger door animation
    document.getElementById('garage-door').classList.add('open');
    
    // Hide the prompt text
    document.getElementById('press-space').classList.add('hidden');

    // Remove splash after animation finishes
    setTimeout(function() {
        document.getElementById('splash').style.display = 'none';
    }, 1300);
}