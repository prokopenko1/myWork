// const iconMenu = document.querySelector('.menu_icon');
// const menuBody = document.querySelector('.menu-body');


//     iconMenu.addEventListener("click", function(e) {
//         // document.body.classList.toggle('_lock');
//         iconMenu.classList.toggle('active');
//         iconBody.classList.toggle('active');
//     });

    const menuBtn = document.querySelector('.menu-body');
    const menu = document.querySelector('.menu_icon');
    
    menu.addEventListener('click', function(){
        document.body.classList.toggle('_lock');
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
// прогрессбар

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}