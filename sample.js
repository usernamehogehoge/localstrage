var today = new Date();
var days = String(today.getFullYear()) + String("0" + (today.getMonth() + 1)).slice(-2) + String("0" + today.getDate()).slice(-2);
var localday = localStorage.getItem('apple');
if (localday !== days) {
    localStorage.setItem('apple', days);
}
//  localStorage.removeItem("apple");
