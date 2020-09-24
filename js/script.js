//
// Lista de tareas
//

const formulario = document.getElementById('new-task-form');
let contadorTareas = 0;
const lista = document.getElementById('task-list');
const tareas = [];

formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();
  // Texto introducido por el usuario.
  console.log(formulario.elements[0].value);
  // Item list (li)
  const item = document.createElement ('li');
  item.className = 'task-list_item';
  // Checkbox
  const checkbox = document.createElement ('input');
  checkbox.setAttribute ('type','checkbox');
  checkbox.setAttribute ('id',`tarea-${contadorTareas}`);
  // Label
  const label = document.createElement ('label');
  label.setAttribute ('for',`tarea-${contadorTareas}`);
  label.innerHTML = formulario.elements[0].value;
  // Add elements
  item.appendChild(checkbox);
  item.appendChild(label);
  lista.appendChild (item);
  const miTarea = {
    id: contadorTareas,
    nombre: formulario.elements[0].value,
    completo: false,
    fecha: formulario.elements[1].value,
  };
  tareas.push (miTarea);
  console.log (tareas);
  contadorTareas++;
  // Reset form
  formulario.elements[0].value = ''
})
