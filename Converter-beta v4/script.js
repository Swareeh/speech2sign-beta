const mic_icon = document.getElementById("mic_icon")
const status_text = document.getElementById('status')
const output = document.getElementById('output')
const slider = document.getElementById('slider_div')
const speech_text = document.getElementById('speech_text')
const repeat_btn = document.getElementById('repeat_btn')

const mic_btn = document.getElementById('pulse')
const pulse_spans = document.querySelectorAll('.pulse_span')

// EXTRA STUFF FOR THE PROGRAM------------------

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

// --------------------------------------------

// BACK BUTTON ----------------------------------------
const back_btn = document.getElementById('back_btn')

back_btn.addEventListener('click', function () {
    slider.style.top = '100%'
    back_btn.style.display = 'none'
})

// -----------------------------------------------------

// Speech Recognition Function

async function Speech2Text() {
    var speech = true;

    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    const promise = new Promise((resolve) => {
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
            speech_text.textContent = transcript;

            pulse_spans.forEach((span, index) => {
                span.style.setProperty('--i', index);
                span.classList.toggle('listening');
            })

            mic_icon.src = './Assets/mute2.png';
            status_text.textContent = 'CLICK TO SPEAK'
            slider.style.top = '15%'
            back_btn.style.display = 'block'

        })

        recognition.addEventListener('end', () => {
            if (speech_text.textContent.trim() === '') {
                status_text.textContent = 'No speech detected.\n Please try again.'

                pulse_spans.forEach((span, index) => {
                    span.style.setProperty('--i', index);
                    span.classList.toggle('listening');
                })

                mic_icon.src = './Assets/mute2.png'
            }
            resolve();
        })

        if (speech == true) {
            recognition.start();
            mic_icon.src = './Assets/unmute2.png'
            status_text.textContent = 'LISTENING...'
            pulse_spans.forEach((span, index) => {
                span.style.setProperty('--i', index);
                span.classList.toggle('listening');
            })

        }
    }) // End of Promise 
    return promise
}
//------------------------------------------------------

// Converter Function
async function converter() {

    console.log('Converter has started')

    var input_value = document.getElementById('speech_text').textContent.toUpperCase()

    const input_value_words = input_value.split(' ')


    for (let i = 0; i < input_value_words.length; i++) {

        var word = input_value_words[i]
        fadeIn(output)
        if (word == 'YES') {
            output.src = './Assets/Signs/Words/YES.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'LOVE') {
            output.src = './Assets/Signs/Words/LOVE.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'BELIEVE') {
            output.src = './Assets/Signs/Words/BELIEVE.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'FRIEND') {
            output.src = './Assets/Signs/Words/FRIEND.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'BYE') {
            output.src = './Assets/Signs/Words/BYE.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'FRIENDS') {
            output.src = './Assets/Signs/Words/FRIENDS.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'INSPIRATION') {
            output.src = './Assets/Signs/Words/INSPIRATION.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'NO') {
            output.src = './Assets/Signs/Words/NO.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'PLEASE') {
            output.src = './Assets/Signs/Words/PLEASE.jpg'
            await delay(1000)
            output.src = './Assets/white.png'
        }

        else if (word == 'STOP') {
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
            output.src = './Assets/S2S.png'
        }

    }
}
//-----------------------------------------


mic_btn.addEventListener('click', async function () {
    await Speech2Text()
    converter()
})

repeat_btn.addEventListener('click', async function () {
    converter()
})

