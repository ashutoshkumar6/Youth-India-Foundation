document.getElementById("button").disabled =  true;


var input1 = false;
var input2 = false;
var input3 = false;
var input4 = false;

function myBtnActivator(i) {
var name1 = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var address= document.getElementById("address").value;

    switch (i) {
        case 1:
            input1 = true;
            if (name1 == "" )
                input1 = false;
            break;
        case 2:
            input2 = true;
            if (email == "")
                input2 = false;
            break;
        case 3:
            input3 = true;
           
            if (phone == ""  )
           { 
                input3 = false
            }
            break;
        case 4:
            input4 = true;
            if (address == "")
                input4 = false;
            break;
    }
    trigger();
}

function trigger() {
    console.log(input1+' '+input2+' '+input3+' '+input4);
    if (input1 == true && input2 == true && input3 == true && input4 == true) {
       
            document.getElementById("button").disabled = false;
        
        
    } else {
        document.getElementById("button").disabled = true;
    }
}