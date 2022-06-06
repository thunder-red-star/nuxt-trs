<!-- Project tab component -->
<!-- This is a tab component contained within a tab container -->
<!-- When the user clicks on the tab, it will display the project under the tab -->

<!-- Props include: -->
<!-- project: the project object -->
<!-- A project object is defined as: -->
<!-- {
  title: The title of the project
  description: The description of the project
  links: An array of links to the project (e.g. github, website, etc.)
  image: The image of the project (optional)
  tags: An array of tags for the project (optional)
} -->

<template>
  <div class="project-tab">
    <div class="project-tab-header">
      <div class="project-tab-header-title">
        <h3>{{ project.title }}</h3>
      </div>
      <div class="project-tab-header-links">
        <!-- For each link, create a button link component -->
        <ButtonLink v-for="(link, index) in project.links" :key="index" :name="link.name" :url="link.url"></ButtonLink>
      </div>
    </div>
    <div class="project-tab-content">
      <div class="project-tab-content-description">
        <p>{{ project.description }}</p>
      </div>
      <div class="project-tab-content-tags">
        <div class="project-tab-content-tags-tag" v-for="tag in project.tags">
          <p>{{ tag }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonLink from "./ButtonLink.vue";
  export default {
    components: {ButtonLink},
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
.project-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
</style>