const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  function generateCalendar() {
    const calendarContainer = document.createElement("div");
    calendarContainer.id = "calendar-container";
    calendarContainer.classList.add("hidden");
  
    const calendarHeader = document.createElement("div");
    calendarHeader.id = "calendar-header";
  
    const prevMonthBtn = document.createElement("button");
    prevMonthBtn.id = "prev-month-btn";
    const prevMonthImg = document.createElement("img");
    prevMonthImg.src = "./svg/arrowCircleLeft.svg";
    prevMonthImg.style.width = "30px"; 
    prevMonthImg.style.height = "30px"; 
    prevMonthBtn.style.border = "none"; 
    prevMonthBtn.style.background = "none"; 
    prevMonthBtn.appendChild(prevMonthImg);
    calendarHeader.appendChild(prevMonthBtn);
  
    const currentMonthElement = document.createElement("h2");
    currentMonthElement.id = "current-month";
    calendarHeader.appendChild(currentMonthElement);
  
    const nextMonthBtn = document.createElement("button");
    nextMonthBtn.id = "next-month-btn";
    const nextMonthImg = document.createElement("img");
    nextMonthImg.src = "./svg/arrowCircleRight.svg";
    nextMonthImg.style.width = "30px"; 
    nextMonthImg.style.height = "30px"; 
    nextMonthBtn.style.border = "none"; 
    nextMonthBtn.style.background = "none"; 
    nextMonthBtn.appendChild(nextMonthImg);
    calendarHeader.appendChild(nextMonthBtn);
  
    calendarContainer.appendChild(calendarHeader);
  
    const calendarTable = document.createElement("table");
    calendarTable.id = "calendar-table";
  
    const calendarHead = document.createElement("thead");
    const calendarHeadRow = document.createElement("tr");
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i = 0; i < daysOfWeek.length; i++) {
      const dayCell = document.createElement("th");
      dayCell.textContent = daysOfWeek[i];
      calendarHeadRow.appendChild(dayCell);
    }
    calendarHead.appendChild(calendarHeadRow);
    calendarTable.appendChild(calendarHead);
  
    const calendarBody = document.createElement("tbody");
    calendarBody.id = "calendar-body";
    calendarTable.appendChild(calendarBody);
  
    calendarContainer.appendChild(calendarTable);
  
    document.body.appendChild(calendarContainer);
  
    const calendarButton = document.getElementById("calendar-button");
    calendarButton.addEventListener("click", function() {
      calendarContainer.classList.toggle("hidden");
    });
  
    const favoritesButton = document.querySelector(".tab-nav li:nth-child(1) button");
    const interestedButton = document.querySelector(".tab-nav li:nth-child(2) button");
    const goingButton = document.querySelector(".tab-nav li:nth-child(3) button");
  
    favoritesButton.addEventListener("click", function() {
      calendarContainer.classList.add("hidden");
    });
  
    interestedButton.addEventListener("click", function() {
      calendarContainer.classList.add("hidden");
    });
  
    goingButton.addEventListener("click", function() {
      calendarContainer.classList.add("hidden");
    });
  
    function updateCalendar() {
      const currentMonthElement = document.getElementById("current-month");
      currentMonthElement.textContent = months[currentMonth] + " " + currentYear;
  
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
      calendarBody.innerHTML = "";
  
      let date = 1;
      for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
  
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            const cell = document.createElement("td");
            row.appendChild(cell);
          } else if (date > daysInMonth) {
            break;
          } else {
            const cell = document.createElement("td");
            cell.textContent = date;
            row.appendChild(cell);
            date++;
          }
        }
  
        calendarBody.appendChild(row);
      }
    }
  
    updateCalendar();
  
    prevMonthBtn.addEventListener("click", function() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
    });
  
    nextMonthBtn.addEventListener("click", function() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
    });
  }
  
  export default generateCalendar;