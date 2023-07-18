// Orginal JS
// const year = document.getElementById('year') ;
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear

// Method 1
// let year = document.getElementById("year") as HTMLSpanElement;
// let thisYear = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// Method 2
const year: HTMLElement | null = document.getElementById("year");
const thisYear: string = new Date().getFullYear().toString();
if (year) {
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
}
