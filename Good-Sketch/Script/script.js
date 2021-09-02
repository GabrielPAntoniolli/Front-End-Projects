/**
 * I developed two functions to interact with the buttons in the page 3 of my website, the first function "changeBgColor()"
 * is used to change the background color of the webpage to the color of the button the user decide to click.
 * and the other function removes the button after its clicked, made the because i was curious about how to do it.
 * 
 * I ended up deciding not to use the second function because its not very user friendly, 
 * considering that used might want to change back to the color later on.
 * in case you want to test that, just need to be called right after the changeBgColor() function.
 * cheers!
 */

function changeBgColor(color){

    document.body.style.background = color;

}
function removeButton(el){

    var element = el
    element.remove();
}