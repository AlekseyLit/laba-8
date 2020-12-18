console.log ("задача 5 _ Нахождение максимального числа");
let mas=[2,-1,0,-5,-4];
let Max=mas[0];
for (i=1;i<5;i++){
    if(mas[i]>Max){
        Max=mas[i];
    }
}
console.log(Max);