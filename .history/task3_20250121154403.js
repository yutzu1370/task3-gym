//const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
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
addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12); 
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量"); 