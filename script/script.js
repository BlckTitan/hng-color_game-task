let score = 0;

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
// display random color on the screen
const displayRandomColorOnScreen = (color) =>{
    // display random color on the screen
    const displayTarget = document.getElementsByClassName("target_color")[0]
    displayTarget.style.backgroundColor = color
}
// generate color options
const generateColorOptions = () =>{
    // generate color options
    const targetColor = generateColor()
    // create an array of 5 colors
    const colorOptions = [...Array(5).fill(null).map(generateColor)]
    return {colorOptions, targetColor}
}

// get the selected color
const getSelectedColor = () =>{
    // get the user selected color
   const selectedColor = document.getElementsByClassName('option_button')
    // get the status of the user choice
    const status = document.getElementsByClassName('status')[0]
    // remove animations
    status.classList.remove('correct_pick', 'wrong_pick')

    // Prevent duplicate event listeners by resetting elements
    Array.from(selectedColor).forEach((element) => {
        element.replaceWith(element.cloneNode(true)); // Removes all event listeners
    });
    
    //check if the user selected the correct color    
   Array.from(selectedColor).forEach((element) => {
    element.addEventListener('click', function checkChoiceStatus(e){
        const target_color = document.getElementsByClassName('target_color')[0].style.backgroundColor
        const selected_color = e.target.style.backgroundColor;

        // remove animations
        status.classList.remove('correct_pick', 'wrong_pick');

        if(selected_color === target_color){
            status.innerHTML = 'Correct';
            status.classList.add('correct_pick');
            status.style.backgroundColor = 'green';
            setTimeout(() => status.classList.remove("correct_pick"), 100);
            scoreboard(1);
        }else{
            status.innerHTML = 'Wrong';
            status.classList.add('wrong_pick');
            status.style.backgroundColor = 'red';
            setTimeout(() => status.classList.remove("wrong_pick"), 100);
            scoreboard(0)
        }
        
        displayColorOptions()
    })
   })
}

// display color options
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

// update the scoreboard
const scoreboard = (newScore) =>{
    const scoreboard = document.getElementsByClassName('scoreboard')[0]
    score += newScore
    scoreboard.innerHTML = score
}

//  reset game
const resetGame = () =>{
    score = 0;

    // reset scoreboard
    const scoreboard = document.getElementsByClassName('scoreboard')[0]
    scoreboard.innerHTML = 'Score';

     // reset the status
    const status = document.getElementsByClassName('status')[0]
    status.innerHTML = 'Status';
    status.style.backgroundColor = 'dodgerblue';

    // empty target color
    const displayTarget = document.getElementsByClassName("target_color")[0]
    displayTarget.style.backgroundColor = '';

    // empty all the color options
    const colorOptions = [...Array(6).fill(null)]

    // option buttons
    const optionButtonTarget = document.getElementsByClassName("option_button");

    Array.from(optionButtonTarget).forEach((element, index) => {
        element.style.backgroundColor = colorOptions[index]
    })

    // if there is no color to pick from deactivate all option buttons
    if(displayTarget.style.backgroundColor.length === 0){
        Array.from(optionButtonTarget).forEach((element) => {
            // Empty the color
            element.style.backgroundColor = ''; 
            // Remove all event listeners
            element.replaceWith(element.cloneNode(true));
        })
    }
    
}

const newGame = () =>{
    displayColorOptions()
    getSelectedColor()
}


// start the game
const startGame = () =>{
    const displayTarget = document.getElementsByClassName("target_color")[0]
    const startButton = document.getElementsByClassName('new_game')[0]
    const instructionText = document.getElementsByClassName('instruction_text')[0]

    startButton.addEventListener('click', () => {
        (displayTarget.style.backgroundColor.length === 0) ?
        (
            newGame(),
            instructionText.innerHTML = ''
        )
         : (
            resetGame(),
            instructionText.innerHTML = 'Click New Game to Begin'
        )
        
    })

    
}

startGame()