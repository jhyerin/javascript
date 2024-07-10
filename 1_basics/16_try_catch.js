/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고 함 (throw)
 * 2) 명시적으로 인지 할때 -> 잡는다고 함 (catch)
 */
function runner(){
  try{
    console.log('hello');
  
    throw new Error('문제 발생');
  
    console.log('Code Factory');
  }catch(e){
    console.log('catch');
    console.log(e);
  } finally{
    // 에러가 나도 무조건 실행 되는 부분, 사용 해도 되고 안해도 되고
    console.log(' finally ');
  }
}
runner();