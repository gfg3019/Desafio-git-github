class CustomError extends Error{
    constructor({message, data}){
        super(message)
        this.data = data
    }
}


try{
    console.log(name)
    const name = 'Genisson Ferreira'

    const myError = new CustomError({
        message: 'Custon message on custom error',
        data: {
            type: 'Server error'
        }
    })

    throw myError
}catch(err){
    console.log(err)
    console.log(err.data)
}finally{
    console.log('Keep goin...')
}