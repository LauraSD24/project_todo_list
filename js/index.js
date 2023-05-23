import {get_date,validate_empty_fields,add_task} from "./functions.js";

window.addEventListener("DOMContentLoaded",()=>{
    // elementos donde se muestra la fecha
    const number_day = document.querySelector(".number_day");
    const number_month = document.querySelector(".number_month");
    const number_year = document.querySelector(".number_year");
    const week_day = document.querySelector(".week_day");
    // elementos para agregar tarea
    const input_add_task = document.querySelector(".input_add_task");
    const icon_add = document.querySelector(".icon_add");

    get_date(number_day,number_month,number_year,week_day);
    
    icon_add.addEventListener("click",()=>{
        if(validate_empty_fields(input_add_task)){
            alert("el campo de entrada esta vacio");
        }else{
            add_task(input_add_task);
            input_add_task.value = "";
        }
    })

    
    /*
    archivos: index.js(elementos, arrays y eventos)  -  service.js(funciones)
    */
})