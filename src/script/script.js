function displayList1(e) {
    e.preventDefault();
    $(".shop li").toggle();  
}
function displayList2(e) {
    e.preventDefault();
    $(".Services li").toggle(); 
}
function displayList3(e) {
    e.preventDefault();
    $(".Apple_Store li").toggle();   
}
function displayList4(e) {
    e.preventDefault();
    $(".val li").toggle();  
}
function dis(e) {
    e.preventDefault();
    $(".navlink").slideToggle();
   
}
$("#sl").on("click", displayList1);
$("#ser").on("click", displayList2);
$("#as").on("click", displayList3);
$("#av").on("click", displayList4);
$("#yes").on("click", dis)
