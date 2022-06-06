<!-- Button link component -->
<!-- Takes in a name and a url -->
<!-- When the user clicks on the button, it will open the url in a new tab -->

<template>
  <div class="button-link">
    <a :href="url" target="_blank">{{ name }}</a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.button-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.button-link:hover {
  background-color: #ccc;
}
</style>