let submit_btn = document.querySelector('.submit');
let edit_btn = document.querySelector('.edit')
let edit_window = document.querySelector('.edit_window')

let text1 = document.querySelector('#text-1')
let text2 = document.querySelector('#text-2')

function load_text() {
    let savedText1 = localStorage.getItem('text1')
    let savedText2 = localStorage.getItem('text2')

    if (savedText1) text1.textContent = savedText1
    if (savedText2) text2.textContent = savedText2
}

load_text()


submit_btn.addEventListener("click", function() {
    let input1 = document.querySelector('#text1input').value
    let input2 = document.querySelector('#text2input').value

    text1.textContent = input1;
    text2.textContent = input2;

    localStorage.setItem('text1', input1)
    localStorage.setItem('text2', input2)

    edit_window.style.display = "none"
})

edit_btn.addEventListener("click", function() {
    edit_window.style.display = "flex"
})