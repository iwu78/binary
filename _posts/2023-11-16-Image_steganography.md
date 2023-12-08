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

<h3>So how does it work?</h3>
<p>Steganography is hiding data inside an image without it being obvious. This is most often done by Least Significant Bit encryption, which hides data inside the least significant bit of each RGB pixel value in an image. In this, we take an image and encode its data inside the two least significant bits of another image. This tool encodes an image inside another image using the two least significant bits!</p>