export const API_KEY='AIzaSyBuFm1PJ8y2Uum488tYFMKnQbWtS6Jo9XY';

 export const whole_value=(value)=>{
 if(value>=1000000){
    return(
       Math.floor( value/1000000)+'M'
    )
 }else if(value>=1000){
return(
       Math.floor( value/1000)+'K'
    )
 }else{
    return value
 }
}