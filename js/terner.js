$().ready(function(){



const items = ["Book", "Card", "Python", "Javascript"];
let compItems = [];
items.forEach(e => {
    let item = {
        item: e
    }
    console.log(item);
    compItems.push(item);
});
console.log(compItems);
let out = document.getElementById("esd-template").innerHTML;

const myData1 = ["Ax", "Bc", "Dc"];

Handlebars.registerHelper("ternerHelper1", function(opt){
    let x = `<table>`;
    opt.data.ahoj.forEach(e => {
        x += `<tr><td>${e}</td</tr>`
    });
    x += "</table>";
    return x;
});

let template = Handlebars.compile(out);
let elm = document.createElement("i");
elm.innerText = "Terner";
let myName = "Terner";
let elm2 = `<i class="upix">${myName}</i>`;
/*
let data = template({
    name: elm2,
    items: [
        {
            item: "Javascript"
        },
        {
            item: "Java"
        }
    ]
});
*/
let data = template({
    name: elm2,
    items: compItems,
    
}, {data: {
    ahoj: myData1
}});

document.getElementById("ternerData").innerHTML += data;

$(".upix").click(function(){
    let uf = this;
    console.log($(this).prop('class'));
    alert(uf);
});

});