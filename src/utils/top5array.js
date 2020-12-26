const top5array = (array, sortKey='key') => {
    var top5 = array.sort((a,b) => b[sortKey]-a[sortKey]).slice(0,5);
    return top5
}

export default top5array