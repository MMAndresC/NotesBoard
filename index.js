const addButton = document.querySelector("#menu__add-button");


    //Formulario para añadir el possit //Formulari no porque refresca la pagina
    //Creo elementos
    const divForm = document.createElement('div'); 
    const inputLabelTitleForm = document.createElement('label');
    const inputTitleForm = document.createElement('input');
    const inputTextForm = document.createElement('textarea');
    const inputLabelTextForm = document.createElement('label');
    const buttonCancelForm = document.createElement('button');
    const buttonSaveForm = document.createElement('button');
    const divButtons = document.createElement('div');
    //Los añado al div
    divForm.appendChild(inputLabelTitleForm);

    inputLabelTitleForm.setAttribute('for', 'input-title');
    inputLabelTitleForm.innerText = "Titulo: ";
    divForm.appendChild(inputTitleForm);
    inputTitleForm.setAttribute('id', 'input-title');
    inputTitleForm.setAttribute('maxlength',  20);

    divForm.appendChild(inputLabelTextForm);
    inputLabelTextForm.setAttribute('for', 'input-text');
    inputLabelTextForm.innerText = "Descripcíon: ";

    divForm.appendChild(inputTextForm);
    inputTextForm.setAttribute('id', 'input-text');
    inputTextForm.setAttribute('type','textarea');
    inputTextForm.setAttribute('rows',20);
    inputTextForm.setAttribute('cols',20);
    inputTextForm.setAttribute('maxlength',  400);

    buttonSaveForm.innerText = "Grabar";
    //buttonSaveForm.classList.add('form__buttons-add');//?
    divButtons.appendChild(buttonSaveForm);

    buttonCancelForm.innerText = "Cancel"; 
    //buttonCancelForm.classList.add('form__buttons-cancel');//?
    divButtons.appendChild(buttonCancelForm);

    divButtons.classList.add('form__buttons');

    divForm.appendChild(divButtons);

    //Añado el div al header
    const header = document.querySelector('header');
    header.appendChild(divForm);
    divForm.classList.add('form__add-disabled');

    const createButton = (url,classButton) => {
        const noteButton = document.createElement('button');
        const noteImg = document.createElement('img');
        noteButton.appendChild(noteImg);
        noteImg.setAttribute('src', url);
        noteButton.classList.add(classButton);
        return noteButton;
    }
    

const createNote = (text,description) => {
    const container = document.querySelector('main');
    const note = document.createElement('div');
    const noteTitle = document.createElement('input');
    const noteDescription = document.createElement('textarea');
    const noteMenu = document.createElement('nav');

    let button = createButton('./images/chincheta-transp.png', 'note-nav__button-remove');
    button.addEventListener('click', event =>{
        note.remove();
    })
    noteMenu.appendChild(button);
    button = createButton('./images/Edit_icon.svg','note-nav__button-edit');
    
    noteMenu.appendChild(button);
    note.appendChild(noteMenu);
    
    noteTitle.disabled = true;
    noteTitle.value = text;
    note.appendChild(noteTitle);

    noteDescription.disabled = true;
    noteDescription.value = description;
    note.appendChild(noteDescription);
    container.appendChild(note);
    note.classList.add('main__note');
}
    


addButton.addEventListener('click',event =>{
    inputTextForm.value = '';
    inputTitleForm.value = '';
    addButton.disabled=true;
    divForm.classList.remove('form__add-disabled');
    divForm.classList.add('form__add')
});

 

buttonCancelForm.addEventListener('click', event =>{
    addButton.disabled=false;
    divForm.classList.add('form__add-disabled');
    divForm.classList.remove('form__add')
})

buttonSaveForm.addEventListener('click', event =>{
    const note = {};
    note.title = inputTitleForm.value;
    note.note = inputTextForm.value;
    addButton.disabled=false;
    divForm.classList.add('form__add-disabled');
    divForm.classList.remove('form__add')
    createNote(note.title, note.note);
})


