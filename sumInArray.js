function sumInArray(array){
    var sum=0
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number')
        sum+=array[i]
        else
        return "invalid character !"
    }
    return sum
}

module.exports=sumInArray