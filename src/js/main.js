

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
    center: [55.763958, 37.608756],
    zoom: 13.3
  }),

    myPlacemark1 = new ymaps.Placemark([55.771275, 37.636540], {
      balloonContent: 'Маленькая иконка'
    }, {
      iconLayout: 'default#image',
      iconImageClipRect: [[0, 0], [12, 12]],
      iconImageHref: '../images/mapDot.png',
      iconImageSize: [12, 12],
    });

  myMap.geoObjects.add(myPlacemark1)

}

// 







const btnHeader = document.querySelectorAll('.header__btn')[0]
const form = document.querySelectorAll('.header__form')[0]
const list = document.querySelectorAll('.header__list')[0]
const listTwo = document.querySelectorAll('.header__containerTwo')[0]
const btnClose = document.querySelectorAll('.header__btnclose')[0]



const btn = document.querySelectorAll('.main__containertwobtnbleack')[0]
btn.addEventListener('click', function (e) {
  e.preventDefault();
  const inp = document.querySelectorAll('.main__containertwolabelinp')[0]
  if (inp.value === "") {
    inp.style = "border: 1px solid #F06666;"
    inp.insertAdjacentHTML('beforebegin', '<p class="errinpone">Недопустимый формат</p>')
  }
  if (inp.value !== "") {
    const err = document.querySelectorAll('.errinpone')[0]
    err.style = "display: none"
  }
})

const inptext = document.querySelectorAll('.main__containerfourtext')[0]
inptext.parentElement.innerHTML = '<p style="height: 0;"></p><textarea class="textaria" placeholder="Комментарий" name="text"></textarea>'


const btnTwo = document.querySelectorAll('.main__containerfourbtn')[0]
const inpOne = document.querySelectorAll('.main__containerfourname')[0]
const inpTwo = document.querySelectorAll('.main__containerfouremail')[0]
const inpThree = document.querySelectorAll('.textaria')[0]


btnTwo.addEventListener('click', function (e) {
  e.preventDefault();
  if (inpOne.value === "") {
    inpOne.style = "border: 1px solid #F06666;"
  }
  if (inpOne.value !== "") {
    inpOne.style = "border: none;"
  }
  if (inpTwo.value === "") {
    inpTwo.style = "border: 1px solid #F06666;"
  }
  if (inpTwo.value !== "") {
    inpTwo.style = "border: none;"
  }
  if (inpThree.value === "") {
    inpThree.style = "border: 1px solid #F06666;"
  }
  if (inpThree.value !== "") {
    inpThree.style = "border: none;"
  }


 let inpNameOne = '.main__containerfourname'

function err(inpNameOne) {
let inpName = document.querySelectorAll(inpNameOne)[0]
if(inpName.value !== "") {
  if(inpName.parentElement.children[1].classList[0] === 'errBottomInp') {
    inpName.parentElement.children[1].classList.add('errNone')
  }
}
let errs = inpName.parentElement.children[1]

  if (inpName.value === "" && errs.classList.contains('errBottomInp') !== true) {
    inpName.insertAdjacentHTML('beforebegin', '<p class="errBottomInp">Недопустимый формат</p>')
    inpName.style = "border: 1px solid #FF3030"
  }
}
err(inpNameOne)
let inpNameOnes = '.main__containerfouremail'
err(inpNameOnes)

let inpNameOnestextaria = '.textaria'
err(inpNameOnestextaria)


const str = inpOne.value
let inpName = document.querySelectorAll('.main__containerfourname')[0]
  let regexps = /[^a-zа-яё]/gi;
  console.log(str.search(regexps));
 if (str.search(regexps) !== -1 || inpName.value  === "") {
  inpName.insertAdjacentHTML('beforebegin', '<p class="errBottomInp">Недопустимый формат</p>')
  inpName.style = "border: 1px solid #FF3030"
  }
  else {
    let noerr = inpName.parentElement.querySelectorAll('.errBottomInp')
   for(let i = 0; i< noerr.length; i++) {
    noerr[i].classList.add('errNone')
   }
    }
})


const textLengOne = document.querySelectorAll('.main__containerthreelistone')[0]
const textLengTwo = document.querySelectorAll('.main__containerthreelisttwo')[0]
const textLengThree = document.querySelectorAll('.main__containerthreelistthree')[0]
const tel = document.querySelectorAll('.main__containerfourp')[0]
const telNone = document.querySelectorAll('.main__containerfourphons')[0]
const ul = document.querySelectorAll('.header__list')[0]
const footer = document.querySelectorAll('.footer__containerfivepcentr')[0]
const clinerKard = document.querySelectorAll('.main__containerfourbtnone')[0]
const hesder = document.querySelectorAll('.header')[0]
function breackPoints() {

  clinerKard.addEventListener('click', function () {
    clinerKard.parentElement.style = "transform: translateX(-900px);"
  })


  if (window.innerWidth <= 530) {
    listTwo.style = "transform: translateX(0); padding-top: 15px; padding-bottom: 11px;padding-left: 20px;"
    const delBtnsis = document.querySelectorAll('.delBtn')[0]
    if (delBtnsis === undefined) {
      listTwo.insertAdjacentHTML('afterbegin', '<button class="delBtn"></button>')

      listTwo.children[1].style = "transform: translateX(-300%); height: 0; padding: 0;"
      btnHeader.addEventListener('click', function () {
        form.classList.remove('header__form')
        list.style = "display: none;"
      })
      btnClose.addEventListener('click', function () {
        form.classList.add('header__form')
      })
    }
    
    const delBtns = document.querySelectorAll('.delBtn')[0]
    delBtns.addEventListener('click', function () {
      listTwo.children[1].style = "transform: translateX(0);"
      listTwo.children[1].classList.add('header__MobilList')
      delBtns.style = "transform: translateX(-300%);"
      if (delBtnsis === undefined) {
      listTwo.insertAdjacentHTML('beforeend', '<button class="header__btncloseBoorger btnreset"></button>')
      listTwo.insertAdjacentHTML('afterend', '<p class="main__containerfourphone main__containerfourphoneMobil"><a class="main__containerfourphon" href="tel:+749542423532">+7 495 424-23-532</a></p>')
      }
      hesder.style = "padding-bottom: 33px;"
      listTwo.style = " background-color: #202020;transform: translateX(0);"
      const closeBtn = document.querySelectorAll('.header__btncloseBoorger')[0]

      closeBtn.addEventListener('click', function () {
        listTwo.children[1].style = "transform: translateX(-300%); height: 0; padding: 0;"
        listTwo.children[1].classList.remove('header__MobilList')
        delBtns.style = "transform: translateX(0);"
        const oneInner = document.querySelectorAll('.header__btncloseBoorger')[0]
        const twoInner = document.querySelectorAll('.main__containerfourphoneMobil')[0]
        console.log(oneInner.parentElement);
        oneInner.parentElement.removeChild(oneInner)
        twoInner.parentElement.removeChild(twoInner)
        hesder.style = "padding-bottom: 0px;"
        listTwo.style = "background-color: #4A4A4A; transform: translateX(0%); max-height: 47px; padding-top: 15px; padding-bottom: 11px;padding-left: 20px;"
      })
    })


  }
  if (window.innerWidth > 530 && window.innerWidth <= 820) {
    footer.style = "display: none;"
    listTwo.style = "transform: translateX(0);"
    list.style = "display: none;"
    listTwo.children[0].style = "padding-left: 0;padding-right: 0;"
    const delBtn = document.querySelectorAll('.delBtn')[0]
    listTwo.children[0].style = "transform: translateX(0px);"
    if (delBtn !== undefined) {
      delBtn.style = "display: none;"
      listTwo.innerHTML = '<ul class="header__list listreset" style="transform: translateX(0px);"><li class="header__item"><a class="header__link" href="#one">О студии</a></li><li class="header__item"><a class="header__link" href="#two">Наши проекты</a></li><li class="header__item"><a class="header__link" href="#three">Услуги</a></li><li class="header__item"><a class="header__link" href="#four">Мастер-классы</a></li><li class="header__item"><a class="header__link" href="#five">Контакты</a></li></ul>'
    }
    btnHeader.addEventListener('click', function () {
      form.classList.remove('header__form')
    })
    listTwo.style = "transform: translateX(0);"
    btnClose.addEventListener('click', function () {
      form.classList.add('header__form')
    })
  }


  if (window.innerWidth >= 820) {
    telNone.style = "transform: translateX(-300%);"
    btnHeader.addEventListener('click', function () {
      form.classList.remove('header__form')
      listTwo.style = "transform: translateX(0);"
      list.style = "transform: translateX(-300%);"
    })
    btnClose.addEventListener('click', function () {
      form.classList.add('header__form')
      listTwo.style = "transform: translateX(0%);"
      list.style = "transform: translateX(-300%);"
    })
  }


  if (window.innerWidth <= 1400 && window.innerWidth > 820) {

    tel.innerHTML = '107045, Москва, Даев переулок, ' + '<br>' + 'дом 41, бизнес-центр «Даев Плаза»,' + '<br>' + 'этаж 8, офис № 82'
    tel.insertAdjacentHTML('beforeend', '<p class="main__containerfourphone"><a class="main__containerfourphon" href="tel:+749542423532">+7 495 424-23-532</a></p>')
    telNone.innerHTML = ""
    btnClose.addEventListener('click', function () {
      listTwo.style = "transform: translateX(-300%);"
      list.style = "transform: translateX(0%);"
    })
  }


  if (window.innerWidth > 1400) {
    tel.innerHTML = '107045, Москва, Даев переулок, ' + '<br>' + 'дом 41, бизнес-центр «Даев Плаза»,' + '<br>' + 'этаж 8, офис № 82'
    tel.insertAdjacentHTML('beforeend', '<p class="main__containerfourphone"><a class="main__containerfourphon" href="tel:+749542423532">+7 495 424-23-532</a></p>')
    btnClose.addEventListener('click', function () {
      listTwo.style = "transform: translateX(-300%);"
      list.style = "transform: translateX(0%);"
    })
  }
}



window.onload = function () {
breackPoints()
};
var oldWidth = window.innerWidth;
window.onresize = function () {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    breackPoints()
  }
};


// осталось: 
// 4) на валидности даже предупреждений не должно быть