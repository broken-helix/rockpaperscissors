# **Rock, Paper, Scissors**
## **Site Overview**

Rock, Paper, Scissors is an interactive site, containing a version of the classic 'Rock, Paper, Scissors' game.
The game is designed to be played by a single player, with the computer playing the opponent.
Once the player selects an option, the computer selects a random choice and the selections are compared to see who won.
The site increments the scores of player and computer and uses a colour system to highlight the winner and loser.
An alert box provides users with a guide on how to play the game.

[View the live project here](https://broken-helix.github.io/rockpaperscissors/).

![Responsive Screenshot](/docs/am-i-responsive.jpg)
***

## Table of contents:
1. [**Site Overview**](#site-overview)
1. [**Planning stage**](#planning-stage)
    * [***Wireframes***](#wireframes)
    * [***Target Audiences***](#target-audiences)
    * [***User Stories***](#user-stories)
    * [***Site Aims***](#site-aims)
    * [***Color Scheme***](#color-scheme)
    * [***Typography***](#typography)
1. [**Current Features**](#current-features)
    * [***Page Title***](#page-title)
    * [***Game Area***](#game-area)
    * [***Images***](#images)
    * [***Controls Area***](#controls-area)
    * [***Choices Area***](#choices-area)
    * [***Game State Area***](#game-state-area)
    * [***Scores***](#scores)
    * [***Game Result:***](#game-result)
    * [***Information Area***](#information-area)
    * [***How To Play Button***](#how-to-play-button)
    * [***Reset Button***](#reset-button)
1. [**Future-Enhancements**](#future-enhancements)
1. [**Testing Phase**](#testing-phase)
1. [**Deployment**](#deployment)
1. [**Tech**](#tech)
1. [**Credits**](#credits)
    * [**Honorable mentions**](#honorable-mentions)
    * [**General reference**](#general-reference)
    * [**Content**](#content)
***

## **Planning stage**

### **Wireframes:**

Wireframes were used to plan out the design of the site on desktop and mobile devices.

![Desktop Wireframe](/docs/rockpaperscissorsdesktopwireframe.jpg)

![Mobile Wireframe](/docs/rockpaperscissorsmobilewireframe.jpg)
***

### **Target Audiences:**

* People who want to learn about the game of Rock, Paper, Scissors.
* People who want to play a simple game of chance.
* Younger children who want to experience a simple, easy-to-play game.
***

### **User Stories:**

* As a user, I want to be able to play the game.
* As a user, I want the process of playing the game to be intuitive.
* As a user, I want to believe the game is one of chance.
* As a user, I want to be able to easily share the game with friends.
***

### **Site Aims:**

* To introduce the user to the Rock, Paper, Scissors game.
* For playing the game to be simple and intuitive.
* To keep a record of the total score.
* To provide the user with a clear indication of who won.
* To build an interactive site using HTML, CSS and Javascript.
***

### **Color Scheme:**

The color scheme was designed to incorporate green and red, to indicate win and loss results, along with complementary colors.
Colors were selected using the coolors color palette generator.  <br><br>

![Coolors Palette](/docs/rock-paper-scissors-screenshot.jpg)
***

## **Typography**

* The font used throughout the game was selected from Google Fonts.
* A retro style computer font was desired, but most options seemed quite pixelated, so Smooch sans was selected for it's more modern and smoother representation.

![Font selection](/docs/smooch-sans-font.jpg)
***

## **Current Features**

#### *Page Title:*

* The page title clearly indicates to the user what the site is about, in the choice of words and positioning at the top of the page, outside of the game area. A seperate colour was used to separate it from the game itself.

![Page Title](/docs/title.jpg)

#### *Game Area:*

* The game area holds all the elements required to play the game and display the outcome and points.  It narrows as the screen sizes increase, to avoid filling the screen with large areas to the left and right hand sides, with no content.

![Game Area](/docs/desktop-view.jpg)

#### *Images:*

* To illustrate the available options and choices, the following icons from FontAwesome are employed within the borders of buttons and other elements on the page.
* [Question Mark](https://fontawesome.com/icons/question?s=solid&f=classic)
* [Rock Symbol](https://fontawesome.com/icons/hand-back-fist?s=regular&f=classic)
* [Paper Symbol](https://fontawesome.com/icons/hand?s=regular&f=classic)
* [Scissors Symbol](https://fontawesome.com/icons/hand-scissors?s=regular&f=classic)

#### *Controls Area:*

* The Control Area invites the player to select a weapon, contains three horizontally aligned buttons containing different symbols, representing the options of Rock, Paper or Scissors.  Titles for the options are listed below the buttons.  When the player selects an option, further selections are disabled until the game result is displayed and the button image turns green to feedback that the selection has been made.  Buttons return to the default state once they are reactivated.

![Control Area](/docs/buttons.jpg)
​
#### *Choices Area:*

* The Choices area displays the choices made for the current game.  Initially two question mark symbols are displayed.

![Choices Area](/docs/choices-default.jpg)

* When the player selects an option from the buttons in the controls area, the selection replaces the question mark in the Player Choice element.

![Player Choice](/docs/choice-player-selection.jpg)

* After a short delay, the computer's random selection is displayed and the game completes, showing the colours corresponding to the game result.  Draw's or Tie's are displayed in a blue-green colour.

![Computer Choice](/docs/choice-computer-selection.jpg)

* Win and loss games display red and green for the separate choice icons.

![Win Lose Choice](/docs/choice-win-lose.jpg)

#### *Game State Area:*

* The Game State area holds the scores and a central game result element, which shows whether the game was won, lost or drawn from the player's aspect once a game is initiated and the computer choice has been displayed.

![Game State Area](/docs/game-state-area-default.jpg)

#### *Scores:*

* The scores increment each time there is a win or loss game and change colour to show green for the opponent who is losing or green for winning.  The scores do not change colour if there is a draw and no score has been registered yet.

![Win Loss State](/docs/game-state-area.jpg)

![Draw No-Score Event](/docs/points-draw-nil-nil.jpg)

![Draw No-Score Event](/docs/points-draw-state.jpg)

#### *Game Result:*

* The game result element shows a question mark when the page loads and as soon as a controls area button is pressed.  It then displays a text and colour indication of whether the game was won, lost or drawn.

![Game Result Options](/docs/game-state-displays.jpg)
​
#### *Information Area:*

* The information area, at the bottom of the game area, holds the buttons to reset the game back to the default state and to bring up an alert box which tells the player how to play the game and what the winning options are.

#### *How To Play Button:*

* The 'how to play' button uses an 'onclick' call in the html to call the function which displays the alert.  Sweet Alert 2 was installed to handle the alert.

![Sweet Alert Box](/docs/sweetalert2-box.jpg)

#### *The Reset Button:*

* The reset button is activated via an event listener, which then resets the symbols, scores and colours to their default state.

## **Future-Enhancements**

* Allow the user to select a set number of games, as a 'best of x turns' game.
* Make the game appear fairer to the user by limiting the number of excess computer wins.
* Make player and computer choice elements spin around Y-axis before displaying the result.
* Make game playable for two human players.
***

## **Testing Phase**

* Responsiveness - A mobile-first approach was used to develop the site, using the iPhone 12 profile in Chrome dev tools.  The site was tested for responsiveness on different screen sizes throughout the development stages, using chrome dev tools, which allowed the page to be adjusted to display on small and large screen sizes with media queries.  The site was also tested using firefox on a desktop, on an android mobile phone using chrome, on an ipad and iphone 6 using safari and designed to display correctly.
​
* Functionality - Each button has been pressed to make sure it applies the correct result.  All possible combinations have been tested to ensure the colours display correctly.  The reset button was tested to make sure all colors returned to black, symbols returned to defaults and scores returned to 0.  After resets, the game has been tested to make sure it continues to be playable.  The game info button was tested to make sure the alert box appeared and could be closed again.  The game was also given to a five year old, who played nearly 100 games on an ipad, highlighting the need to reduce the wait time for the game result, and was sent to family and friends who reported no issues using the game.

* Contrast - The contrast on the page was checked using the WCAG Color contrast checker plugin in chrome and found to pass the tests, after adjustments to the colours and background and restricting colour changes to the inner parts of the elements and not the borders.

![WCAG Color Contrast Results](/docs/wcag-contrast-check.jpg)

* Lighthouse - The site was checked using the Lighthouse chrome plugin and found to pass the tests.

![Lighthouse Desktop Results](/docs/lighthouse-desktop.jpg)

![lighthouse Mobile Results](/docs/lighthouse-mobile.jpg)
​
* Validators - The W3C validator was used to check both HTML and CSS, with the only error found that the validator didn't validate the google scripts code at the top of the CSS file.  JShint was utilised to check the javscript and some minor errors were found which do not affect the functionality of the site.

![HTML Validator](/docs/html-validation.jpg)

![CSS Validator](/docs/css-validation.jpg)

![CSS Validator Error](/docs/css-validation-error.jpg)

![JS Validator Error](/docs/jshint-result.jpg)
***

## **Bugs**

* Issue - When checking the site on an ipad, the buttons were displayed in blue and partial colour changes were noted on the choices elements.
* Cause - It appears that safari requires the color to be explicitly expressed in the relevant parts of the CSS, rather than just in the body and the blue portions were a fallback colour.
* Resolution -  The colours were specified in the relevant parts of the CSS.


* Issue - When testing the site on an ipad, the game area extended beyond the viewport when holding in landscape view.
* Cause - Chrome's dev tools did not precisely mimic the ipad.
* Resolution - Additional media queries were add to retrict the size on the iPad.
***

## **Deployment**

I deployed the page on GitHub pages via the following procedure:
​
1. From the project's [repository](https://github.com/broken-helix/rockpaperscissors), go to the **Settings** tab.
2. From the left-hand menu, select the **Pages** tab.
3. Under the **Source** section, select the **Main** branch from the drop-down menu and click **Save**.
4. A message is displayed to indicate a successful deployment to GitHub pages and provide the live link.
​
The live site can be found at the following URL - [Rock, Paper, Scissors](https://broken-helix.github.io/rockpaperscissors/).
***

## **Tech**
​
The following technologies were employed in the creation of the site:
​
- HTML
- CSS
- JS
- SweetAlert2
- Balsamiq Wireframes
***

## **Credits**

### **Honorable mentions**

* Once again, I would like to thank my mentor, Richard Wells, who gave me some great insights into javascript and kept me motivated.
***

### **Content:**

* Fonts were sourced from [Google Fonts](https://fonts.google.com/).

* Icons for the social media links and why fly section were sourced from [Font Awesome](https://fontawesome.com/icons).

* The Sweet Alert box was installed from [Sweet Alert](https://sweetalert2.github.io/).

* Wireframes were created using the [Balsamiq Wireframes](https://balsamiq.com/wireframes/) application.