---
toc: true
comments: false
layout: post
title: Image steganography
description: Hide an image inside another!
type: hacks
courses: { compsci: {week: 1} }
postimage: 'images/steg-encode.jpg'
---

<h1><strong>Upload Two Images!</strong></h1>
<input type="file" id="imageInput" accept="image/*">
<input type="file" id="imageInput2" accept="image/*">
<button id="andButton">Hide Image</button>
<br>
<div id='resultDiv'></div>
<script src="../../../assets/js/steganographyEncrypt.js" type="text/javascript"></script>