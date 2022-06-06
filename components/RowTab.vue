<!-- Row Tab -->
<!-- If clicked, it will display the project under the tab -->

<template>
  <div class="row-tab">
    <h3 class="row-tab-title" >{{ content }}</h3>
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        required: true
      },
      targetColor: {
        type: String,
        required: false
      },
      startColor: {
        type: String,
        required: false
      },
    },
    data() {
      return {
        targetColor: this.targetColor,
        startColor: this.startColor,
      }
    }
  }
</script>

<style>
/* The row tab starts at the startColor and ends at the targetColor, transitioning smoothly */
.row-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  height: 50px;
  transition: all 0.5s ease-in-out;
  background-color: v-bind('targetColor');
  cursor: pointer;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  -moz-border-radius-topleft: 20px;
  -moz-border-radius-topright: 20px;
  transition: all 0.5s ease-in-out;
}

.row-tab-title {
  font-weight: bold;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #000;
}
</style>