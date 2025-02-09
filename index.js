const max = document.getElementById("max");
const input_number = document.getElementById("input_number");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let min_number = 0;
let atts = 0;
let max_number;

submit.onclick = function(){
    if(max.value != ''){
        output_random = Math.floor(Math.random() * Number(max.value));
        max_number = Number(max.value);
        min_number = 0;
        atts = 0;
        result.textContent = `The number is between ${min_number} and ${max_number}`;
    }

    else{
        if(Number(input_number.value) > output_random && Number(input_number.value) >= min_number && Number(input_number.value) <= max_number){
            max_number = Number(input_number.value);
            atts++;
            result.textContent = `The number is between ${min_number} and ${max_number}`;
        }
        else if(Number(input_number.value) < output_random && Number(input_number.value) >= min_number && Number(input_number.value) <= max_number){
            min_number = Number(input_number.value);
            atts++;
            result.textContent = `The number is between ${min_number} and ${max_number}`;
        }
        else if(Number(input_number.value) == output_random && Number(input_number.value) >= min_number && Number(input_number.value) <= max_number){
            result.textContent = `You guessed right for ${atts} attempts. The number is ${input_number.value}`;
        }
        else{
            result.textContent = `Not in range. The number is between ${min_number} and ${max_number}`;
        }

    }
}