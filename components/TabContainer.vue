<!-- Tab container -->
<!-- Contains a series of tabs and a container to hold the current tab's content -->
<!-- When the user clicks on a tab, it will display the project under the tab -->

<!-- We will pass in a series of projects to the tab container -->
<!-- For each project, we will create a tab -->

<template>
  <div>
    <div class="tab-container" ref="tabContainer">
      <div class="tab-container__tabs">
        <div class="tab-container__tabs__tab" v-for="(project, index) in projects" :key="index" @click="selectTab(index)">
          <div class="tab-container__tabs__tab__title">
            {{ project.title }}
          </div>
        </div>
      </div>
      <div class="tab-container__content" :key="renderTab">
        <!-- Create a project tab component for each project, and hide them if they are not selected -->
        <ProjectTab v-for="(project, index) in projects" :key="index" :project="project" v-show="selectedTab === index"></ProjectTab>
      </div>
    </div>
  </div>
</template>

<script>
  import ProjectTab from './ProjectTab.vue'

  export default {
    components: {
      ProjectTab
    },
    props: {
      projects: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selectedTab: 0,
        renderTab: 0
      }
    },
    methods: {
      selectTab(index) {
        this.selectedTab = index
        // Add an active class to the selected tab
        this.$refs.tabContainer.querySelectorAll('.tab-container__tabs__tab').forEach(tab => {
          tab.classList.remove('active')
        })
        this.$refs.tabContainer.querySelectorAll('.tab-container__tabs__tab')[index].classList.add('active')
        this.renderTab++;
      }
    },
    mounted() {
      // Store all the projects in a variable so it is possible to recall them when tabs are clicked
      this.projects = this.projects
    },
  }
</script>

<style>
  .tab-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tab-container__tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }

  .tab-container__tabs__tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    cursor: pointer;
    margin-bottom: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    -moz-border-radius-topleft: 20px;
    -moz-border-radius-topright: 20px;
    transition: all 0.5s ease-in-out;
  }

  .tab-container__tabs__tab__title {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
  }

  .tab-container__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: all 0.5s ease-in-out;
  }

  .tab-container__content__tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 5px;
  }

  .active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #888888;
    border-radius: 5px;
  }
</style>
