
// función para pasar los datos de día, mes y año a los elementos correspondientes
export function get_date(number_day, number_month, number_year, week_day) {
    const date = new Date();
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let day = `${date.getDate()}`;
    let month = `${date.getMonth()}`
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

let array_local;
let array_new_task = [];

/* función añadir tarea */
export function add_task(input_add_task) {
    // Se trae el array guardado en el localstorage si no existe se guarda la variable como un array vacío
    array_local = JSON.parse(localStorage.getItem("tasks")) || [];

    // se crea el objeto con la información de la tarea a guardar
    const object_task = {
        description: `${input_add_task.value}`,
        estatus: false,
        id: input_add_task.value.replaceAll(" ", "").toLowerCase(),
    }
    // se hace la condición para verificar si el array ya existe en el localstorage
    // si ya existe se agrega el nuevo elemento al array
    if (array_local.length > 0) {
        // se busca en el array si ya existe alguna tarea igual a la que se quiere agregar
        let task_find = array_local.find((task) => object_task.id === task.id) || "";

        // si la tarea ya existe se muestra un alerta
        if (task_find !== "") {
            alert("La tarea que desea ingresar ya existe");
        } else { // si no existe la agregamos al localsorage
            array_local.unshift(object_task);
            save_task_localstorage(array_local);
        }
    // si el array aún no existe en el localstorage se agrega el elemento al array_new_task declarado y luego este array se agrega al localstorage
    } else {
        array_new_task.unshift(object_task);
        save_task_localstorage(array_new_task);
    }
}

// Función para guardar un array en el localstorage
function save_task_localstorage(array) {
    localStorage.setItem("tasks", JSON.stringify(array));
}


/* función eliminar tarea */
/* función editar tarea */
/* función validar tarea
Verificar si el tamaño del string ingresado es mayor o igual a cero 
*/
/* buscar tarea */
/* buscar tarea */
/* modal(confirmar,informar,editar) */