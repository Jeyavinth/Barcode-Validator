let barcodeInput = document.querySelector(".inputBox")
let enterButton = document.querySelector(".enterButton")
let errorMessage = document.querySelector(".errorMessage")
let GTIN8 = document.querySelector(".GTIN-8")
let barcode = document.querySelector(".barcode")
let newBarcode = document.querySelector(".newBarcode")

newBarcode.disabled = true;

enterButton.addEventListener("click", function(){
    errorMessage.textContent = ""
    if (barcodeInput.value.length > 7 ){
        errorMessage.textContent = "PLEASE ENSURE YOU HAVE TYPED IN 7 DIGITS"
        barcodeInput.disabled = true;
        newBarcode.disabled = false;
        newBarcode.addEventListener("click", function(){
            location.reload()})
    } else if(barcodeInput.value.length < 7){
        errorMessage.textContent = "PLEASE ENSURE YOU HAVE TYPED IN 7 DIGITS"
        barcodeInput.disabled = true;
        newBarcode.disabled = false;
        newBarcode.addEventListener("click", function(){
            location.reload()})
    }
    if(barcodeInput.value.length == 0){
        errorMessage.textContent = "SEEMS LIKE YOU HAVEN'T TYPED IN ANYTHING. TRY AGAIN."
        barcodeInput.disabled = true;
        newBarcode.disabled = false;
        newBarcode.addEventListener("click", function(){
            location.reload()})
    }
    if (barcodeInput.value.length == 7){
        let digit1 = parseInt(barcodeInput.value[0])
        let digit2 = parseInt(barcodeInput.value[1])
        let digit3 = parseInt(barcodeInput.value[2])
        let digit4 = parseInt(barcodeInput.value[3])
        let digit5 = parseInt(barcodeInput.value[4])
        let digit6 = parseInt(barcodeInput.value[5])
        let digit7 = parseInt(barcodeInput.value[6])

        let total = (digit1*3)+(digit2*1)+(digit3*3)+(digit4*1)+(digit5*3)+(digit6*1)+(digit7*3)
        let roundUp = Math.ceil(total/10)*10
        let GTIN_8 = (roundUp-total) % 10
        
        GTIN8.textContent = "YOUR GTIN-8 DIGIT IS: "+GTIN_8
        barcode.textContent = "YOUR BARCODE IS: "+barcodeInput.value+GTIN_8
        newBarcode.disabled = false;
        barcodeInput.disabled = true;

        newBarcode.addEventListener("click", function(){
            location.reload()
        })
        
        
    }
})