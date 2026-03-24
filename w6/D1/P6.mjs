// Import ES Modules
import createInvoicelabel,{calculateTotal,taxrate} from "./P5.mjs";
const subtotal = 4000;
const total = calculateTotal(subtotal);
const label = createInvoicelabel("INV-2026-001");
console.log("Invoice label:",label);
console.log("Tax rate:",taxrate);
console.log("final total:",total);