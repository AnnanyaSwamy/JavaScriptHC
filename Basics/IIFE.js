//removes pollution caused by global scope 
//()()//syntax
//()the function defn () return

(function fun(){
    //named iife
    console.log('DB CONNECTED');
 })();//<-this imediately invoked function does not know where to stop context hence ; for termination

 ((name)=>{
    console.log(`DB CONNECTED ${name}, hello`);
 })("thisISTheName");
