function surveyFunc() {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let country = document.getElementById("countryCode").value;
    let mobile = document.getElementById("mobNumber").value;
    let mspan = document.getElementById("mobSpan");
    let espan = document.getElementById("emailSpan");
    
    //console.log(email +"-"+mobile)
    if (email !== "" && mobile.length === 10) {
        let obj = {
            email,
            country,
            mobile
        }
        console.log(obj)
        localStorage.setItem("form", JSON.stringify(obj));
        location.href = "./thankyou.html"
    } else if (email == "" && mobile == "") {
        mspan.innerText = "";
        espan.innerText = "";
        mspan.innerText = "Required field";
        espan.innerText = "Required field";
        espan.style.width = "50%";
        espan.style.color = "red";
        mspan.style.color = "red";
        mspan.style.opacity="1"
    }else if(email != "" && mobile == ""){
        
        espan.innerText = "";
        mspan.innerText = "Required field";
        mspan.style.color = "red";
        
    }else if(email == "" && mobile != ""){
        mspan.innerHTML = "Required field";
        espan.innerText = "Required field";
        espan.style.color = "red";
        espan.style.width = "50%";
        mspan.style.opacity="0.0"
    }else if(mobile.length!=10 && email != ""){
        espan.innerText = "";
        mspan.innerText = "Invalid number";
        mspan.style.color = "red";
        mspan.style.opacity="1"
    }else if(mobile.length!=10 && email != ""){
        espan.innerText = "Required field";
        espan.style.color = "red";
        espan.style.width = "50%";
        mspan.innerText = "Invalid number";
        mspan.style.color = "red";
    }



}