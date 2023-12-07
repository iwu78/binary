---
toc: true
comments: false
layout: post
title: Image Encryption - Cipher
description: Image Encryptor utilizing columnar transposition.
type: hacks
courses: { compsci: {week: 1} }
---

<head>
<style>
input[type="file"] {
    display: none;
}
</style>
</head>
<h1><strong>Upload Image:</strong></h1>
<h3>Image:</h3>
<br>
<label for="imageInput" class="button-54">
    Choose File
</label>
<input type="file" id="imageInput" accept="image/*">
<br><br>
<button id="andButton" class='button-54 task-button'>Go!</button>
<br><br><br><br>
<label for='operation'>Select Operation: </label>
<select id="operation" class='button-54'>
    <option value="encrypt">Encrypt</option>
    <option value="decrypt" selected>Decrypt</option>
</select>
<br><br>
<label for='seed'>Enter Key: </label>
<input type='text' class='button-54' id='seed'>
<div id='resultDiv'></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"></script>
<script src="../../../assets/js/cipher.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/core.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.js"></script>