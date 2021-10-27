/*fetch('https://jsonplaceholder.typicode.com/todos')
    .then(responseStream =>{
        if(responseStream.status === 200){
            return responseStream.json()
        }else{
            throw new Error('Request error')
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log('Error')
    })*/

    //ES7 - Async / Await

    /*const asyncTimer = () => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(12345)
            }, 1000)
        })

    const simpleFunc = async () =>{
        const data = await Promise.all([
            asyncTimer(),
            fetch('https://jsonplaceholder.typicode.com/todos').then(resStream => resStream.json())
        ])

        return data
    }

    simpleFunc().then(
        data => {
            console.log(data)
        }
    ).catch(
        err => {
            console.log(err)
        }
    )*/

    const EventEmitter = require('events')

    class Users extends EventEmitter{
        userLogged(data){
            setTimeout(() => {
                this.emit('User logged', data)
            }, 2000)
        }
    }
    const users = new Users();

    users.on('User logged', data =>{
        console.log(data)
    })

    users.userLogged({user: 'Genisson Ferreira'})