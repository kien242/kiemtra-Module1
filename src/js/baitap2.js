function numberOneTriangle(number){
    for(i=1;i<=number;i++){
        let print='';
        for(y=1;y<=i;y++){
            print=print+'*';
        }
        console.log(print);
    }
}

function baitap2(){
    const sodong = document.getElementById("sodong").value;
    numberOneTriangle(sodong);
    window.alert(`Mở console log để xem kết quả`)
}