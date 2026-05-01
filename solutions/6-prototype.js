// BEGIN
function Money(value, currency = 'usd'){
    this.value = value
    this.currency = currency
}

Money.prototype.getValue = function getValue() {
    return this.value
}

Money.prototype.getCurrency =function getCurrency () {
    return this.currency
}

Money.prototype.exchangeTo = function exchangeTo(currency){
    let newValue
    if (currency === this.getCurrency())
        newValue = this.getValue()
    if (currency === 'eur' && this.getCurrency() === 'usd'){
        newValue = this.getValue()*0.7
    }

    if (currency === 'usd' && this.getCurrency() === 'eur'){
        newValue = this.getValue()*1.2
    }

    const newObj = new Money(newValue, currency)
    return newObj
}

Money.prototype.add = function add(money){
    const newMoney = money.exchangeTo(this.getCurrency())
    const newObj = new Money(this.getValue() + newMoney.getValue(), this.getCurrency())
    return newObj
}

Money.prototype.format =function format(){
    if (this.getCurrency() === 'usd'){
        return this.getValue().toLocaleString('en-US', { style: 'currency',  currency: 'USD'})
    }

     if (this.getCurrency() === 'eur'){
        return this.getValue().toLocaleString('en-US', {style: 'currency', currency: 'EUR'})
    }
}

export default Money
// END
