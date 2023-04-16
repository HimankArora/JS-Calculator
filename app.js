let result = document.getElementById( 'input' )
console.log( result )
let calculate = ( number ) => {
    result.value += number
}

let Result = () => {
    try
    {
        result.value = eval( result.value )
    }
    catch ( err )
    {
        alert( "Enter valid input values" )
    }
}

let clr = () => {
    result.value = ""
}

let del = () => {
    result.value = result.value.slice( 0, -1 )
}

// document.getElementById( "one" ).onclick = () => {
//     textShown += '1'
//     document.getElementById( 'output' ).innerHTML = textShown
// }
// document.getElementById( "two" ).onclick = () => {
//     textShown += '2'
//     document.getElementById( 'output' ).innerHTML = textShown
// }
// document.getElementById( "three" ).onclick = () => {
//     textShown += '3'
//     document.getElementById( 'output' ).innerHTML = textShown
// }
// document.getElementById( "four" ).onclick = () => {
//     textShown += '4'
//     document.getElementById( 'output' ).innerHTML = textShown
// }
// document.getElementById( "five" ).onclick = () => {
//     textShown += '5'
//     document.getElementById( 'output' ).innerHTML = textShown
// }
// document.getElementById( "six" ).onclick = () => {
//     textShown += '6'
//     document.getElementById( 'output' ).innerHTML = textShown
// }
// document.getElementById( "seven" ).onclick = () => {
//     textShown += '7'
//     document.getElementById( 'output' ).innerHTML = textShown
// }
// document.getElementById( "eight" ).onclick = () => {
//     textShown += '8'
//     document.getElementById( 'output' ).innerHTML = textShown
// }
// document.getElementById( "nine" ).onclick = () => {
//     textShown += '9'
//     document.getElementById( 'output' ).innerHTML = textShown
// }
// document.getElementById( "zero" ).onclick = () => {
//     textShown += '0'
//     document.getElementById( 'output' ).innerHTML = textShown
// }
// document.getElementById( "dot" ).onclick = () => {
//     textShown += '.'
//     document.getElementById( 'output' ).innerHTML = textShown
// }

// document.getElementById( "clear" ).onclick = () => {
//     document.getElementById( 'output' ).innerHTML = "0"
// }
