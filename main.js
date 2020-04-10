//JavaScript file
let para = document.getElementById("paragraph");

function loadAsset(url, promiseFunction) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        promiseFunction(xhr.response);
    };
    xhr.send();
}

loadAsset("https://kelendyl.github.io/Module4Project/", getStrangeThings());


function strangeProducts(jsonObj) {
    let strangeProducts =jsonObj.strangeProducts;

let productPromise =new Promise(function (resolve, reject) {
    if (name.length = 0){
        reject("Sorry, no product name");
    }
    else {
        resolve ("Product " + name + " Cost: " + price);
    }
})
    return productPromise;
}

async function getStrangeThings() {
let strangeThing1Promise =await strangeProducts("An inflatable cat horn", 6.02);
console.log(strangeThing1Promise);
}

getStrangeThings();






// let requestURL = "https://raw.githubusercontent.com/Kelendyl/Module4Project/master/main.json?token=ANFZSWRVTQI5SYOLA7G6PLK6QX3J6";
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function () {
// let strangeThings = request.response;
// console.log(strangeThings);
// strangeProducts(strangeThings);
// };

