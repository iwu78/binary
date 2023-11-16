const imageInput = document.getElementById('imageInput');
const imageInput2 = document.getElementById('imageInput2');
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
        handleImageUpload(imageInput2, function(imageData2) {
            var data1 = imageData1.data;
            var newImage = imageData1;
            ctx.canvas.height = newImage.height;
            ctx.canvas.width = newImage.width;
            var data2 = imageData2.data;
            
            var newdata = data1;
            for (let i = 0; i < newdata.length; i += 4) {
                var bits2 = [
                    (data2[i / 4] >> 6) & 0x03,
                    (data2[i / 4] >> 4) & 0x03,
                    (data2[i / 4] >> 2) & 0x03,
                    data2[i / 4] & 0x03
                ];

                // Combine bits from data1 and bits2
                newImage.data[i] = (data1[i] & 0xFC) | bits2[0];
                newImage.data[i + 1] = (data1[i + 1] & 0xFC) | bits2[1];
                newImage.data[i + 2] = (data1[i + 2] & 0xFC) | bits2[2];
                newImage.data[i + 3] = (data1[i + 3] & 0xFC) | bits2[3];
            };

            newImage.data.set(newdata);
            ctx.clearRect(0, 0, 200, 200);
            ctx.putImageData(newImage, 0, 0);

            const resultImage = new Image();
            resultImage.src = ctx.canvas.toDataURL();
            resultDiv.innerHTML = '';
            resultDiv.appendChild(resultImage);
        });
    });
}
const andButton = document.getElementById('andButton');
andButton.addEventListener('click', processImages);