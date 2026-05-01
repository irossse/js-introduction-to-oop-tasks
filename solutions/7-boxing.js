// BEGIN
const magic = (...argum) =>{
  const sum = argum.reduce((acc, num) => acc + num,0)
  
  const inner = (...newArgs) => {
    return magic(sum, ...newArgs)
  }
  
  inner.valueOf = () => sum
  
  return inner
};

export default magic;
// END
