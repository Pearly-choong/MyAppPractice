console.log('test');


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.getElementById('closeNav').addEventListener("click",function(){
  closeNav();
});

document.getElementById('openNav').addEventListener("click",function(){
  openNav();
});
