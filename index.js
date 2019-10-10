function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
            },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(r => r.json())
    .then(function(rJSON){
        console.log(rJSON)
        document.body.innerHTML = rJSON.id
    })
    .catch(function(error){
        document.body.innerHTML = error.message
    })
}

