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

// let content = document.getElementById("link1")
// let show = document.getElementById("bio2")
// let hide = document.getElementById('close2');

// show.addEventListener("click", () => {
//     content.style.display = "flex"
// })

// hide.addEventListener("click", () => {
//     content.style.display = "none"
    
// })
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;
// проверка для существующих ссылок
if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++ ) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function(e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}
   

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++ ) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
  }
}

// -----функция открытия попапа--------

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup-content')) {
        popupClose(e.target.closest('.popup'));
    }
    });
  }
}


function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}


function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + 'px';
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
      body.style.paddingRight = lockPaddingValue;
      body.classList.add('lock');

      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
    }



function bodyUnLock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index ++) {
      const el = lockPadding[index];
      el.style.paddingRight = '0px';
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, 0);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
})


