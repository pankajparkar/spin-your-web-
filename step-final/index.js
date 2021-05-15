console.log('I am fired');


// DOM

// Document Object Model
// It is way of representing HTML and CSS, element, inside JAvascipr

// SQL
// DATABASE, tAbles
// Select * FROM Employees

var addToBagButton = document.querySelector('#add-to-bag-1');
console.dir(addToBagButton);
addToBagButton.onclick = function(event) {
    console.log('Event Fired');
    addToBagButton.classList.add('hide');
    var removeFromBag = document.querySelector('#remove-from-bag-1');
    var bagButton = document.querySelector('.item-count');
    removeFromBag.classList.remove('hide');
    var bagButtonCount = Number(bagButton.innerText);
    bagButton.innerText = bagButtonCount + 1;
}
