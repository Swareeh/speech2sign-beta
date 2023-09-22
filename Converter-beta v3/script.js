const mic_icon = document.getElementById("mic_icon")
const input_textarea = document.getElementById("input_textarea")
const output = document.getElementById('output')
const convert_btn = document.getElementById('convert_btn')
const status_text = document.getElementById('status')
const slider = document.getElementById('slider_div')


// Hamburger Menu
const nav_connections = document.getElementById('nav_connections')
const menu_brgr = document.getElementById('menu_brgr')
// const web_body = document.getElementById('web_body')


menu_brgr.addEventListener('click', function () {

    if (nav_connections.style.left == '450px') {
        nav_connections.style.left = '0px';
        // web_body.style.overflow = 'hidden'
    } else {
        nav_connections.style.left = '450px';
        // web_body.style.overflow = 'visible'

    }

}
)

// Converter

var converter = false

mic_icon.addEventListener('click', function () {

    if (converter == true) {
        alert('Converter is running... You cannot use the mic at this moment...\n[Press OK to Continue]')
        return
    }

    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
        input_textarea.innerHTML = transcript;
        slider.style.bottom = '70vh'
        back_btn.style.display = 'block'
        mic_icon.src = './Assets/mute21.png'
    })


    recognition.addEventListener('end', () => {
        if (input_textarea.textContent.trim() === '') {
            status_text.innerHTML = 'No speech detected.<br>Please try again.'
            // input_textarea.textContent = "No speech detected. Please try again.";
            mic_icon.src = './Assets/mute21.png'
        }
    })

    if (speech == true) {
        recognition.start();
        mic_icon.src = './Assets/unmute21.png'
    }

})

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fadeIn(elem) {
    "use strict";
    elem.style.display = "block";
    elem.style.opacity = 0;
    var i = 0;
    var inte = setInterval(function () {
        elem.style.opacity = Number(elem.style.opacity) + 0.3;
        if (i >= 1.2) {
            clearInterval(inte);
        }
        else {
            i++;
        }
    }, 100);
}

function fadeOut(elem) {
    elem.style.display = "none";
}

convert_btn.onclick = async function () {

    if (converter == true) {
        alert('Converter is already running...\n[Press OK to continue]')
        return
    }

    converter = true
    convert_btn.innerHTML = 'Converter is Active...'
    convert_btn.style.backgroundColor = 'green';
    var input_value = document.getElementById('input_textarea').value
    input_value = input_value.toUpperCase()

    const input_value_words = input_value.split(' ')

    for (let i = 0; i < input_value_words.length; i++) {

        var word = input_value_words[i]
        fadeIn(output)
        if (word == 'YES') {
            // fadeIn(output)
            output.src = './Assets/Signs/Words/YES.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'LOVE') {
            // fadeIn(output)
            output.src = './Assets/Signs/Words/LOVE.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'BELIEVE') {
            // fadeIn(output)
            output.src = './Assets/Signs/Words/BELIEVE.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'FRIEND') {
            // fadeIn(output)
            output.src = './Assets/Signs/Words/FRIEND.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'BYE') {
            // fadeIn(output)
            output.src = './Assets/Signs/Words/BYE.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'FRIENDS') {
            // fadeIn(output)
            output.src = './Assets/Signs/Words/FRIENDS.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'INSPIRATION') {
            // fadeIn(output)
            output.src = './Assets/Signs/Words/INSPIRATION.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'NO') {
            // fadeIn(output)
            output.src = './Assets/Signs/Words/NO.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'PLEASE') {
            // fadeIn(output)
            output.src = './Assets/Signs/Words/PLEASE.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'STOP') {
            // fadeIn(output)
            output.src = './Assets/Signs/Words/STOP.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else {

            for (let i = 0; i < word.length; i++) {

                if (word[i] == '.') {
                    output.src = `./Assets/white.png`
                } else {
                    output.src = `./Assets/Signs/animated/${word[i]}.gif`
                }
                await delay(1000)
            }
            output.src = './Assets/neutral.png'
        }

    }

    converter = false
    fadeOut(output)
    convert_btn.innerHTML = 'Translate'
    convert_btn.style.backgroundColor = '#004C74';

}

const back_btn = document.getElementById('back_btn')

back_btn.addEventListener('click', function () {
    slider.style.bottom = '-200px'
    back_btn.style.display = 'none'
})
