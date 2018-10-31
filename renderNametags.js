
function renderNametags(nametags) {
    let myNameIs = ''
    for (i=0; i < nametags.length; i++) {
        myNameIs += `
        <div style=" text-align: center; font-size: 30px; background-color: white; padding-top: 10px; padding-right: 350px; padding-bottom: 10px; padding-left: 350px">
        <h2 style=" background-color: blue; color: white;">Hello, my name is:</h2>${nametags[i]}
        </div>
        `
    }
    return myNameIs
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}