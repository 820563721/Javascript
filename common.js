function my$(id) {
    return document.getElementById(id);
}
function addEventListener(element,type,fn) {
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if (element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else {
        element["on"+type]=fn;
    }
}
function removeEventListener(element,type,fnName) {
    if(element.removeEventListener){
        element.removeEventListener(type,fnName,false);
    }else if (element.detachEvent){
        element.detachEvent("on"+type,fnName);
    }else {
        element["on"+type]=null;
    }
}