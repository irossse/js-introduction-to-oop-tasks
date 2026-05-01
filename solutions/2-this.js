// BEGIN
const make = (num, denum)=>{
    return {
        num,
        denum,
        setNumer(num){
            this.num = num
        },
        setDenom(denum){
            this.denum = denum
        },
        getNumer(){
            return this.num
        },
        getDenom(){
            return this.denum
        },
        toString(){
            return `${this.getNumer()}/${this.getDenom()}`
        },
        add(rat){
        const num1 = (this.num * rat.getDenom() + this.denum * rat.getNumer())
        const num2 = this.denum * rat.getDenom()
        return make(num1, num2)
    }
    }
}

export default make
// END