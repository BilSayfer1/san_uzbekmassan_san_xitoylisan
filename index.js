let form = document.forms.namedItem('san_uzbekmassan_san_xitoylisan');
let btn = document.querySelector('#first_btn');

btn.onclick = () => {
    let name_inp = document.querySelector('#name_inp').value;
    let age_inp = document.querySelector('#age_inp').value;
    
    let date = new Date().getFullYear();
    let tayyor_age = date - age_inp;

    let user = {
        name: name_inp,
        id: Math.random(),
        age: tayyor_age
    };

    console.log(user);
};