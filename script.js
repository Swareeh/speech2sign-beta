const convert_btn = document.getElementById('convert_btn')
const output = document.getElementById('output')


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

convert_btn.onclick = async function () {
    const input_value = document.getElementById('input').value

    for (let i = 0; i < input_value.length; i++) {

        i = String(i)

        if (input_value[i] == ' ') {
            output.src = `./Signs/black.jpg `
        } else {
            output.src = `./Signs/${input_value[i]}.jpg`
        }
        await delay(500)
    }
}