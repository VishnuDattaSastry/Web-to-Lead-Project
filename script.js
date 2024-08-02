function submitHandler() {

    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log('input date is..', inputdate.value); // this is in string form. 
    // we need to convert it into the DATE form. 

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-In");
    outputdate.value = formattedDate;
}