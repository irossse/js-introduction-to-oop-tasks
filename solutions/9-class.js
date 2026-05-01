import _ from 'lodash';

// BEGIN
class Cart{
    constructor(){
        this.cart = []
    }
    addItem(item, count){
        const obj = {item, count}
        this.cart.push(obj)
        return obj
    }

    getItems(){
        return this.cart
    }

    getCost(){
        let countt = 0
        for (const object of this.cart){
            const {name, price} = object.item
            countt += price*object.count
        }
        return countt
    }

    getCount(){
        let countt = 0
        for (const object of this.cart){
            countt += object.count 
        }
        return countt
    }
}

export default Cart
// END
