
function renderRectangle(rectangle) {
    return `
        <div class="text-center mt-5" style ="width: ${rectangle.width}; height: ${rectangle.height}; background-color: ${rectangle.color}">
            
        </div>
    `
}

// ""
// ''
// var myName="Eli"
// `
// ${myName}
// `

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: '100px',
        height: '200px',
        color: "#FF00FF"
    }


    content.innerHTML = renderRectangle(rectangleAbstraction);

}