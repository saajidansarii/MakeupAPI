const sajid1 = "https://makeup-api.herokuapp.com/api/v1/products.json"

function Sajid (data) {
    // console.log(data)    
    document.write(data);
};

async function Sajid(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    for (let i = 0 ; i < data.length ; i++){
        if( data[i].id === "99");
        document.write(data[i].id)
        document.write(data[i].brand)
        document.write(data[i].name)
        document.write(data[i].price)
        document.write(data[i].description)
        document.write(data[i].product_link)
        document.write(data[i].image_link)
    }
    };
    Sajid(sajid1);



    