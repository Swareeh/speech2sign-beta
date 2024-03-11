
var input_value = 'HELLO HI'

const input_value_words = input_value.split(' ')

for (let i = 0; i < input_value_words.length; i++) {

    var word = input_value_words[i]
    // fadeIn(output)

    const dictionary = {
        'HAPPY': './Assets/Signs/animated/words/happy.gif',
        'HELLO': './Assets/Signs/animated/words/hello.gif',
        'HI': './Assets/Signs/animated/words/hi.gif',
        'GIPHY': './Assets/Signs/animated/words/giphy.gif',
        'DEAF': './Assets/Signs/animated/words/deaf.gif',
        'NO': './Assets/Signs/animated/words/no.gif',
        'AGAIN': './Assets/Signs/animated/words/again.gif',
        'KISS': './Assets/Signs/animated/words/kiss.gif',
        'ME': './Assets/Signs/animated/words/me.gif',
        'OKAY': './Assets/Signs/animated/words/okay.gif',
        'OK': './Assets/Signs/animated/words/okay.gif',
        'PLEASE': './Assets/Signs/animated/words/please.gif',
        'SORRY': './Assets/Signs/animated/words/sorry.gif',
        'YES': './Assets/Signs/animated/words/yes.gif',
        'YOU': './Assets/Signs/animated/words/you.gif',
    }



    if (word in dictionary) {
        let gif = dictionary[word]
        console.log(gif)
    }
}