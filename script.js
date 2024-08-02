let isCaptchaChecked = false;

function submitHandler(event) {

    if(isCaptchaChecked){
        let outputdate = document.querySelector(".outputdate");
        let inputdate = document.querySelector(".inputdate");
        console.log('input date is..', inputdate.value); // this is in string form. 
        // we need to convert it into the DATE form. 
    
        let formattedDate = new Date(inputdate.value).toLocaleDateString("en-In");
        outputdate.value = formattedDate;
    } else {
        alert("Please check the box if you are not a Robot");
        event.preventDefault();
    }
}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } } 
    setInterval(timestamp, 500); 

    function captchasuccess(){
        isCaptchaChecked = true;
    }