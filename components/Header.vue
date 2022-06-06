<template>
  <h1>
    <span class="header-title header-title-glow">ThunderRedStar</span>
  </h1>
  <h2 class="header-subtitle">
    Your average cool boy 😎
  </h2>
</template>

<script>

</script>

<style>
  .header-title {
    font-size: 2em;
    font-weight: bold;
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-top: 0;
    margin: 0;
  }

  .header-subtitle {
    font-size: 1.5em;
    color: #eee;
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .header-title-glow {
    background: linear-gradient(to right, #ff0000, #ffff00, #ff0000);
    -webkit-background-clip: text !important;
    transition: all 0.25s ease-in-out;
    color: transparent;
    width: calc(100% - 20px);
    animation: glowing 15s linear infinite;
    background-size: 400%
  }

  @keyframes glowing {
    0% { background-position: 0 0; }
    100% { background-position: 400% 0; }
  }
</style>