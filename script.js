// ✅ Step 1: Wait for the document to load before running any jQuery
$(document).ready(function() {

    //  Step 2: When the "Update Message" button is clicked, change the H1 text
    //  Use a jQuery selector to target the button by its ID
    //  Use the .text() method to update the text of the H1
    //  Look at: https://www.w3schools.com/jquery/jquery_html_text.asp
    $("#change-text").click(function(){
        $("#box").text("HI WORLD!!!!");
      });
    
    //  Step 3: When the "Toggle Message Box" button is clicked, show/hide the #box
    //  Use .fadeToggle() to create a smooth transition effect
    //  Look at: https://www.w3schools.com/jquery/jquery_fade.asp
    $("#toggle-box").click(function(){
        $("#box").show();
      });
    
  
    //  Step 4: When the #box is hovered over, change its background color and border
    //  Use .hover() with two functions: one for mouseover and one for mouseout
    //  Use .css() to change the box styles
    //  Look at: https://www.w3schools.com/jquery/jquery_css.asp
    $("#box").mouseover(function(){
        $("#box").css("background-color", "magenta");
        $("#box").css("border", '10px dotted blue');
      });
    $("#box").mouseout(function(){
        $("#box").css("background-color", "#d0e0f0");
        $("#box").css("border", '2px solid #777');
      });
  
    //  Step 5: When "Add New Message" button is clicked, add a new <p> to the #box
    //  Use .append() to insert a new paragraph
    //  You can insert plain text or an HTML string
    //  Look at: https://www.w3schools.com/jquery/jquery_dom_add.asp
    $("#add-message").click(function(){
        $("#box").append("<p>P ADDED!</p>");
      });
  
  
    //  Step 6: EXTENSION — Create a dropdown in your HTML for font selection
    //  Create a <select> element with several <option> values (e.g., Arial, Georgia)
    //  Give it the ID #font-select
    //  Look at: https://www.w3schools.com/tags/tag_select.asp
  
    //  Step 7: EXTENSION — Create an <input> where users can enter font size (e.g., "24px")
    //  Give it the ID #font-size-input and add a button with ID #apply-font
  
  
  
    //  Step 8: EXTENSION — When "Apply Font Settings" is clicked:
    //  Use .val() to get the dropdown and input values
    //  Use .css() to apply those values to the #box
    //  Look at: https://www.w3schools.com/jquery/jquery_dom_get.asp
    $("#apply-font").click(function(){
      let fontFam = $("#font-select").val();
      let fontSize = $("#font-size-input").val() + "px";
      console.log(fontFam)
      $("#box").css({ "font-size":fontSize});
      $("#box").css({"font-family": fontFam});
    });
  });