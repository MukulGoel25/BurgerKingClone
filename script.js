document.getElementById("Enter-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value.trim();
    const resultsDiv = document.getElementById("results-div");
    
    // Clear previous results
    resultsDiv.textContent = '';

    // Check if input is empty
    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    
    //Define regex patterns
    const regex1 = /^(?:\+91\s?\d{10}|\b\d{10}\b)$/; 
    
    // Test the input against the pattern
    if (regex1.test(userInput)) {
        resultsDiv.textContent = `OTP Sent to ${userInput}`;
    } else { ((userInput))
        resultsDiv.textContent = `${userInput} is not Valid Mobile Number`;
    }
    
});

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("user-input").value = '';
    document.getElementById("results-div").textContent = '';
});