<template>
  <div class="skills-container">
    <div class="skills-height">
    <SkillBar skillName="React" :targetProgress="90" />
    <SkillBar skillName="React-Native" :targetProgress="85" />
    <SkillBar skillName="Angular" :targetProgress="80" />
    <SkillBar skillName="Vue" :targetProgress="83" />
    <SkillBar skillName="NodeJS" :targetProgress="88" />
  </div>
  </div>
</template>

<script>
import SkillBar from './SkillBar.vue';

export default {
  components: {
    SkillBar
  }
};
</script>

<style scoped>
.skills-container {
  height: 100vh;
  background-image: url('@/assets/stars.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.skills-height{
  height: 80vh;
  width: 98vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
