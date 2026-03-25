// Introduction to buffers in NodeJS 
// A buffer storess raw bytes
// Here we create buffer directly from a string

const textBuffer = Buffer.from("Srusti");

// The value in the buffer is the encod form the text
console.log("Buffer object: ", textBuffer);
console.log("Buffer length in bytes: ", textBuffer.length);
console.log("Byte at Index 0",textBuffer[0]);
console.log("Byte at Index 1",textBuffer[1]);

//Each character is stored internallynas byte data
// For standard ASCII letters there will be a equivalent code
//Buffer stores numeric value between 0 to 255