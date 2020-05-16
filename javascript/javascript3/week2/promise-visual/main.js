// Co-ordinates for circles
// Red circle target: x: 20px, y: 300px;
// Blue circle target: x: 400px, y: 300px;
// Green circle target: x: 400px, y: 20px;

// translateOneByOne - Should translate the circles one at a time from their random start position to their target. Log something out after each element has been moved

translateOneByOne()
function translateOneByOne() {
    moveElement(document.querySelector('li:nth-child(1)'), {x: 20, y: 300}) 
        .then(() => {moveElement(document.querySelector('li:nth-child(2)'), {x: 400, y: 300}) 
        .then(() => {moveElement(document.querySelector('li:nth-child(3)'), {x: 400, y: 20})});
    });
}

// translateAllAtOnce - Should translate all the circles at the same time from their random start position to their target. Log out something after all elements have been moved

// translateAllAtOnce()
function translateAllAtOnce() {
    moveElement(document.querySelector('li:nth-child(1)'), {x: 20, y: 300})
    moveElement(document.querySelector('li:nth-child(2)'), {x: 400, y: 300})
    moveElement(document.querySelector('li:nth-child(3)'), {x: 400, y: 20})
}