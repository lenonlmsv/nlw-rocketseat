document.querySelector('#add-time').addEventListener('click',cloneField);

function cloneField() {
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true);
    const fields = newFieldsContainer.querySelectorAll('input');
    fields.forEach(function(field) { 
        field.value = "";
    });
    document.querySelector('#schedule-items').appendChild(newFieldsContainer);
}

document.querySelector('#whatsapp').addEventListener('keypress',limitChar);

function limitChar() {
    const valueWpp = document.querySelector('#whatsapp').value;
    if (valueWpp.length > 11) {
        let a = valueWpp.substr(8,8);
        console.log(a)
    }
}
