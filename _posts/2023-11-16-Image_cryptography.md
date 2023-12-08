---
toc: true
comments: false
layout: post
title: Image encryption
description: Encrypt Images together
type: hacks
courses: { compsci: {week: 1} }
postimage: 'images/image-encrypt.jpg'
---

<head>
<style>
input[type="file"] {
    display: none;
}
</style>
</head><h1><strong>Upload Image:</strong></h1>
<h3>Image:</h3>
<br>
<label for="imageInput" class="button-54">
    Choose File
</label>
<input type="file" id="imageInput" accept="image/*">
<br><br>
<button id="andButton" class='button-54 task-button'>Go!</button>
<br><br><br><br>
<label for='seed'>Enter Key: </label>
<input type='text' class='button-54' id='seed'>
<div id='resultDiv'></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"></script>
<script src="../../../assets/js/cryptography.js" type="text/javascript"></script>