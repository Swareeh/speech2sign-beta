const mic_icon = document.getElementById("mic_icon")
const status_text = document.getElementById('status')
const output = document.getElementById('output')
const slider = document.getElementById('slider_div')
const speech_text = document.getElementById('speech_text')
const repeat_btn = document.getElementById('repeat_btn')

const mic_btn = document.getElementById('pulse')
const pulse_spans = document.querySelectorAll('.pulse_span')

// EXTRA FUNCTIONS FOR THE PROGRAM------------------

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
    //For Mobile
    if (window.screen.width > 320 & window.screen.width < 428) {
        slider.style.top = '100%'
        back_btn.style.display = 'none'
    }

    //For Desktop
    if (window.screen.width > 769) {
        slider.style.left = '100%'
        back_btn.style.display = 'none'
    }


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
            back_btn.style.display = 'block'

            //For Mobile
            if (window.screen.width > 320 & window.screen.width < 428) {
                slider.style.top = '15%'
            }

            //For Desktop
            if (window.screen.width > 769) {
                slider.style.left = '70%'
                back_btn.style.display = 'block'
            }


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
        // fadeIn(output)

        const dictionary = {
            'HAPPY': './Assets/Signs/animated/words/HAPPY.gif',
            'HELLO': './Assets/Signs/animated/words/HELLO.gif',
            'HI': './Assets/Signs/animated/words/HI.gif',
            'GIPHY': './Assets/Signs/animated/words/GIPHY.gif',
            'DEAF': './Assets/Signs/animated/words/DEAF.gif',
            'NO': './Assets/Signs/animated/words/NO.gif',
            'AGAIN': './Assets/Signs/animated/words/AGAIN.gif',
            'KISS': './Assets/Signs/animated/words/KISS.gif',
            'ME': './Assets/Signs/animated/words/ME.gif',
            'OKAY': './Assets/Signs/animated/words/OKAY.gif',
            'OK': './Assets/Signs/animated/words/OKAY.gif',
            'PLEASE': './Assets/Signs/animated/words/PLEASE.gif',
            'SORRY': './Assets/Signs/animated/words/SORRY.gif',
            'YES': './Assets/Signs/animated/words/YES.gif',
            'YOU': './Assets/Signs/animated/words/YOU.gif',
            'THANK': './Assets/Signs/animated/words/THANK.gif',
        }


        if (word in dictionary) {
            let gif = dictionary[word]
            output.src = gif
            await delay(1000)
            output.src = './Assets/S2S.png'

        } else {

            for (let i = 0; i < word.length; i++) {

                if (word[i] == '.') {
                    output.src = `./Assets/S2S.png`
                } else {
                    output.src = `./Assets/Signs/animated/${word[i]}.gif`
                    // output.src = `./TESTS/A-resize.gif`
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

