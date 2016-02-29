What elements should we create variables for?
* newEntry (#newEntry)
* total (#total)
* entries (#entries)
* the form (#entry)

What events should we listen for?
* onKeyDown for "enter" or keyPress (e)
OR
* Form submission << Probably choose this option

What elements need to be created?
* <tr>
    <td></td>
    <td> entry </td>
  </tr>

How is user input handled?
* If positive, add it
* If negative, subtract it
* If not a number, NaN

What do we need to keep track of?
* The user inputs

What can be calculated from the things we need to keep track of?
* New total

-----

Appending an element to another element
* .append()
'''
$( ".inner" ).append( "<p>Test</p>" );
<h2>Greetings</h2>
<div class="container">
  <div class="inner">
    Hello
    <p>Test</p>
  </div>
  <div class="inner">
    Goodbye
    <p>Test</p>
  </div>
</div>
'''

Updating the HTML for an element
* .html("the new value inside the HTML")

Reading the HTML from an element
* .html()

Listening to events
* .on("submit")
OR
* .submit()

Creating a new element
* $("<div></div>")

Get value of input
* .val()

----

// when the user submits the form:
  // bonus: check to make sure it's a number
  // get input
    // make sure decimals work // parseFloat
  // add input to an array of entries
  // create a new row
    // create two tds
    // second td contains input value
    // add the row to the table
  // calculate total
    // update html for the total, include $
  // clear the input
