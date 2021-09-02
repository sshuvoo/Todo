let Selector = (selector) => document.querySelector(selector);

const input = Selector('#input'),
   form = Selector('form'),
   unsavedItem = Selector('.unsavedCon ul li p'),
   unsavedUl = Selector('.unsavedCon ul'),
   savedUl = Selector('.savedCon ul'),
   edit = Selector('.fa-edit'),
   save = Selector('.fa-save'),
   savedItem = Selector('.unsavedCon ul li p'),
   deleteIcon = Selector('.unsavedCon ul li i');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const liElement = document.createElement('li');
   const pElement = document.createElement('p');
   let inputValue = input.value;
   pElement.textContent = inputValue;
   const editElement = document.createElement('i');
   editElement.className = 'far fa-edit';
   const saveElement = document.createElement('i');
   saveElement.className = 'far fa-save';
   liElement.appendChild(pElement);
   liElement.appendChild(editElement);
   liElement.appendChild(saveElement);
   const finalUnsavedLi = unsavedUl.appendChild(liElement);
   editFunction(editElement, inputValue, finalUnsavedLi, pElement);
   saveFunction(saveElement, inputValue, finalUnsavedLi);
   input.value = '';
});

const editFunction = (editElement, inputValue, finalUnsavedLi, pElement) => {
   editElement.addEventListener('click', () => {
      const editableInput = document.createElement('input');
      editableInput.type = 'text';
      editableInput.className = 'editableInput';
      editableInput.value = inputValue;
      const finaleditableInput = finalUnsavedLi.appendChild(editableInput);
      editabeInputRemoved(finaleditableInput, pElement, inputValue);
   });
};

const editabeInputRemoved = (finaleditableInput, pElement, inputValue) => {
   finaleditableInput.addEventListener('change', () => {
      const finaleditableInputValue = finaleditableInput.value;
      pElement.textContent = finaleditableInputValue;
      finaleditableInput.remove();
   });
};

const saveFunction = (saveElement, inputValue, finalUnsavedLi) => {
   saveElement.addEventListener('click', () => {
      //delete unsaved
      finalUnsavedLi.remove();
      // save
      const liElement = document.createElement('li');
      const pElement = document.createElement('p');
      pElement.textContent = inputValue;
      const deleteElement = document.createElement('i');
      deleteElement.className = 'far fa-trash-alt';
      liElement.appendChild(pElement);
      liElement.appendChild(deleteElement);
      const finalSavedli = savedUl.appendChild(liElement);
      deleteFunction(deleteElement, finalSavedli);
   });
};

const deleteFunction = (deleteElement, finalSavedli) => {
   deleteElement.addEventListener('click', () => {
      //delete saved
      finalSavedli.remove();
   });
};
