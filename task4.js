console.log ("задача 4 _ Сортировка чисел");
let num1=prompt("введите первое число:");
let num2=prompt("введите второе число:");
let num3=prompt("введите третье число:");
let first;
let second;
let third;
if (num1>=num2){
  first=num2;
  second=num1;
}else if(num2>=num1){
  first=num1;
  second=num2;
}
if(first>num3){
  third=second;
  second=first;
  first=num3;
}else if(second>num3){
  third=second;
  second=num3;
}else{
  third=num3;
}
console.log(first,second,third);

