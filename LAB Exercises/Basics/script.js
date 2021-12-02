let showButton = document.querySelector('#date-btn');

showButton.addEventListener('click', function(){
    let field = document.querySelector('#field');
    field.innerHTML = Date()
});