// $('.page-link').click(function() {
//     var anchor = $(this).attribute('dest');
//     console.log(anchor)
//     $('html, body').animate(
//       {
//         scrollTop: $('#' + anchor).offset().top
//       },
//       400
//     );
//   });
document.getElementsByClassName("page-link")[0].addEventListener("click", displayDate);
console.log(document.getElementsByClassName("page-link")[0]);
const contact=document.getElementById("contact")
function displayDate(){
    var anchor=contact.offsetTop;
    console.log(anchor)
    window.scroll({
        top:anchor,
        left:0,
        behavior:"smooth"
    });
    
}