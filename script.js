
function firstname_label(tagname, attribute_name, attribute_value, content){
    var firstname = document.createElement(tagname);
    firstname.setAttribute(attribute_name, attribute_value);
    firstname.innerHTML = content;
    return firstname;
}

function break_create_first(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function firstname_input(tagname, attribute_name, attribut_value, attribute_name_1, attribut_value_2){
    var firstname = document.createElement(tagname);
    firstname.setAttribute(attribute_name, attribut_value);
    firstname.setAttribute(attribute_name_1, attribut_value_2);
    return firstname;
}

function break_create_first_first(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function middlename_label(tagname, attribute_name, attribute_value, content){
    var middlename = document.createElement(tagname);
    middlename.setAttribute(attribute_name, attribute_value);
    middlename.innerHTML = content;
    return middlename;
}

function break_create_second(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function middlename_input(tagname, attribute_name, attribut_value, attribute_name_1, attribut_value_2){
    var middlename = document.createElement(tagname);
    middlename.setAttribute(attribute_name, attribut_value);
    middlename.setAttribute(attribute_name_1, attribut_value_2);
    return middlename;
}

function break_create_second_first(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function lastname_label(tagname, attribute_name, attribute_value, content){
    var lastname = document.createElement(tagname);
    lastname.setAttribute(attribute_name, attribute_value);
    lastname.innerHTML = content;
    return lastname;
}

function break_create_third(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function lastname_input(tagname, attribute_name, attribut_value, attribute_name_1, attribut_value_2){
    var lastname = document.createElement(tagname);
    lastname.setAttribute(attribute_name, attribut_value);
    lastname.setAttribute(attribute_name_1, attribut_value_2);
    return lastname;
}

function break_create_third_first(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function email_label(tagname, attribute_name, attribute_value, content){
    var email = document.createElement(tagname);
    email.setAttribute(attribute_name, attribute_value);
    email.innerHTML = content;
    return email;
}

function break_create_fourth(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function email_input(tagname, attribute_name, attribut_value, attribute_name_1, attribut_value_2){
    var email = document.createElement(tagname);
    email.setAttribute(attribute_name, attribut_value);
    email.setAttribute(attribute_name_1, attribut_value_2);
    return email;
}

function break_create_fourth_first(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function password_label(tagname, attribute_name, attribute_value, content){
    var password = document.createElement(tagname);
    password.setAttribute(attribute_name, attribute_value);
    password.innerHTML = content;
    return password;
}

function break_create_fifth(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function password_input(tagname, attribute_name, attribut_value, attribute_name_1, attribut_value_2){
    var password = document.createElement(tagname);
    password.setAttribute(attribute_name, attribut_value);
    password.setAttribute(attribute_name_1, attribut_value_2);
    return password;
}

function break_create_sixth(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function button(tagname, attribute_name, attribut_value, attribute_name_1, attribut_value_2, content){
    var button = document.createElement(tagname);
    button.setAttribute(attribute_name, attribut_value);
    button.setAttribute(attribute_name_1, attribut_value_2);
    button.innerHTML = content;
    return button;
}

function printInputValues() {
    var firstName = document.getElementById("firstname").value;
    var middleName = document.getElementById("middlename").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    console.log("First Name: " + firstName);
    console.log("Middle Name: " + middleName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Password: " + password);
}

var first_name_label = firstname_label("label", "for", "firstname", "First Name");
var line_break_one = break_create_first();
var first_name_input = firstname_input("input", "type", "text", "id", "firstname");
var line_break_one_one = break_create_first_first();

var middle_name_label = middlename_label("label", "for", "middlename", "Middle Name");
var line_break_two = break_create_second();
var middle_name_input = middlename_input("input", "type", "text", "id", "middlename");
var line_break_two_one = break_create_second_first();

var last_name_label = lastname_label("label", "for", "lastname", "Last Name");
var line_break_three = break_create_third();
var last_name_input = lastname_input("input", "type", "text", "id", "lastname");
var line_break_three_one = break_create_third_first();

var emaillabel = email_label("label", "for", "email", "Email");
var line_break_four = break_create_fourth();
var emailinput = email_input("input", "type", "text", "id", "email");
var line_break_four_one = break_create_fourth_first();

var passwordlabel = password_label("label", "for", "password", "Password");
var line_break_five = break_create_fifth();
var passwordinput = password_input("input", "type", "password", "id", "password");
var line_break_six = break_create_sixth()

var submit_button = button("button", "type", "button", "onClick", "printInputValues()", "Submit");

document.body.append(first_name_label, line_break_one, first_name_input, line_break_one_one);
document.body.append(middle_name_label, line_break_two, middle_name_input, line_break_two_one);
document.body.append(last_name_label, line_break_three, last_name_input, line_break_three_one);
document.body.append(emaillabel, line_break_four, emailinput, line_break_four_one);
document.body.append(passwordlabel, line_break_five, passwordinput, line_break_six);
document.body.append(submit_button);
