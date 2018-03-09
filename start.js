console.log('Sub man!! Welcome to NodeJs')
console.log('===========================')

/* function  toConvert(calorie){
    var joule = 4.184
    return calorie * joule
}
console.log('Convert calorie to joule: '+toConvert(45)) */
//---------------diffentcial ==, ===
/* var a = 2;
if(a == '2') console.log('test1:');
if(a === '2') console.log('test2:'); */

/* var i=0;
while(i<3){
    console.log('I love u');
    i = i+1;        
}
 */
//---------------------------
/* var a=9;
while(a >= 0){
    console.log(a);
    a = a-1;

} */
//---------------------------
/* var interest = 1.25
var deposit  = 80000
var year = 0
while(year <= 5)
{
    console.log('Year '+year+' = '+deposit.toFixed(2))
    deposit = deposit * (100 + interest) / 100
    year = year + 1
    //console.log('total '+ (80000 * 1.0125 ** 5).toFixed(2))

}
console.log('total '+ (80000 * 1.0125 ** 5).toFixed(2)) */
//---------------------------
/* var x = 20
var i = 0.00
while(i <= 5.00){
    console.log(i.toFixed(2))
    i = i + 0.01
} */
/* //---------------------------หา root 3-----------------
var x = 20
var i = 0.00
while(i <= 5.00){
    var d = i * i * i - x
    if(-0.1 <= d && d <= 0.1) console.log(i.toFixed(2))// ปัญหาภาษาJavascript
    i = i + 0.01
} */
//--------------หา Binary serach หา root 3 แบบ recusion -----------
/* function find(x, left, right){
    var mid = (left + right) / 2
    var d = mid * mid * mid - x //สมการroot3
    if(-0.0001 <= d && d <= 0.0001) return mid //ถ้าตัวที่หาอยู่กล่างพอดี
    if(mid * mid * mid < x) return find(x, mid, right)
    if(mid * mid * mid > x) return find(x, left, mid)
}
console.log('root3:recusive '+find(20, 0, 20))
//--------------หา Binary serach หา root 3 แบบ iterasive -----------
var x = 20
var left = 0
var right = x
while(true){
    var mid = (left + right) / 2
    var d = mid * mid * mid - x 
    if(-0.0001 <= d && d <= 0.0001){
        console.log('root3:iterasive '+mid)
        break
    }
    if(mid * mid * mid < x) left = mid
    if(mid * mid * mid > x) right = mid  
} */
//--------------หา Mod -----------
var n = 20
var count = 0
while(count <= n){
 if(n % count == 0  ){
     console.log('findMod: '+count)
 }
 count = count +1
}

