---
toc: true
comments: false
layout: post
title: Image encryption part 2
description: Encrypt Images together
type: hacks
courses: { compsci: {week: 1} }
---

<h1><strong>Upload an Image</strong></h1>
<input type="file" id="imageInput" accept="image/*">
<button id="andButton">Encrypt/Decrypt Image</button>
<br>
<label for='seed'>Enter Key: </label>
<select id="operation">
    <option value="encrypt">Encrypt</option>
    <option value="decrypt" selected>Decrypt</option>
</select>
<input type='text' id='seed'>
<div id='resultDiv'></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"></script>
<script src="../../../assets/js/cipher.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/core.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.js"></script>