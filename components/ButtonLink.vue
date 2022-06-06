<!-- Button link component -->
<!-- Takes in a name and a url -->
<!-- When the user clicks on the button, it will open the url in a new tab -->

<template>
  <div class="button-link" @click="openUrl">
    <p class="button-link-name">{{ name }}</p>
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
    },
    targetColor: {
      type: String,
      required: false
    }
  },
  // Attach a click event to the button
  methods: {
    openUrl() {
      window.open(this.url, '_blank')
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
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.button-link:after {
  content: "";
}

.button-link:hover {
  background-color: #52c4fa;
}

.button-link:hover:after {
  content: "->";
}
</style>