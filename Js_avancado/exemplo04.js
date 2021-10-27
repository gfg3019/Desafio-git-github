//PROMISES
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        //throw new Error('Something wrong')
        setTimeout(() =>{
            //did something
            resolve('First data')
        }, 1000)
    })


const doOtherThingPromise  = () =>
    new Promise((resolve, reject) =>{
        setTimeout(() => {
            //did other thing promise
            resolve('Second data')
        }, 1000)
    })

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''))
    console.log(data[1].split(''))
}).catch(err =>{
    console.log(err)
})

/*doSomethingPromise()
    .then(data =>{
        console.log(data.split(''))
        return doOtherThingPromise()
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error))*/


//=========================================================================

//CALLBACKS
/*function doSomething(callback){
    setTimeout(() => {
        //did something
        callback('First data')
    }, 1000)
}

function doOtherThing(callback){
    setTimeout(() =>{
        //did other thing
        callback('Second data')
    }, 1000)
}

function doAll(){
    try {
        doSomething(function(data){
            var processedData = data.split('')
            try{
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('')
                    try{
                        setTimeout(function() {
                            console.log(processedData, processedData2)
                        }, 1000)
                    }catch(err){
                        //handle error
                    }
                })
            }catch(err){
                //handle error
            }
        })
    } catch (error) {
        //handle error
    }
}

doAll()*/