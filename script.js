var first=createlabel("label","for","first","FirstName");
var b1=linebreak("br") ;
var inputfirst=inputfield("input","type","first","id","FirstName");
var b2=linebreak("br") ;
var last=createlabel("label","for","last","LastName");
var b3=linebreak("br") ;
var inputlast=inputfield("input","type","last","id","LastName");
var b4=linebreak("br") ;
var email=createlabel("label","for","email","Email");
var b5=linebreak("br") ;
var inputemail=inputfield("input","type","email","id","Email");
var b6=linebreak("br") ;
var phone=createlabel("label","for","phone","PhoneNumber");
var b7=linebreak("br") ;
var inputphone=inputfield("input","type","phone","id","PhoneNumber");
document.body.append(first,b1,inputfirst,b2,last,b3,inputlast,b4,email,b5,inputemail,b6,phone,b7,inputphone);




function createlabel(tagname,attrname,attrvalue,content){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    element.innerHTML=content;
    return element;

}

function inputfield(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var input=document.createElement(tagname);
    input.setAttribute(attrname,attrvalue);
    input.setAttribute(attrname1,attrvalue1);
    return input; 

}

function linebreak(breaker){
    var break=document,createElement(breaker);
    return break ;
}