function displayData(n){
    result.value+=n
}
function evaluateE(){
    output.value=eval(result.value)
}
function clearA() {
    result.value=""
    output.value=""
}
function clearOne(){
    result.value=result.value.slice(0,-1)
}
function percentage(){
    result.value=result.value*(1/100)
}