const convert_btn = document.getElementById('convert_btn')
const input =  document.getElementById("input")
const output = document.getElementById('output')
const mic_btn =  document.getElementById("mic_btn")

mic_btn.addEventListener('click', function() {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        input.innerHTML = transcript;
        // mic_btn.src = './Resources/mute.png'
    })


    recognition.addEventListener('end', () => {
        if (input.textContent.trim() === '') {
          input.textContent = "No speech detected. Please try again.";
        //   mic_btn.src = './Resources/mute.png'
        }})

    if (speech == true) {
        recognition.start();
        // mic_btn.src = './Resources/unmute.png'
    }


})

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var converter = false

convert_btn.onclick = async function () {

    if (converter == true) {
        alert('Converter is already running...\n[Press OK to continue]')
        return
    }

    converter = true
    var input_value = document.getElementById('input').value
    input_value = input_value.toUpperCase()

    const input_value_words = input_value.split(' ')

    for (let i = 0; i < input_value_words.length; i++) {

        var word = input_value_words[i]
        
        if (word == 'YES') {
            output.src = './Signs/Words/YES.jpg'
            await delay(500)
        }

        else if (word == 'LOVE') {
            output.src = './Signs/Words/LOVE.jpg'
            await delay(500)  
        }

        else if (word == 'BELIEVE') {
            output.src = './Signs/Words/BELIEVE.jpg'
            await delay(500)  
        }

        else if (word == 'FRIEND') {
            output.src = './Signs/Words/FRIEND.jpg'
            await delay(500)  
        }

        else if (word == 'BYE') {
            output.src = './Signs/Words/BYE.jpg'
            await delay(500)  
        }

        else if (word == 'FRIENDS') {
            output.src = './Signs/Words/FRIENDS.jpg'
            await delay(500)  
        }

        else if (word == 'INSPIRATION') {
            output.src = './Signs/Words/INSPIRATION.jpg'
            await delay(500)  
        }

        else if (word == 'NO') {
            output.src = './Signs/Words/NO.jpg'
            await delay(500)  
        }

        else if (word == 'PLEASE') {
            output.src = './Signs/Words/PLEASE.jpg'
            await delay(500)  
        }

        else if (word == 'STOP') {
            output.src = './Signs/Words/STOP.jpg'
            await delay(500)  
        }
        
        else {

            for (let i = 0; i < word.length; i++) {

                if (word[i] == ' ') {
                    output.src = `./Signs/black.jpg `
                } else {
                    output.src = `./Signs/animated/${word[i]}.gif`
                }
                await delay(1000)
            }
            output.src = './Signs/black.jpg'
        }

    }

    converter = false
}