//get the menu element
var menu = document.getElementById("menu");
 
//get all nav items with class="nav-item" inside the menu
var nav_items = document.getElementsByClassName("nav-item");

//loop through the nav items and add active class to the current/click item
for(var i = 0; i < nav_items.length; i++){
    nav_items[i].addEventListener("click", function(e){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        e.target.className += " active";
    });
}

//change taggler icon (on click)
$(".navbar-toggler").on("click", function(){
    $(this).find($(".navbar-toggler-icon")).toggleClass('navbar-toggler-open-icon navbar-toggler-close-icon');
});