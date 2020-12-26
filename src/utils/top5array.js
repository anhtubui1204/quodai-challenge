const top5array = (array) => {
    var top5 = array.sort((a,b) => b-a).slice(0,5);
    return top5
}

export default top5array