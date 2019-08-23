const createCalendar = (id, year, month) => {
    let elem = document.getElementById(id);
    let today = new Date();
    console.log(today);
    let mon = today.getMonth() + 1;
    console.log(mon);
    let y = today.getFullYear();
    const defaultTable = '<div class="table"><div>пн</div><div>вт</div><div>ср</div><div>чт</div><div>пт</div><div>сб</div><div>вс</div>';
    let table = defaultTable;
    
    // Заполнить первый ряд пустыми ячейками от пн

    const getDays = (month, year) => {
        return new Date(year, month, 0).getDate();
    };
    console.log(getDays(mon, year));


    const definitionFirstDay = (y, mon) => {
        return new Date(y, mon - 1, 1);
    };
    
    
    const addEmptySquare = (y, mon) => {
        let day = definitionFirstDay(y, mon).getDay();
        if (day === 0) day = 7;
        for (var i = 1; i < day; i++) {
            table += '<div></div>';
        }
    };
    addEmptySquare(y, mon);

    // Ячейки календаря с датами
    for (let i = 1; i <= getDays(month, year); i++) {
        table += '<div class="day" data-id="">' + i + '</div>';
        elem.innerHTML = table;
    }
    
    // Выводим текушщий месяц через select
    const getMonth = () => {
        let selectM = document.querySelector('.month');
        selectM.value = month; 
 
        selectM.addEventListener('change', () => {
            let currentMonth = selectM.selectedIndex + 1;
            table = defaultTable;
            definitionFirstDay(y, currentMonth);
            console.log(definitionFirstDay(y, currentMonth));
            addEmptySquare(y, currentMonth);

            for (let i = 1; i <= getDays(currentMonth, year); i++) {
                table += '<div class="day" data-id="">' + i + '</div>';
                elem.innerHTML = table;
            }
        })
    };
    getMonth();

    // Выводим текущий год в select
    const getYear = () => {
        let max = y,
        selectY = document.querySelector('.year');
       
        for (let i = y - 100; i <= max; i++) {
            let opt = document.createElement('option');
            opt.value = opt.innerHTML = i;
            selectY.appendChild(opt);
            selectY.value = year;
        }
        

        selectY.addEventListener('change', () => {
            let currentYear = selectY.value;
            table = defaultTable;
            definitionFirstDay(currentYear, mon);
            console.log(definitionFirstDay(currentYear, mon));
            addEmptySquare(currentYear, mon);

            for (let i = 1; i < getDays(mon, currentYear); i++) {
                table += '<div class="day" data-id="">' + i + '</div>';
                elem.innerHTML = table;
            }
        })
    };
    
    getYear();

}

createCalendar('calendar', 2019, 8);