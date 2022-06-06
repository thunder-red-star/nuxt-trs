<template>
  <Header/>
  <TabContainer
      :projects="projects"
      :selectedTab="selectedTab"
      @selectTab="selectTab"
  />
  <footer></footer>
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