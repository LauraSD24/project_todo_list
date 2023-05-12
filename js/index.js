
window.addEventListener("DOMContentLoaded",()=>{
    // elementos donde se muestra la fecha
    const number_day = document.querySelector(".number_day");
    const number_month = document.querySelector(".number_month");
    const number_year = document.querySelector(".number_year");
    const week_day = document.querySelector(".week_day");

    const date = new Date();

    console.log(date.getDay())
    // función para pasar los datos de día, mes y año a los elementos correspondientes
    function get_date() {
        const days = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
        let day =`${date.getDate()}`;
        let month = `${date.getMonth()}`
        let year = `${date.getFullYear()}`

        // condiciones para validar que se agreguen dos dígitos en el número de día y mes
        if(day.length === 1){
            number_day.innerText = "0"+day;
        }else{
            number_day.innerText = day;
        }
        if(month.length === 1){
            number_month.innerText = "0"+month;
        }else{
            number_month.innerText = month;
        }

        number_year.innerText = year.slice(year.length-2);
        week_day.innerText = days[date.getDay()]
    }
    get_date();
})