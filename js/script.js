//
// Lista de tareas
//

//Modelo

//Lista de tareas(array)
let tareas = [];
const datosLocalStorage = localStorage.getItem('tareas');
if (datosLocalStorage !== null){
  tareas = JSON.parse(datosLocalStorage);
}
console.log(tareas);

// Contador de tareas
let count = 0;

//Funcion que agrega tareas
function addTask(nameTarea,dateTarea,completTarea) {

  // Crea un objeto que represente la nueva tarea
  const homework = {
    id: count,
    name: nameTarea,
    complet: completTarea,
    fecha: dateTarea,
  };
  // Agrega al array existente
  tareas.push(homework);
  //Count  
  count++;
  //Formulario para añadir tareas
  appendTaskDom(homework);
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

const list = document.getElementById('task-list');

function appendTaskDom(tarea) {
  // Crear nueva tarea en DOM
  // Item de la lista
  const item = document.createElement('li')
  item.className = 'task-list__item';
  //Checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tarea-${tarea.id}`);
  //Label
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${tarea.id}`);
  count++
  label.innerHTML = `${tarea.nameTarea} - ${tarea.dateTarea}`;
  // Se agregan elementos
  item.appendChild(checkbox);
  item.appendChild(label);
  list.appendChild(item);
}

for(let i = 0; i < tareas.length; i++){
  appendTaskDom(tareas[i]);
}

//Controlador

//Formulario para añadir tareas
const formulario = document.getElementById('new-task-form');

formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();
  //llama a la funcion
  const homework = addTask(formulario.elements[0].value, formulario.elements[1].value, false);
  appendTaskDom (homework);
  // Resetear
  formulario.elements[0].value = '';
  formulario.elements[1].value = '';
});