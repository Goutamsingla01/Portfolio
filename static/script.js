function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  let drop=document.getElementById("myDropdown");
function dropdownmenu() {
  if(drop.style.opacity == 0){
    drop.style.opacity = 1;
  }
  else{
        drop.style.opacity = 0;
  }
}