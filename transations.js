let translations = {};

function loadTranslations(language) {
    fetch(`./locales/${language}.json`)
        .then(response => response.json())
        .then(data => {
            translations = data;
            updatePageContent();
        });
}

function updatePageContent() {
    //TODO: Update all page elements with the translated content
    document.title = translations.title
    var setupTitle = document.querySelector(".setup-title");
    setupTitle.innerHTML = translations.step1
}

function changeLanguage() {
    const language = document.getElementById('language-selector').value;
    loadTranslations(language);
}

// Load default language (e.g., French) on page load
window.onload = function () {
    loadTranslations('fr');
};
