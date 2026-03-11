function invoice(gstRate = 0.20, ...items) {

let subtotal = 0;

    for (let item of items) {

        if (item.name === "STOP") {
            break;
        }

        if (item.price || item.qty || item.price <= 0 || item.qty <= 0) {
            continue;
        }
    subtotal = item.price * item.qty;
    }

let gst = subtotal * gstRate;
let total = subtotal + gst;

return { subtotal, gst, total };
}

let result = invoice(
0.20,
{ name: "Pen", price: 10, qty: 3 },
{ name: "Book", price: 20, qty: 2 }
);
console.log("Total amount is:", result);