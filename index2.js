function getData(id){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log("Fetching data for id:",id);
                    resolve(id);
                }, 1000)
            });
        }

        async function fetchData(){
            try {
                const data1 = await getData(101);
                console.log("First fetch:",data1);
                const data2 = await getData(102);
                console.log("Second fetch:",data2);
                const data3 = await getData(103);
                console.log("Second fetch:",data3);
            } catch (error) {
                console.log("Errorr occurred:",error);
            }
        }
        async function getnextData(){
            console.log("getting data 1.....");
            await getData(1);
            console.log("getting data 2.....");
            await getData(2);
            console.log("getting data 3.....");
            await getData(3);
        }