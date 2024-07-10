document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;

    // Save feedback to the database
    saveFeedback(name, feedback);

    // Clear the form
    document.getElementById('feedbackForm').reset();
});

function saveFeedback(name, feedback) {
    const feedbackList = document.getElementById('feedbackList');

    const feedbackItem = document.createElement('div');
    feedbackItem.innerHTML = `<strong>${name}</strong>: <p>${feedback}</p>`;
    
    feedbackList.appendChild(feedbackItem);
}
