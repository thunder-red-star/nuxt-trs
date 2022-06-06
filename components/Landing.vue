<template>
  <div class="homepage-root">
    <div class="content-container">
      <Header/>
      <h1 class="inter heading"><span class="red-to-yellow">Projects</span></h1>
      <p class="inter description">Here are some of the projects I have been working on over the last few months. There are links you can use to find out more.</p>
      <TabsContainer
          :projects="projects"
          :selectedTab="selectedTab"
          @selectTab="selectTab"
      />
    </div>
  </div>
</template>

<script>
// Import projects from the projects.json file in assets/json
import projects from '~/assets/json/projects.json'
export default {
  data() {
    return {
      // A random list of projects for demonstration purposes
      projects: projects,
      selectedTab: 0,
    }
  },
}
</script>

<style>
html {
  background-color: #131517;
}
.homepage-root {
  background-color: #131517;
  margin: 0;
  padding: 20px;
  position: relative;
}

.content-container {
  /* Be responsive to the screen size */
  width: 70%;
  min-width: 300px;
  margin: 0 auto;
  align-items: center;
  align: center;
  text-align: center;
}

.inter {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.heading {
  font-size: 2em;
  font-weight: bold;
  padding-top: 0;
  margin: 0;
}

.description {
  font-size: 1.5em;
  color: #eee;
}

.red-to-yellow {
  background: linear-gradient(to right, #ff0000, #ffff00, #ff0000);
  -webkit-background-clip: text !important;
  transition: all 0.25s ease-in-out;
  color: #eee;
  width: calc(100% - 20px);
  animation: glowing 15s linear infinite;
  background-size: 400%
}


.red-to-yellow:hover {
  color: transparent;
}

@keyframes glowing {
  0% { background-position: 0 0; }
  100% { background-position: 400% 0; }
}
</style>