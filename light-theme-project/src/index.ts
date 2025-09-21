const lightTheme = require('./theme/light');

function applyTheme(theme) {
    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.textColor;
}

applyTheme(lightTheme);