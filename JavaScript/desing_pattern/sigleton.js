//Sigleton
/**
 * O objetivo desse partten é criar uma uníca instância de uma função
 * construtora e retorná-la toda vez em que for necessário utilizá-la.
 */

var SETTINGS = {
    api: 'http://localhost',
    trackJsToken: '12345'
}

function MyApp(){
    if(!MyApp.instance){
        MyApp.instance = this
    }

    return MyApp.instance
}