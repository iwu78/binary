---
toc: true
comments: false
layout: post
title: Background Testing
description: bgtest
type: hacks
courses: { compsci: {week: 1} }
---
<head>
<style>
  .container1 {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .bubbles {
    position: relative;
    display: flex;
  }
  .bubbles span {
    position: relative;
    height: 30px;
    width: 30px;
    background: #4fc3dc;
    margin: 0 4px;
    border-radius: 50%;
    box-shadow: 0 0 10px #4fc3dc60, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc;
    animation: animate 15s linear infinite;
    animation-duration: calc(75s / var(--i));
  }
  .bubbles span:nth-child(even) {
    background: #ff2d75;
    box-shadow: 0 0 10px #ff2d7560, 0 0 50px #ff2d75, 0 0 100px #ff2d75;
  }
  @keyframes animate {
    0% {
      transform: translateY(100vh) scale(0);
    }
    100% {
      transform: translateY(-10vh) scale(1);
    }
  }
</style>
</head>
<div class="container1">
<div class='bubbles'>
<span style="--i:11;"></span>
<span style="--i:24;"></span>
<span style="--i:20;"></span>
<span style="--i:10;"></span>
<span style="--i:14;"></span>
<span style="--i:23;"></span>
<span style="--i:18;"></span>
<span style="--i:21;"></span>
<span style="--i:12;"></span>
<span style="--i:17;"></span>
<span style="--i:19;"></span>
<span style="--i:10;"></span>
<span style="--i:22;"></span>
<span style="--i:15;"></span>
<span style="--i:25;"></span>
<span style="--i:14;"></span>
<span style="--i:11;"></span>
<span style="--i:18;"></span>
<span style="--i:26;"></span>
<span style="--i:22;"></span>
<span style="--i:16;"></span>
<span style="--i:18;"></span>
<span style="--i:11;"></span>
<span style="--i:25;"></span>
<span style="--i:13;"></span>
<span style="--i:19;"></span>
<span style="--i:18;"></span>
<span style="--i:21;"></span>
<span style="--i:18;"></span>
<span style="--i:11;"></span>
<span style="--i:16;"></span>
<span style="--i:19;"></span>
<span style="--i:24;"></span>
<span style="--i:9;"></span>
<span style="--i:12;"></span>
<span style="--i:14;"></span>
<span style="--i:23;"></span>
<span style="--i:19;"></span>
<span style="--i:11;"></span>
<span style="--i:26;"></span>
</div>
</div>