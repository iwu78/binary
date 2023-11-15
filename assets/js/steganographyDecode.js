const imageInput = document.getElementById('imageInput');
const ctx = document.createElement('canvas').getContext('2d');
function handleImageUpload(input, callback) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const image = new Image();
        image.onload = function () {
            ctx.canvas.width = image.width;
            ctx.canvas.height = image.height;
            ctx.drawImage(image, 0, 0, image.width, image.height);
            const imageData = ctx.getImageData(0, 0, image.width, image.height);
            callback(imageData);
        };
        image.src = e.target.result;
    };
    reader.readAsDataURL(file);
}
function handleImageUpload2(input, callback) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const image = new Image();
        image.onload = function () {
            ctx.canvas.width = image.width * 2;
            ctx.canvas.height = image.height * 2;
            ctx.drawImage(image, 0, 0, image.width * 2, image.height * 2);
            const imageData = ctx.getImageData(0, 0, image.width * 2, image.height * 2);
            callback(imageData);
        };
        image.src = e.target.result;
    };
    reader.readAsDataURL(file);
}
function processImages() {
    handleImageUpload2(imageInput, function(imageData1) {
        var data1 = imageData1.data;
        ctx.canvas.height = data1.height/2;
        ctx.canvas.width = data1.width/2;
        var decryptedImageData = ctx.createImageData(200, 200);
        
        newdata = data1;

        for (let i = 0; i < newdata.length; i += 4) {
            const bits2 = [
                (newdata[i] & 0x03) << 6,
                (newdata[i + 1] & 0x03) << 4,
                (newdata[i + 2] & 0x03) << 2,
                newdata[i + 3] & 0x03
            ];
    
            decryptedImageData.data[i] = (newdata[i] & 0xFC) | bits2[0];
            decryptedImageData.data[i + 1] = (newdata[i + 1] & 0xFC) | bits2[1];
            decryptedImageData.data[i + 2] = (newdata[i + 2] & 0xFC) | bits2[2];
            decryptedImageData.data[i + 3] = (newdata[i + 3] & 0xFC) | bits2[3];
        }

        ctx.clearRect(0, 0, 200, 200);
        ctx.putImageData(decryptedImageData, 0, 0);

        const resultImage = new Image();
        resultImage.src = ctx.canvas.toDataURL();
        resultDiv.innerHTML = '';
        resultDiv.appendChild(resultImage);
    });
}
const andButton = document.getElementById('andButton');
andButton.addEventListener('click', processImages);