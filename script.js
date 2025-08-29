// ===== PART 1: JavaScript Basics =====
// Variables and user input with conditionals
document.getElementById('checkEligibility').addEventListener('click', function() {
    const age = parseInt(document.getElementById('ageInput').value);
    const resultElement = document.getElementById('eligibilityResult');
    
    if (isNaN(age)) {
        resultElement.innerHTML = "Please enter a valid age.";
        return;
    }
    
    // Conditional logic
    if (age >= 18) {
        resultElement.innerHTML = "You are eligible to vote!";
    } else {
        resultElement.innerHTML = "You are not eligible to vote.";
    }
});

// ===== PART 2: JavaScript Functions =====
// Function 1: Calculate area
document.getElementById('calculateArea').addEventListener('click', function() {
    const length = parseFloat(document.getElementById('lengthInput').value);
    const width = parseFloat(document.getElementById('widthInput').value);
    const resultElement = document.getElementById('areaResult');
    
    if (isNaN(length) || isNaN(width)) {
        resultElement.innerHTML = "Please enter valid numbers.";
        return;
    }
    
    const area = calculateRectangleArea(length, width);
    resultElement.innerHTML = `The area is: ${area}`;
});

function calculateRectangleArea(length, width) {
    return length * width;
}

// Function 2: Format string to title case
document.getElementById('formatText').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const resultElement = document.getElementById('formatResult');
    
    if (!text) {
        resultElement.innerHTML = "Please enter some text.";
        return;
    }
    
    const formattedText = convertToTitleCase(text);
    resultElement.innerHTML = `Formatted: ${formattedText}`;
});

function convertToTitleCase(text) {
    return text.toLowerCase().split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// ===== PART 3: JavaScript Loops =====
// Loop 1: for loop (multiplication table)
document.getElementById('generateTable').addEventListener('click', function() {
    const number = parseInt(document.getElementById('tableNumber').value);
    const tableElement = document.getElementById('multiplicationTable');
    
    if (isNaN(number)) {
        tableElement.innerHTML = "Please enter a valid number.";
        return;
    }
    
    let tableHTML = "<h3>Multiplication Table</h3>";
    // For loop example
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<div>${number} × ${i} = ${number * i}</div>`;
    }
    tableElement.innerHTML = tableHTML;
});

// Loop 2: forEach loop (process array)
document.getElementById('processArray').addEventListener('click', function() {
    const input = document.getElementById('arrayInput').value;
    const resultElement = document.getElementById('arrayResult');
    
    if (!input) {
        resultElement.innerHTML = "Please enter numbers separated by commas.";
        return;
    }
    
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    let sum = 0;
    // forEach loop example
    numbers.forEach(num => {
        sum += num;
    });
    
    resultElement.innerHTML = `Sum of numbers: ${sum}`;
});

// ===== PART 4: DOM Manipulation =====
// DOM Interaction 1: Change text content
document.getElementById('changeText').addEventListener('click', function() {
    const paragraph = document.getElementById('demoParagraph');
    paragraph.textContent = "The text has been changed successfully!";
});

// DOM Interaction 2: Toggle CSS class
document.getElementById('toggleStyle').addEventListener('click', function() {
    const element = document.getElementById('styleDemo');
    element.classList.toggle('highlighted');
});

// DOM Interaction 3: Create new elements
document.getElementById('addItem').addEventListener('click', function() {
    const newItemText = document.getElementById('newItemInput').value;
    const list = document.getElementById('itemList');
    
    if (!newItemText) {
        alert("Please enter an item.");
        return;
    }
    
    const newItem = document.createElement('li');
    newItem.textContent = newItemText;
    newItem.className = 'item';
    list.appendChild(newItem);
    
    document.getElementById('newItemInput').value = "";
});