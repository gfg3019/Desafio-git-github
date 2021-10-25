(() =>{
    this.name = 'arrow function'
    const getNameArroFn = () => this.name

    function getName(){
        return this.name
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArroFn,
        getName
    }

    console.log(user.getNameArroFn())
    console.log(user.getName)
})