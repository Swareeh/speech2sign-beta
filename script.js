const convert_btn = document.getElementById('convert_btn')
const output = document.getElementById('output')

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var converter = false

convert_btn.onclick = async function () {

    if (converter == true) {
        alert('Converter is already running.')
        return
    }

    converter = true
    var input_value = document.getElementById('input').value
    input_value = input_value.toUpperCase()

    for (let i = 0; i < input_value.length; i++) {

        if (input_value[i] == ' ') {
            output.src = `./Signs/black.jpg `
        } else {
            output.src = `./Signs/${input_value[i]}.jpg`
        }
        await delay(500)
    }

    converter = false
}
