const addButton = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach(note => addNewNote(notes))
}

addButton.addEventListener('click', () => addNewNote());


function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
       <div class="tools">
           <button class="edit"><i class="fas fa-edit"></i></button> 
           <button class="delete"><i class="fas fa-trash-alt"></i></button> 
       </div>
       <div class="main ${text ? "" : "hidden"}"></div>
       <textarea class="${text ? "hidden" : ""}"></textarea>
       `

    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = text;

    //this function deletes the element note
    deleteButton.addEventListener('click', () => {
        note.remove();

        updateLS()
    });

    editButton.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

      textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = value;

        updateLS()
    })

    document.body.appendChild(note)
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = [];

    notesText.forEach(note => notes.push(note.value));
    
    localStorage.setItem('notes', JSON.stringify(notes))
}

const customers = [
    {
      name: 'Adetula Yemi',
      email: 'yemiadetula@gmail.com',
      gender: 'male'
    },
     {
      name: 'Olajide Niniola',
      email: 'jideniniola@gmail.com',
      gender: 'female'
    },
    {
        name: 'Amos Godwin',
        email: 'amosgodwin@gmail.com',
        gender: 'male'
      },
  ];
  customerEmails = customers.map((customer) => {
    const {name, email} = customer;
    return{name,email};
  });
  console.log(customerEmails);
