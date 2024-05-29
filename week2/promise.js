let promise = new Promise((resolve, reject)=>{
    let success= true;
    if(success){
        resolve("Promise Resolved");
    }else{
        reject("Promise Rejected");
    }
})

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});