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
function processImages() {
    handleImageUpload(imageInput, function(imageData1) {
        var data1 = imageData1.data;
        ctx.canvas.height = imageData1.height;
        ctx.canvas.width = imageData1.width;
        var decryptedImageData = ctx.createImageData(200, 200);
        
        newdata = data1;

        for (let i = 0; i < data1.length; i += 4) {
            var pixelValue = (
                ((data1[i] & 0x03) << 6) |
                ((data1[i + 1] & 0x03) << 4) |
                ((data1[i + 2] & 0x03) << 2) |
                (data1[i + 3] & 0x03)
            );

            decryptedImageData.data[i / 4] = pixelValue;
            decryptedImageData.data[i / 4 + 1] = pixelValue;
            decryptedImageData.data[i / 4 + 2] = pixelValue;
            decryptedImageData.data[i / 4 + 3] = 255; // Alpha channel set to 255
        }
        console.log(newdata)

        ctx.clearRect(0, 0, imageData1.width, imageData1.height);
        ctx.putImageData(decryptedImageData, 0, 0);

        const resultImage = new Image();
        resultImage.src = ctx.canvas.toDataURL();
        resultDiv.innerHTML = '';
        resultDiv.appendChild(resultImage);
    });
}
const andButton = document.getElementById('andButton');
andButton.addEventListener('click', processImages);