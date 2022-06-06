<!-- Tab container -->
<!-- Contains a series of tabs and a container to hold the current tab's content -->
<!-- When the user clicks on a tab, it will display the project under the tab -->

<!-- We will pass in a series of projects to the tab container -->
<!-- For each project, we will create a tab -->

<template>
  <div>
    <div class="tab-container" ref="tabContainer">
      <div class="tab-container__tabs">
        <div class="tab-container__tabs__tab" v-for="(project, index) in projects" :key="index"
             @click="selectTab(index)">
          <!-- Create a gradient from #ff0000 to #ffff00 with targetColor and #880000 to #888800 with startColor -->
          <RowTab :content="project.title"
                  :targetColor="'#' + (0xff0000 + Math.round(0xff * (index / (projects.length - 1))) * 0x100).toString(16)"
                  :startColor="'#' + (0x880000 + Math.round(0x88 * (index / (projects.length - 1))) * 0x100).toString(16)" />
        </div>
      </div>
      <div class="tab-container__content" :key="renderTab">
        <!-- Create a project tab component for each project, and hide them if they are not selected -->
        <ProjectTab v-for="(project, index) in projects" :key="index" :project="project"
                    v-show="selectedTab === index"></ProjectTab>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTab from './TabBody.vue'

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
  }
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
}

.tab-container__tabs__tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
}

.tab-container__tabs__tab:hover {
  opacity: 1;
}

.active {
  opacity: 1;
}

.tab-container__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 0.5s ease-in-out;
  border: 1px solid #ccc;
}

.inter {
  font-family: 'Inter', sans-serif;
}
</style>
