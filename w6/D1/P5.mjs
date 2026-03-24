//ES module exports
// Named export for a shared constant
export const taxrate = 0.18;
//named export for a reuseable function
 export function calculateTotal(subtotal){
     return subtotal + subtotal*taxrate;
}
//Default export:for the main feature of the module.
export default function createInvoicelabel(invoiceNumber){
    return "Invoice:" + invoiceNumber;
}