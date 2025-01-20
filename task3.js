const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
let purchaseRecords = [{name: "Alice", courses: 10,price: XXX}, {name: "Bob", courses: 15}, {name: "Charlie", courses: 20}, {name: "Diana", courses: 25}, {name: "Evan", courses: 30}, {name: "Fiona", courses: 35}, {name: "George", courses: 40}, {name: "Hannah", courses: 45}];


function addPurchaseRecord(name, courses) {
    let price = 0;
    if(courses <= 10 && courses > 0) {
        price=courses*1500;
    }else if(courses <= 20 && courses > 10){
        price=courses*1300;
    }else if(courses >20){
        price=courses*1100;
    }else{
        console.log("輸入錯誤");
    }
    return price;
}
