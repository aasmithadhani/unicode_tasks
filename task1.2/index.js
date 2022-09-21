function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var c=0;
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }
    else
    {
        c=c+1;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>20){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    else
    {
        c=c+1;
    }



    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    else
    {
        c=c+1;
    }
    if(c==3)
    {
        alert("Form submitted successfully");
    }
    return returnval;
}

