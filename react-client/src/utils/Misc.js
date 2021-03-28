export const Misc = {
    
    readablePrice(price) {
        
        // price = price.toString().split('.');
        // let leftArr = price[0];
        // leftArr = leftArr.split('');

        // let moduloArr = leftArr.length % 3 === 0;
        // for(let i = leftArr.length - 1 ; i > 0; i--){
        //     if(!(i + 1 >= leftArr.length)){
        //         if(moduloArr && i % 3 === 0) {
        //             leftArr[i] = "," + leftArr[i]
        //         } else if(!moduloArr && (i + 1) % 3 === 0) {
        //             leftArr[i] = "," + leftArr[i];
        //         }
        //     };
        // }
        // price[0] = leftArr.join('');
        // price[1] = parseFloat("." + price[1]).toFixed(2).split('.')[1];
        
        // return price.join('.'); // doesn't work lol keeping for reference though

        price = price.toString().split(".");
        price[1] = parseFloat("." + price[1]).toFixed(2).split('.')[1];
        price[0] = price[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return price.join('.');



    },

}
