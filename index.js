const addButton = document.querySelector("#menu__add-button");
addButton.addEventListener('click',event =>{
    //Formulario para añadir el possit
    //Creo elementos
    const form = document.createElement('form'); 
    const inputLabelTitleForm = document.createElement('label');
    const inputTitleForm = document.createElement('input');
    const inputTextForm = document.createElement('input');
    const inputLabelTextForm = document.createElement('label');
    const buttonCancelForm = document.createElement('button');
    const buttonSaveForm = document.createElement('button');
    const divButtons = document.createElement('div');
    //Los añado al div
    form.appendChild(inputLabelTitleForm);
    inputLabelTitleForm.setAttribute('for', 'input-title');
    form.appendChild(inputTitleForm);
    inputTitleForm.setAttribute('name', 'input-title');
    form.appendChild(inputLabelTextForm);
    inputLabelTextForm.setAttribute('for', 'input-text');
    form.appendChild(inputTextForm);
    inputTextForm.setAttribute('name', 'input-text');
    divButtons.appendChild(buttonCancelForm);
    divButtons.appendChild(buttonSaveForm);
    form.appendChild(divButtons);
    //Añado el div al header
    const header = document.querySelector('header');
    header.appendChild(form);
    form.classList.add('form__add');
})





