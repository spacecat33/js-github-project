const form = document.getElementById('github-form')


form.addEventListener('submit', function(e) {
    e.preventDefault()
    const search = document.getElementById('search').value

    const userName = search.split(' ').join('')

    document.getElementById('user-list').innerHTML = ''

    fetch('https://api.github.com/users/'+userName, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById('user-list').innerHTML = 
        `<a target="_blank" href="https://www.github.com/${userName}"><img src="${data.avatar_url}"/></a>`
    })

})

//https://www.youtube.com/watch?v=7YeOjmpQUnU