import {successTemplate, participantTemplate} from './templates.js';

let participantCount = 1;

document.getElementById('add').addEventListener('click', () => {
    participantCount++;
    const participantHTML = participantTemplate(participantCount);
    document.getElementById('add').insertAdjacentHTML('beforebegin', participantHTML);
});

document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    
    const adultName = document.getElementById('adult_name').value;
    const totalfee = totalFees();


    const info = {
        adultName: adultName,
        participants: participantCount,
        fees: totalfee
    };

    const form = document.getElementById('form')
    form.style.display = "none";

    const summary = successTemplate(info);
    document.getElementById('summary').innerHTML = summary;
    }



function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);

    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    const total = feeElements.reduce((sum, element) => {
        return sum + parseFloat(element.value || 0);
        }, 0);
    
    
    // once you have your total make sure to return it!
    return total;
    
    }