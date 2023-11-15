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
            var data2 = imageData2.data;
            
            var newdata = data1;
            for (let i = 0; i < newdata.length; i += 4) {
                console.log("0 to 6: " + (data1[i]).toString(2).slice(0, 6))
                console.log("0 to 2: " + (data2[i / 4]).toString(2).slice(-2))
                newdata[i] = parseInt((data1[i]).toString(2).slice(0, 6) + (data2[i / 4]).toString(2).slice(-2), 2)
                newdata[i + 1] = parseInt((data1[i + 1]).toString(2).slice(0, 6) + (data2[Math.floor(i / 4)]).toString(2).slice(4, 6), 2)
                newdata[i + 2] = parseInt((data1[i + 2]).toString(2).slice(0, 6) + (data2[Math.floor(i / 4)]).toString(2).slice(2, 4), 2)
                newdata[i + 3] = parseInt((data1[i + 3]).toString(2).slice(0, 6) + (data2[Math.floor(i / 4)]).toString(2).slice(0, 2), 2)
            };

            newImage.data.set(newdata);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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