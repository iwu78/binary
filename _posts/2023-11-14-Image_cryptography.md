---
toc: true
comments: false
layout: post
title: Image encryption
description: Encrypt Images together
type: hacks
courses: { compsci: {week: 1} }
---

<h1><strong>Upload an Image</strong></h1>
<input type="file" id="imageInput" accept="image/*">
<button id="andButton">AND Images</button>
<div id='resultDiv'></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"></script>
<script src="../../../assets/js/cryptography.js" type="text/javascript"></script>