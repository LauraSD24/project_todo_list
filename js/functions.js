
// función para pasar los datos de día, mes y año a los elementos correspondientes
export function get_date(number_day, number_month, number_year, week_day) {
    const date = new Date();
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let day = `${date.getDate()}`;
    let month = `${date.getMonth() + 1}`
    let year = `${date.getFullYear()}`

    // condiciones para validar que se agreguen dos dígitos en el número de día y mes
    if (day.length === 1) {
        number_day.innerText = "0" + day;
    } else {
        number_day.innerText = day;
    }
    if (month.length === 1) {
        number_month.innerText = "0" + month;
    } else {
        number_month.innerText = month;
    }

    number_year.innerText = year.slice(year.length - 2);
    week_day.innerText = days[date.getDay()]
}

//  Función para validar si el campo de netrada está vacío
export function validate_empty_fields(field) {
    if (field.value.length > 0) {
        return false;
    } else {
        return true;
    }
}

let array_local; // variable que contendrá el array traido del localstorage

/* función añadir tarea */
export function add_task(input_add_task, icon_inform, message_modal_inform, container_modal_inform) {
    // Se trae el array guardado en el localstorage si no existe se guarda la variable como un array vacío
    array_local = JSON.parse(localStorage.getItem("tasks")) || [];

    // se crea el objeto con la información de la tarea a guardar
    const object_task = {
        description: `${input_add_task.value}`,
        estatus: false,
        id: input_add_task.value.replaceAll(" ", "").toLowerCase(),
    }

    // buscamos si ya existe la tarea ingresada en el array local
    let task_find = array_local.find((task) => object_task.id === task.id) || "";

    // si la tarea ya existe se muestra un alerta
    if (task_find !== "") {
        // alert("La tarea que desea ingresar ya existe");
        icon_inform.style.backgroundImage = "url(./icons/icon_cross.svg)"
        message_modal_inform.textContent = "La tarea que desea ingresar ya existe";
        container_modal_inform.classList.remove("ocult");
    } else { // si no existe la agregamos al localsorage
        array_local.unshift(object_task);
        save_task_localstorage(array_local);
        icon_inform.style.backgroundImage = "url(./icons/bx-check-circle.svg)"
        message_modal_inform.textContent = "Tarea agregada correctamente";
        container_modal_inform.classList.remove("ocult");
    }
}

// Función para guardar un array en el localstorage
function save_task_localstorage(array) {
    localStorage.setItem("tasks", JSON.stringify(array));
}

export function show_task(container_list_task) {

    container_list_task.innerHTML = "";
    array_local = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(array_local)

    for (let i = 0; i < array_local.length; i++) {
        const item_task = array_local[i];
        container_list_task.innerHTML += `
            <div class="task">
              <input type="checkbox" class="check_task" id="check_${item_task.description.replaceAll(" ", "").toLowerCase()}"/><label for="check_${item_task.description.replaceAll(" ", "").toLowerCase()}" class="label_check"></label>
              <p class="description_task">${item_task.description}</p>
              <div class="container_icons_task">
                <i class="fa-regular fa-pen-to-square icon_task icon_task_update"></i>
                <i class="fa-solid fa-trash-can icon_task icon_task_delete"></i>
              </div>
            </div>`
    }
}

export function delete_task(id_task,container_list_task_process){
    array_local = JSON.parse(localStorage.getItem("tasks")) || [];

    const task_find = array_local.find((task)=>task.id === id_task.replaceAll(" ", "").toLowerCase());
    const index_task = array_local.indexOf(task_find);

    array_local.splice(index_task,1);

    save_task_localstorage(array_local);
    show_task(container_list_task_process);
}


/* función eliminar tarea */
/* función editar tarea */
/* función validar tarea
Verificar si el tamaño del string ingresado es mayor o igual a cero 
*/
/* buscar tarea */
/* buscar tarea */
/* modal(confirmar,informar,editar) */