let data=JSON.parse(localStorage.getItem("form"));
document.getElementById("email").innerText=`Email Address : ${data.email}`;
document.getElementById("number").innerText=`Contact Number : +${data.country}-${data.mobile}`;