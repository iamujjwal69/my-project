
const myTextarea = document.getElementById('myTextarea');
const charCounter = document.getElementById('charCounter');


myTextarea.addEventListener('input', function() {
    // Get the length of the text in the textarea
    const charCount = myTextarea.value.length;
    
    
    charCounter.textContent = `Characters: ${charCount}`;
});