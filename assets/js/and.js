const imageInput = document.getElementById('imageInput');
const imageInput2 = document.getElementById('imageInput2');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
function handleImageUpload(input, callback) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const image = new Image();
        image.onload = function () {
            canvas.width = image.width;
            canvas.height = image.height;
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
        handleImageUpload(imageInput2, function(imageData2) {
            var red1, green1, blue1, alpha1, red2, green2, blue2, alpha2;
            var data1 = imageData1.data
            var newImage = imageData1
            var data2 = imageData2.data
            console.log(data1)
            var newdata = new Uint8ClampedArray(data1.length);
            for (let i = 0; i < data1.length; i += 4) {
                newdata[i] = ~(data1[i] & data2[i]) & 0xFF;
                newdata[i + 1] = ~(data1[i + 1] & data2[i + 1]) & 0xFF;
                newdata[i + 2] = ~(data1[i + 2] & data2[i + 2]) & 0xFF;
                newdata[i + 3] = data1[i + 3];  // Keep alpha channel from the first image
            }
            newImage.data.set(newdata)
            ctx.putImageData(newImage, 0, 0);
        });
    });
}
const andButton = document.getElementById('andButton');
andButton.addEventListener('click', processImages);