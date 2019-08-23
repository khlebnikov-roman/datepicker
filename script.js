const createCalendar = (id, year, month) => {
    let elem = document.getElementById(id);
    let today = new Date();
    let mon = today.getMonth() + 1;
    let y = today.getFullYear();
    const defaultTable = '<div class="table"><div>пн</div><div>вт</div><div>ср</div><div>чт</div><div>пт</div><div>сб</div><div>вс</div>';
    let table = defaultTable;
    
    // Заполнить первый ряд пустыми ячейками от пн
    const getDays = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

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
    
    // Выводим текушщий месяц и год через select
    const getMonthAndYear = () => {
        let selectM = document.querySelector('.month');
        selectM.value = month;
 
        selectM.addEventListener('change', () => {
            let currentMonth = selectM.selectedIndex + 1;
            let currentYear = selectY.value;
            table = defaultTable;
            definitionFirstDay(currentYear, currentMonth);
            addEmptySquare(currentYear, currentMonth);

            for (let i = 1; i <= getDays(currentMonth, currentYear); i++) {
                table += '<div class="day" data-id="">' + i + '</div>';
                elem.innerHTML = table;
            }
        })

        let max = y,
        selectY = document.querySelector('.year');

        for (let i = y - 100; i <= max; i++) {
            let opt = document.createElement('option');
            opt.value = opt.innerHTML = i;
            selectY.appendChild(opt);
            selectY.value = year;
        }

        selectY.addEventListener('change', () => {
            let currentMonth = selectM.selectedIndex + 1;
            let currentYear = selectY.value;
            table = defaultTable;
            definitionFirstDay(currentYear, currentMonth);
            addEmptySquare(currentYear, currentMonth);

            for (let i = 1; i <= getDays(currentMonth, currentYear); i++) {
                table += '<div class="day" data-id="">' + i + '</div>';
                elem.innerHTML = table;
            }
        })
    };
    getMonthAndYear();
}

createCalendar('calendar', 2019, 8);