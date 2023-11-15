var myrng = new Math.seedrandom('seed');
const imageInput = document.getElementById('imageInput');
const resultDiv = document.getElementById('resultDiv');
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
            var data1 = imageData1.data
            var newImage = imageData1
            console.log(data1)
            var newdata = new Uint8ClampedArray(data1.length);
            var data2 = new Uint8ClampedArray(data1.length);
            for (i = 0; i < data1.length; i++ ) {
                data2[i] = Math.round(myrng.quick() * 255)
            }
            for (let i = 0; i < data1.length; i += 4 ) {
                newdata[i] = ~(data1[i] ^ data2[i]) & 0xFF;
                newdata[i + 1] = ~(data1[i + 1] ^ data2[i + 1]) & 0xFF;
                newdata[i + 2] = ~(data1[i + 2] ^ data2[i + 2]) & 0xFF;
                newdata[i + 3] = data1[i + 3]; 
            }
            newImage.data.set(newdata)
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.putImageData(newImage, 0, 0);
            const resultImage = new Image();
            resultImage.src = ctx.canvas.toDataURL();
            resultDiv.innerHTML = '';
            resultDiv.appendChild(resultImage);
    });
}
const andButton = document.getElementById('andButton');
andButton.addEventListener('click', processImages);