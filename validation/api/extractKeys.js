module.exports=function extractKeys(obj,array){
    Object.keys(obj).forEach((key) => array.push(key))
}