/*set this up as a drop down select menu in HTML*/

document.getElementById('getButton').addEventListener('click', apiRequest)


async function apiRequest(){
    const alienName = document.querySelector('input').value;
    try{
        /*await fetch tells JS to wait for a returned promise before continuing*/
        const response = await fetch(`https://dustin-star-trek-api.herokuapp.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById("alienImage").src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName

        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById("alienWorld").innerText = data.homeworld
        document.getElementById("alienFeatures").innerText = data.features
        document.getElementById("alienFacts").innerText = data.interestingFact
        document.getElementById("alienExamples").innerText = data.notableExamples


    } catch(error) {
        console.log(error)
    }
}