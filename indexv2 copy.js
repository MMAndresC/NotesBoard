const addButton = document.querySelector("#menu__add-button");
const noteList =[];

addButton.addEventListener('click',event =>{
    //Formulario para añadir el possit
    //Creo elementos
    const form = document.createElement('form'); 
    const inputLabelTitleForm = document.createElement('label');
    const inputTitleForm = document.createElement('input');
    const inputTextForm = document.createElement('textarea');
    const inputLabelTextForm = document.createElement('label');
    const buttonCancelForm = document.createElement('button');
    const buttonSaveForm = document.createElement('button');
    const divButtons = document.createElement('div');
    //Los añado al div
    form.appendChild(inputLabelTitleForm);
    inputLabelTitleForm.setAttribute('for', 'input-title');
    inputLabelTitleForm.innerText = "Titulo nota";
    form.appendChild(inputTitleForm);
    inputTitleForm.setAttribute('id', 'input-title');
    inputTitleForm.setAttribute('maxlength',  20);
    form.appendChild(inputLabelTextForm);
    inputLabelTextForm.setAttribute('for', 'input-text');
    inputLabelTextForm.innerText = "Descripcíon:";
    form.appendChild(inputTextForm);
    inputTextForm.setAttribute('id', 'input-text');
    inputTextForm.setAttribute('type','textarea');
    inputTextForm.setAttribute('rows',20);
    inputTextForm.setAttribute('cols',20);
    inputTitleForm.setAttribute('maxlength',  400);
    //inputTitleForm.required=true; //da problemas para cerrar con el cancel
    buttonSaveForm.innerText = "Grabar";
    buttonSaveForm.classList.add('form__buttons-add');
    divButtons.appendChild(buttonSaveForm);
    buttonCancelForm.innerText = "Cancel"; 
    buttonCancelForm.classList.add('form__buttons-cancel');
    divButtons.appendChild(buttonCancelForm);
    divButtons.classList.add('form__buttons');
    form.appendChild(divButtons);
    //Añado el div al header
    const header = document.querySelector('header');
    header.appendChild(form);
    form.classList.add('form__add');
    addButton.disabled=true;
    //Boton de cancelar formulario
    buttonCancelForm.addEventListener('click', event =>{
        //inputTextForm.required = false;
        //form.remove(); //parece que no hace falta
        addButton.disabled=false;
    })
    //Boton para salvar los datos del formulario en la array
    buttonSaveForm.addEventListener('click', event =>{
        const note = {
            title:'',
            note:''
        };
        note.title = inputTitleForm.value;
        note.note = inputTextForm.value;
        noteList.push(note);
        addButton.disabled=false;
    })
    
})






