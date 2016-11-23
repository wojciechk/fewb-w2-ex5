function Toggler(selector) {

    this._selector = selector;

}

Toggler.prototype.getElem = function () {
    return document.querySelector(this._selector);
}


Toggler.prototype.show = function () {
    this.getElem().style.display = "";
}

Toggler.prototype.hide = function () {
    this.getElem().style.display = "none";
}


/////////////////////////// original code below:

var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function () {

    if (elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);