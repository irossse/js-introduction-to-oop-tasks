// BEGIN
const bind = (obj, fn)=>{
    const newfunc = (...arg) =>{
        return fn.apply(obj, arg)
    }
    return newfunc
}

export default bind
// END