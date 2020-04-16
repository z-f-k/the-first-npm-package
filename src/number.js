function isNum(value) {
    return (typeof value === 'number') && !isNaN(parseFloat(value)) && isFinite(value); 
}

function say(){
	console.log('say hello npm')
}

module.exports = {
    isNum,
	say
}