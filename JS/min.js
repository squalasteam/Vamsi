function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function accountDetails() {
    let UserInputElement = document.getElementById("UserInput");
    let UserInputValue = UserInputElement.value
    let name = document.getElementById("name");
    let accountNumber = document.getElementById("accountNumber");
    let city = document.getElementById("city");
    let error = document.getElementById("error");
    if (UserInputValue === "") {
        error.textContent = "*Please Enter yout Account No";
    } else {
        switch (parseInt(UserInputValue)) {
            case 963258147:
                accountNumber.textContent = "Account No : " + UserInputValue;
                name.textContent = "Name : Vamshi";
                city.textContent = "City : Khammam";
                error.textContent = "";
                UserInputElement.value = "";
                break;
            case 369852147:
                accountNumber.textContent = "Account No : " + UserInputValue;
                name.textContent = "Name : Praveen";
                city.textContent = "City : Hyderabad";
                error.textContent = "";
                UserInputElement.value = "";
                break;
            case 741258963:
                accountNumber.textContent = "Account No : " + UserInputValue;
                name.textContent = "Name : Sumanth";
                city.textContent = "City : Wrangal";
                error.textContent = "";
                UserInputElement.value = "";
                break;
            default:
                accountNumber.textContent = "";
                name.textContent = "";
                city.textContent = "";
                error.textContent = "*No Data Found!";
                UserInputElement.value = "";
        }
    }
}