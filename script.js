// Verstecke button2 beim Laden der Seite
document.getElementById("button2").classList.add("d-none");

function toggleButtons() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    if (button1.classList.contains("d-none")) {
        // button2 wurde geklickt, verstecke button2 und zeige button1
        button2.classList.add("d-none", "fade-out");
        setTimeout(function () {
            button2.classList.remove("fade-out");
        }, 300);
        button1.classList.remove("d-none", "fade-in");
        setTimeout(function () {
            button1.classList.add("fade-in");
        }, 10);
    } else {
        // button1 wurde geklickt, verstecke button1 und zeige button2
        button1.classList.add("d-none", "fade-out");
        setTimeout(function () {
            button1.classList.remove("fade-out");
        }, 300);
        button2.classList.remove("d-none", "fade-in");
        setTimeout(function () {
            button2.classList.add("fade-in");
        }, 10);
    }
}

function myFunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}


// Iframe: dark mode
function setIframeStyle(mode) {
    const iframe = document.querySelector('iframe');
    if (mode === 'dark') {
        iframe.style.filter = 'invert(90%)';
    } else {
        iframe.style.filter = 'none';
    }
}

function myFunction() {
    const element = document.body;
    const mode = element.classList.contains("dark-mode") ? 'dark' : 'normal';
    setIframeStyle(mode);
    element.classList.toggle("dark-mode");
    mode = mode === 'dark' ? 'normal' : 'dark';
    setTimeout(function () {
        setIframeStyle(mode);
    }, 350);
}



// Iframe: dark mode
function setIframeStyle(mode) {
    const iframe = document.querySelector('iframe');
    if (mode === 'dark') {
        iframe.style.filter = 'invert(90%)';
    } else {
        iframe.style.filter = 'none';
    }
}

function myFunction() {
    const element = document.body;
    let mode = element.classList.contains("dark-mode") ? 'dark' : 'normal';
    setIframeStyle(mode);
    element.classList.toggle("dark-mode");
    mode = mode === 'dark' ? 'normal' : 'dark';
    setTimeout(function () {
        setIframeStyle(mode);
    }, 350);
}