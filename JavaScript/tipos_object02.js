    const user = {
        name: 'Genisson',
        lastName: 'Ferreira Gomes'
    }

    //Recupera as chaves do objeto
    console.log('Propriedade do objeto user: ', Object.keys(user))

    //Recupera os valores das chaves do objeto
    console.log('\nValores das propriedade do objeto user: ', Object.values(user))

    //Retorna um arrays de arrays contendo [nome_prop, valor_prop]
    console.log('\nLista de propriedade e valores: ', Object.entries(user))

    //Margear propriedades de objetos
    Object.assign(user, {fullName: 'Genisson Ferreira Gomes'})

    console.log('\nAdiciona a propriedade fullName no objeto user: ', user)
    console.log('\nRetorna dois objetos margeando dois ou mais obejtos: ', Object.assign({}, user, {age: 26}))

    //Previne todas as alterações em um objeto
    const newObj = {foo: 'bar'}
    Object.freeze(newObj)

    newObj.foo = 'changes'
    delete newObj.foo
    newObj.bar = 'foo'

    console.log('\nVariável newObj após as alterações: ', newObj)

    //Permite apenas a alteração de propriedade existentes em um objeto
    const person = {name: 'Genisson'}
    Object.seal(person)

    person.name = 'Genisson Ferreira'
    delete person.name
    person.age = 29

    console.log('\nVariável person após as alterações: ', person)

