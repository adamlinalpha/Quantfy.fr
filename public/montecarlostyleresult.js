let contribution = document.querySelector('#contributionjs')
let contributionamount = document.querySelector('#contributionamount')
let allocations = document.querySelectorAll('.edit3')
let form = document.querySelector('form')

contribution.addEventListener("change", function () {
    let text = contribution.selectedOptions[0].innerText

    if (text == 'Withdraw fixed amount' || text == 'Add fixed amount') {
        contributionamount.innerHTML ="<div id='contributionamount' class='para'>" +
        "<label class='label' for='contributionamount'>Contribution amount ($):</label>" +
        "<div class='input'><input class='edit' type='number' name='contributionamount' id='contributionamountjs' value='10000'></div>" +
        "</div>"; 
    } else if (text == 'Withdraw percentage' || text == 'Add percentage') {
        contributionamount.innerHTML = "<div id='contributionamount' class='para'>" +
            "<label class='label' for='contributionamount'>Contribution percentage (%):</label>" +
            "<div class='input'><input class='edit' type='number' name='contributionamount' id='contributionamountjs' value='10'></div>" +
            "</div>";
    }
});

form.addEventListener("submit",function(event){
    event.preventDefault()
    if(Number.parseFloat(allocations[0].value)+Number.parseFloat(allocations[1].value)+Number.parseFloat(allocations[2].value)+Number.parseFloat(allocations[3].value)+Number.parseFloat(allocations[4].value)+Number.parseFloat(allocations[5].value)+Number.parseFloat(allocations[6].value)==100){
        form.submit()
    }else{
        alert('Allocation total must be equa to 100%')
    }
})
