export const getRandomArraySlice = (arr,count) => {
    const newArr = [].concat(arr)
    for(let i=0; i < newArr.length;i++){
        const x= Math.floor(Math.random()) * count
        const tmp = newArr[x];
        newArr[x]  = newArr[i];
        newArr[i] = tmp
    }
    return newArr.slice(0,count)
}


export const arrayChunk = (arr=[],size=4,options) => {
    let groups = []
    if(arr && arr.length > 0) {
        groups = arr.map((e,i) => ( i % size === 0 ? arr.slice(i,i+size) : null)).filter(e => e)
    }
    if(options && options.autoComplete){
        const lastIndex = groups.length - 1
        if(lastIndex >= 0 ){
            groups[lastIndex] = groups[lastIndex]
                .concat(this.getRandomArraySlice(arr.slice(0,size * lastIndex),size - groups[lastIndex].length))
        }
    }
    return groups
}
