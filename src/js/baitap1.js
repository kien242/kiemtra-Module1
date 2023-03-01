function kiemTraSoNguyenTo(number){
    if(number<2){
        return false
    } else {
        let count = 0;
        for(let i=2;i<=Math.sqrt(number);i++){
            if(number%i ===0){
                count++
            } 
        }
        if(count === 0){
            return true;
        } else{
            return false;
        }
    }
}
function tongNguyenTo(number1,number2){
    let sum=0;
    for(i=number1;i<=number2;i++){
        if(kiemTraSoNguyenTo(i)){
            sum=sum+i;
        }
    }
    return sum;
}

function baitap1(){
    let number1 = document.getElementById("numberOne").value;
    console.log(number1);
    let number2 = document.getElementById("numberTwo").value;
    let sum=tongNguyenTo(number1,number2);
    window.alert(`Tổng các số nguyên tố là ${sum}`);
}