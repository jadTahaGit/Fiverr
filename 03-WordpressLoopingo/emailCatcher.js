const btnThatOpensTheForm = document.querySelector(
  '.button',
  '.chargebee-button'
);

if (btnThatOpensTheForm) {
  console.log('btnThatOpensTheForm exists');
  // grab the btnThatOpensTheForm & add listner on it
  btnThatOpensTheForm.addEventListener('click', () => {
    console.log('btnThatOpensTheForm is clicked');
    if (isFormOppened()) {
      console.log('form is opened');
      //wait till form is fully Loaded
      getForm().addEventListener('load', () => {
        console.log('form is fully Loaded');
        // grab the first Btn & add a listner on it:
        if (doesFormBtnExist()) {
          getBtn().addEventListener('click', () => {
            console.log('first Btn is clicked!');
            // grab the Submit Btn & add a listner on it:
            if (doesEmailInputExist() && doesFormBtnExist()) {
              getBtn().addEventListener('click', () => {
                console.log('Submit Btn is clicked');
                console.log('submitted: ' + getEmailValue());
                //setCookie('email', getEmailValue(), 1);
              });
            }
          });
        }
      });
    }
  });
}

function isFormOppened() {
  if (!document.querySelector('.cb-hp__wrapper')) {
    console.log('form does not exist');
    return false;
  }
  console.log(document.querySelector('.cb-hp__wrapper'));
  return true;
}

function getForm() {
  console.log(document.querySelector('.cb-hp__wrapper'));
  return document.querySelector('.cb-hp__wrapper');
}

function isFormFullyLoaded() {
  if (!document.querySelector('.cb-hp__wrapper')) {
    return false;
  }
  return true;
}

function doesEmailInputExist() {
  if (!document.querySelector('#email', '.cb-text__control')) {
    return false;
  }
  return true;
}

function doesFormBtnExist() {
  if (document.querySelector('.cb-button')) {
    return true;
  }
  return false;
}

function getBtn() {
  if (document.querySelector('.cb-button')) {
    console.log('Form Btn is grabbed: ');
    console.log(document.querySelector('button', '.cb-button'));
    return document.querySelector('button', '.cb-button');
  }
}

function getEmailValue() {
  if (!document.querySelector('#email', '.cb-text__control')) {
    return -1;
  }
  return document.querySelector('#email', '.cb-text__control').value;
}

function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
