let num = document.getElementsByTagName('input');
let first = num[0];
let second = num[1];

let ans = document.querySelector('.result');

let btn = document.querySelector('button');

let prev = localStorage.getItem("summation");
ans.innerHTML = prev ? parseInt(prev) : "";

btn.addEventListener('click', () => {
    let result = parseInt(first.value) + parseInt(second.value);
    ans.innerHTML = result;
    localStorage.setItem("summation", result);
    first.value = "";
    second.value = "";
})