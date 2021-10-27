const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon')

describe('Math class', function(){
    beforeEach(function(){
        value = 0
    })
    it('Sum two numbers', function(done){
        const math = new Math()
        this.timeout(3000)
        value = 5
        math.sum(value, 5, value => {
            expect(value).to.equal(10)
            done()
        })
    })

    it('Multiplica two numbers', function() {
        const math = new Math()
       const obj = {
           nome: 'Genisson Ferreira'
       }
       const obj2 = {
            nome: 'Genisson Ferreira'
       }
       expect(math.multiply(value, 5)).to.equal(0)
       expect(obj).to.have.property('nome').equal('Genisson Ferreira')
       expect(obj).to.deep.equal(obj2)
    })

    it.only('Calls res with sum and index values', function(){
        const req = {}
        const res = {
            load: function load(){
                console.log('Called!')
            }
        }
        sinon.spy(res, 'load')
        const math = new Math()
        math.printSum(req, res, 5, 5)
        expect(res.load.args[0][0]).to.equal('index')
    })
})