fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayData(data))
}

function displayData(data) {
    const ul = document.getElementById('usersList');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `User Name: ${user.name}
        User Email: ${user.email} `;
        ul.appendChild(li);
    }
}