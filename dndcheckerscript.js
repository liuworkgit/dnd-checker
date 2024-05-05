'use strict'

let list = document.getElementsByClassName('checkul');
let i;
for (i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

let coll = document.getElementsByClassName('collapsible');
let j;
for (j = 0; j < coll.length; j++) {
    coll[j].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
} 