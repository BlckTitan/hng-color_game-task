Stage 1 - Frontend Intern Task: Color Game

Task Requirements

Languages
- HTML, CSS, and Vanilla JavaScript or React
Game Requirements

Color Display:
- Display a box with a randomly selected color, this will be the target color for the game.
- Attribute: data-testid="colorBox"
- Color Options:

Display 6 color buttons, each representing a potential guess for the target color.
- Each button should have a background color corresponding to a possible guess.
- Attribute: data-testid="colorOption"

Game Instructions:
- Display a message explaining the goal of the game (e.g., “Guess the correct color!“).
- Attribute: data-testid="gameInstructions"

Game Status:
- After each guess, display whether the guess is correct or wrong.
- Attribute: data-testid="gameStatus"

Score:
- Display a score counter that increments for each correct guess.
- Attribute: data-testid="score"

New Game Button:
- Include a button to reset the game and start a new round.
- Attribute: data-testid="newGameButton"

Styling and Design
- The game should have an engaging and user-friendly interface.
- Buttons should be large and easy to click.
- Use contrasting colors to differentiate between the target color and the options.
- Use CSS for animations when showing game results (e.g., fade-out effect for wrong answers or celebration for correct ones).
- The design must be responsive and adapt to various screen sizes (desktop, tablet, mobile).

Functionality
- Randomly select a color from a predefined set and display it as the target color.
- Implement the functionality for the player to click on the color buttons and check if they guessed correctly.
- Dynamically update the score and display messages based on the player’s guesses.
- Ensure that the new game button correctly resets the game to its initial state.

Implementation Details:
- The player will not see a hex code; they will only see the color itself.
- The six color options will also have background colors, and the player must select the one that matches the colorBox.


Live Link https://blcktitan.github.io/hng-color_game-task/
