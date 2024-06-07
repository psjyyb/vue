/**
 * 함수 매개변수에 rest 연산자 
 */

function toatl(num,...arr){
    let result = num;
    // for(let i = 0; i<arr.length; i++){
    //     result+=arr[i];     
    // }
    // arr.forEach(arrr=>{
    //     result+=arrr;
    // })
    // for( n of arr ){
    //     result+=n;
    //     }
    // for( idx in arr ){
    //         result+=arr[idx];
    //     }

    // reduce
    result = arr.reduce( (acc, ele)=>acc+ele, num );
    console.log('합계='+result);
}
toatl(10);
toatl(10,20);
toatl(10,20,30);
