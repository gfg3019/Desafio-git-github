//Observer
/**
 *É um pattern muito popular em aplicações javascript. A intância (subscriber) 
 mantém uma coleção de objetos (observes) e notifica todos eles quando ocorrem mudanças de estado.  
*/

class Observable {
    constructor(){
        this.observes = []
    }

    subscribe(f){
        this.observes.push(f)
    }

    unsubscribe(f){
        this.observes = this.observes.filter(subscribe => subscribe !== f)
    }

    notify(data){
        this.observes.forEach(observer => observer(data))
    }
}