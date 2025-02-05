// generate random color to display
const generateColor = () =>{
    // generate random color
    const letters = '0123456789ABCDEf'
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const displayRandomColorOnScreen = (color) =>{
    // display random color on the screen
    const displayTarget = document.getElementsByClassName("target_color")[0]
    displayTarget.style.backgroundColor = color
}

const generateColorOptions = () =>{
    // generate color options
    const targetColor = generateColor()
    // create an array of 5 colors
    const colorOptions = [...Array(5).fill(null).map(generateColor)]
    return {colorOptions, targetColor}
}

const displayColorOptions = () =>{
    let colorOptions = generateColorOptions()
    // get all the color options
    let buttonColorOptions = colorOptions.colorOptions
    // get the color to display on the screen
    const targetColor = colorOptions.targetColor

    displayRandomColorOnScreen(targetColor)

    const displayTarget = document.getElementsByClassName("option_button");
    
    buttonColorOptions = [targetColor, ...buttonColorOptions]
    buttonColorOptions = buttonColorOptions.sort(() => Math.random() - 0.5)
   
    
    Array.from(displayTarget).forEach((element, index) => {
        element.style.backgroundColor = buttonColorOptions[index], targetColor
    })
}
displayColorOptions()