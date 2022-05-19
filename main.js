const btn1 = document.querySelector('.button__one'),
  btn2 = document.querySelector('.button__two'),
  btn3 = document.querySelector('.button__three'),
  btnReset = document.querySelector('.button__reset'),
  btnSetPass = document.querySelector('.button__setpass'),
  input = document.getElementById('name'),
  inputFull = document.querySelector('.top-input'),
  wrapper = document.querySelector('.wrapper'),
  body = document.querySelector('body');

let index = null;

function TFun() {
  if (document.getElementById('name').value == 'qwerty123') {
    inputFull.style.display = 'none';
    wrapper.style.display = 'block';
  } else {
    alert('Не верный ключ. Мда... пздц');
  }
}

btn1.addEventListener('click', () => {
  if (getComputedStyle(btn2).display == 'block') {
    btnOpen();
  } else {
    passCheck();
  }
});

btn2.addEventListener('click', () => {
  document.body.style.background = '#ff0000';
});

btn3.addEventListener('click', () => {
  document.body.style.background = '#fff000';
});

btnSetPass.addEventListener('click', () => {
  index = prompt('Зарегистрируйте пароль', '');
});

btnReset.addEventListener('click', () => {
  document.body.style.background = '#ffffff';
});

const passCheck = () => {
  if (getComputedStyle(btn2).display == 'inline-block') {
    btnOpen();
  } else {
    let pass = prompt('Введите пароль', '');

    if (pass == index) {
      btnOpen();
    } else {
      alert('Пароль не верный');
    }
  }
};

const btnOpen = () => {
  if (getComputedStyle(btn2).display == 'none') {
    btn2.style.display = 'inline-block';
    btn3.style.display = 'inline-block';
    btnReset.style.display = 'block';
    btn1.innerHTML = 'Выключить редактор фона';
  } else {
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btnReset.style.display = 'none';
    btn1.innerHTML = 'Включить редактор фона';
  }
};
