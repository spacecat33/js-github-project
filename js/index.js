const newForm = document.getElementById('github-form')

newForm.addEventListener('submit', function (e){
    e.preventDefault();

    const search = document.getElementById("search").value

    return fetch('https://api.github.com/users/'+search)
        .then (res => res.json())
        .then (data => {

            document.getElementById("github-container").innerHTML = `<img src="${data.avatar_url}"/>`

            const list = document.getElementById('github-container')
            const li = document.createElement('li')
            
            li.innerHTML = `<a href="${data.html_url}" target="_blank">Link to profile!</a>
            <br><br>
            Username : ${data.login} 
            <br><br> 
            <button id='repoBtn'> Click to view this persons Repo's </button>
            <br><br>
            `
            list.appendChild(li)

            
            repoBtn.addEventListener('click', function(){
                return fetch('https://api.github.com/users/AlexMinez/repos')
                .then(res => res.json())
                .then (data => {
              
                    console.log(data)
                const repoList = document.getElementById('github-container')
                const li2 = document.createElement('li')
                        li2.innerHTML = `${data.full_name}`
                        repoList.appendChild(li2)
      })
    })                                 
  })     
})

//https://www.youtube.com/watch?v=7YeOjmpQUnU