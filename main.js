document.querySelector('button').addEventListener('click', apiRequest)


async function apiRequest(){
    const alienName = document.querySelector('input').value;
    try{
        /*await fetch tells JS to wait for a returned promise before continuing*/
        const response = await fetch(`https://dustin-star-trek-api.herokuapp.com/api/${alienName}`)

    } catch {

    }
}