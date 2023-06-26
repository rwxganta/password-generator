const password = document.getElementById('password');
const lengthCount = document.querySelector('.length-count');
const range = document.getElementById('length');

const generateBtn = document.getElementById('generate');


const LOWERCASE_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const UPPERCASE_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// We are not using the '\' symbol
const SYMBOLS = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '+', '=', '[', ']', '{', '}', '|', '<', '>', '/', '~'];

const MIN_LENGTH = 8;
const MAX_LENGTH = 32;
let length = MIN_LENGTH;

range.addEventListener('input', () => {
    lengthCount.textContent = range.value;
    length = range.value;
});
