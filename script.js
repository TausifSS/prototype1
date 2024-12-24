// Data for the reminders
const data = {
    verses: [
        "Indeed, with hardship comes ease. (Quran 94:6)",
        "So remember Me; I will remember you. (Quran 2:152)",
        "And He found you lost and guided [you]. (Quran 93:7)"
    ],
    hadith: [
        "The best among you are those who have the best manners and character. (Bukhari)",
        "Allah does not look at your appearance or wealth, but at your hearts and deeds. (Muslim)",
        "Whoever believes in Allah and the Last Day, let him speak good or remain silent. (Bukhari)"
    ],
    thoughts: [
        "Success is not the key to happiness. Faith is.",
        "Patience is bitter, but its fruit is sweet.",
        "Every hardship is a lesson and every lesson makes you stronger."
    ]
};

let currentCategory = "";

// Function to show content based on category
function showContent(category) {
    currentCategory = category;
    const contentBox = document.getElementById("content");
    const randomIndex = Math.floor(Math.random() * data[category].length);
    contentBox.innerHTML = `<p>${data[category][randomIndex]}</p>`;
}

// Function to refresh content
function refreshContent() {
    if (currentCategory) {
        showContent(currentCategory);
    } else {
        alert("Please select a category first!");
    }
}
