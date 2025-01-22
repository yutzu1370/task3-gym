const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
let purchaseRecords = [];
function addPurchaseRecord(name, courses) {
    if( !name || typeof courses !== "number" || courses <= 0) {
        console.log("輸入錯誤，請輸入有效的會員名稱和課程數量。");
        return;
    }
//name == undefined || name == "" 可以簡化為 !name，這樣能檢查 name 是否是 undefined 或空字串，或其他 falsy 值。

    let unitPrice;
    if (courses <= 10) {
        unitPrice = 1500;
    } else if (courses <= 20) {
        unitPrice = 1300;
    } else {
        unitPrice = 1100;
    }

    const totalPrice = unitPrice * courses;
    purchaseRecords.push({
        name: name, 
        courses: courses, 
        unitPrice: unitPrice, 
        totalPrice: totalPrice
    });
    
    console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${totalPrice} 元。`);
}
/*第二階段：計算目前的總營業額
新增函式 calculateTotalPrice，計算目前的總營業額為多少。

印出 console.log 文字為 目前總營業額為 ${totalPrice} 元*/

function calculateTotalPrice() {
    let totalPrice = 0;
    purchaseRecords.forEach((record) => {
        totalPrice += record.totalPrice;
    });
    
    console.log(`目前總營業額為 ${totalPrice} 元`);

    
}

/*第三階段：篩選出還沒有購課的會員
新增函式 filterNoPurchaseMember，篩選特定條件的會員記錄。例如：未購買過課程的會員，並依序列出

印出 console.log 文字為 未購買課程的會員有：....... */

function filterNoPurchaseMember() {
   // let PurchaseMembers=members.filter(function(item){
 //       return item["name"].includes(purchaseRecords);
  //  })
    let noPurchaseMembers=members.filter(function(item){
        return !item["name"].includes(purchaseRecords);
    })
        
    
    console.log(`未購買課程的會員有：${noPurchaseMembers}`);
}



addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12); 
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量"); 

calculateTotalPrice();
filterNoPurchaseMember();