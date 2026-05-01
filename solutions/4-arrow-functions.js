// BEGIN
const each = (collection, callback) =>{
    for (const user of collection){
        callback.apply(user)
    }
    return collection

}

export default each
// END
