import { get_date, validate_empty_fields, add_task, show_task, delete_task } from "./functions.js";

window.addEventListener("DOMContentLoaded", () => {
    // elementos donde se muestra la fecha
    const number_day = document.querySelector(".number_day");
    const number_month = document.querySelector(".number_month");
    const number_year = document.querySelector(".number_year");
    const week_day = document.querySelector(".week_day");
    // elementos para agregar tarea
    const input_add_task = document.querySelector(".input_add_task");
    const icon_add = document.querySelector(".icon_add");
    // elementos de los modales
    const icon_close_modal = document.querySelectorAll(".icon_close_modal");
    const container_modal = document.querySelectorAll(".container_modal");
    // elementos del modal de información
    const container_modal_inform = document.querySelector(".container_modal_inform");
    const message_modal_inform = document.querySelector(".message_modal_inform");
    const icon_inform = document.querySelector(".icon_inform");
    const btn_modal_inform = document.querySelector(".btn_modal_inform");
    // elementos para mostrar las tareas
    const container_list_task_completed = document.querySelector(".container_list_task_completed");
    const container_list_task_process = document.querySelector(".container_list_task_process");
    // elemento para eliminar tarea
    // elementos del modal de confirmación
    const container_modal_confirm = document.querySelector(".container_modal_confirm");


    get_date(number_day, number_month, number_year, week_day);
    show_task(container_list_task_process)

    icon_add.addEventListener("click", () => {
        if (validate_empty_fields(input_add_task)) {
            // alert("el campo de entrada esta vacio");
            icon_inform.style.backgroundImage = "url(./icons/icon_cross.svg)";
            message_modal_inform.textContent = "El campo de entrada esta vacío";
            container_modal_inform.classList.remove("ocult");
        } else {
            add_task(input_add_task, icon_inform, message_modal_inform, container_modal_inform);
            input_add_task.value = "";
            show_task(container_list_task_process);
        }
        events_delete_update()
    })

    icon_close_modal.forEach((icon) => {
        icon.addEventListener("click", () => {
            container_modal.forEach((container) => {
                container.classList.add("ocult");
            })
        })
    })

    btn_modal_inform.addEventListener("click", () => {
        container_modal_inform.classList.add("ocult");
    })

    function events_delete_update() {
        const icon_task_delete = document.querySelectorAll(".icon_task_delete");
        icon_task_delete.forEach((icon) => {
            icon.addEventListener("click", (e) => {
                
                let id_task = e.currentTarget.parentNode.previousElementSibling.textContent;
                delete_task(id_task,container_list_task_process);
                events_delete_update();
            })
        })
    }
    events_delete_update();

    /*
    archivos: index.js(elementos, arrays y eventos)  -  service.js(funciones)
    */
})