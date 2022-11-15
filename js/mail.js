$('input[name="Имя"]').on('input', function(){  
  this.value = this.value.replace(/[^а-яё\s]/gi, '');  
});

$('textarea').on('input', function(){  
  this.value = this.value.replace(/[^a-zа-яё0-9\.\,\s]/gi, '');
});

// inputmask
const form2 = document.querySelector('#project_form');
const form3 = document.querySelector('#calculation_form');

const validation1 = new JustValidate('#consult_form');
const validation2 = new JustValidate('#project_form');
const validation3 = new JustValidate('#calculation_form');

const telSelector2 = form2.querySelectorAll('input[type="tel"]');
const inputMask2 = new Inputmask('+7 (999) 999-99-99');
inputMask2.mask(telSelector2);

const telSelector3 = form3.querySelector('input[type="tel"]');
const inputMask3 = new Inputmask('+7 (999) 999-99-99');
inputMask3.mask(telSelector3);
//const successModal = $('#success_modal');

validation1
  .addField('.consult-email', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email обязателен',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный Email',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    /*parent.jQuery.fancybox.getInstance().close();
    $.fancybox.open(successModal);
    event.target.reset();*/
    document.location.href = 'spasibo';
  });

validation2
  .addField('.project-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите 3 и более символов',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Максимум — 15 символов',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Имя обязательно'
    }
  ])
  // .addField('.project-email', [
  //   {
  //     rule: 'required',
  //     value: true,
  //     errorMessage: 'Email обязателен',
  //   },
  //   {
  //     rule: 'email',
  //     value: true,
  //     errorMessage: 'Введите корректный Email',
  //   },
  // ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    const email = document.querySelector('#email');
    const whatsapp = document.querySelector('#whatsapp');
    const telegram = document.querySelector('#telegram');

    if(email.value === '' && whatsapp.value === '' && telegram.value === '') {
      xhr.abort();
      alert('*Выберите хотя бы один, удобный для вас, способ связи')
    } else {
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      document.location.href = 'spasibo';
    }
  });

validation3
  .addField('.calculation-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите 3 и более символов',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Максимум — 15 символов',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Имя обязательно'
    }
  ])
  // .addField('.calculation-tel', [
  //   {
  //     rule: 'required',
  //     value: true,
  //     errorMessage: 'Телефон обязателен',
  //   },
  //   {
  //     rule: 'function',
  //     validator: function() {
  //       const phone = telSelector3.inputmask.unmaskedvalue();
  //       return phone.length === 10;
  //     },
  //     errorMessage: 'Введите корректный телефон',
  //   },
  // ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();
    const getEmail = document.querySelector('#calculation-email');
    const getTel = document.querySelector('#calculation-tel');
    const getFile = document.querySelector('#myfile');
    const getTextarea = document.querySelector('#form_textarea');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }
    if(getEmail.value === '' && getTel.value === '' ) {
      alert('Заполните e-mail или телефон')
      xhr.abort()
    }else if(getFile.value === '' && getTextarea.value === '') {
      alert('Вы забыли загрузить файл или оставить комментарий')
      xhr.abort()
    }  else {
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
    document.location.href = 'spasibo/index.html';

      console.log('отправилось');
    }
  });
  const form = document.querySelector('#calculation_form')
//     const getFile = document.querySelector('#myfile');
//     const getTextarea = document.querySelector('#form_textarea');
//     form.addEventListener('submit', (e)=> {
//         if(getFile.value === '' && getTextarea.value === '') {
//           e.preventDefault()
//             alert('Вы забыли загрузить файл или оставить комментарий')
//         } else {
//             console.log('отправилось');
//         }

//     })