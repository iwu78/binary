const key = "HACK";
 
// Encryption
function encryptMessage(msg) {
    let cipher = "";
 
    // track key indices
    let k_indx = 0;
 
    const msg_len = msg.length;
    const msg_lst = Array.from(msg);
    const key_lst = Array.from(key).sort();
 
    // calculate column of the matrix
    const col = key.length;
 
    // calculate maximum row of the matrix
    const row = Math.ceil(msg_len / col);
 
    // add the padding character '_' in empty
    // the empty cell of the matrix
    const fill_null = (row * col) - msg_len;
    for (let i = 0; i < fill_null; i++) {
        msg_lst.push('0');
    }
 
    // create Matrix and insert message and
    // padding characters row-wise
    const matrix = [];
    for (let i = 0; i < msg_lst.length; i += col) {
        matrix.push(msg_lst.slice(i, i + col));
    }
 
    // read matrix column-wise using key
    for (let _ = 0; _ < col; _++) {
        const curr_idx = key.indexOf(key_lst[k_indx]);
        for (const row of matrix) {
            cipher += row[curr_idx];
        }
        k_indx++;
    }
 
    return cipher;
}
 
// Decryption
function decryptMessage(cipher) {
    let msg = "";
 
    // track key indices
    let k_indx = 0;
 
    // track msg indices
    let msg_indx = 0;
    const msg_len = cipher.length;
    const msg_lst = Array.from(cipher);
 
    // calculate column of the matrix
    const col = key.length;
 
    // calculate maximum row of the matrix
    const row = Math.ceil(msg_len / col);
 
    // convert key into list and sort 
    // alphabetically so we can access 
    // each character by its alphabetical position.
    const key_lst = Array.from(key).sort();
 
    // create an empty matrix to 
    // store deciphered message
    const dec_cipher = [];
    for (let i = 0; i < row; i++) {
        dec_cipher.push(Array(col).fill(null));
    }
 
    // Arrange the matrix column wise according 
    // to permutation order by adding into a new matrix
    for (let _ = 0; _ < col; _++) {
        const curr_idx = key.indexOf(key_lst[k_indx]);
 
        for (let j = 0; j < row; j++) {
            dec_cipher[j][curr_idx] = msg_lst[msg_indx];
            msg_indx++;
        }
        k_indx++;
    }
 
    // convert decrypted msg matrix into a string
    try {
        msg = dec_cipher.flat().join('');
    } catch (err) {
        throw new Error("This program cannot handle repeating words.");
    }
 
    const null_count = (msg.match(/_/g) || []).length;
 
    if (null_count > 0) {
        return msg.slice(0, -null_count);
    }
 
    return msg;
}
var myrng = new Math.seedrandom(document.getElementById('seed').value);
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
            var bitrow = '';
            for (let i = 0; i < data1.length; i += 1 ) {
                bitrow = bitrow + data1[i].toString(2);
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
