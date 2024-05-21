<template>
  <div class="skill">
    <span class="skill-name">{{ skillName }}</span>
    <div class="progress">
      <div
        class="progress-bar"
        :style="{ width: progressBarWidth + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillBar",
  props: {
    skillName: {
      type: String,
      required: true,
    },
    targetProgress: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      progressBarWidth: 0,
      hasFilled: false,
    };
  },
  methods: {
    updateProgressBar() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const elementPosition = this.$el.getBoundingClientRect().top + scrollTop;
      const windowHeight = window.innerHeight;

      if (scrollTop + windowHeight > elementPosition && !this.hasFilled) {
        this.animateProgress();
        this.hasFilled = true; // Ensure it fills only once
      }
    },
    animateProgress() {
      let start = 0;
      const end = this.targetProgress;
      const duration = 1000; // 1 second
      const stepTime = duration / end;

      const interval = setInterval(() => {
        start += 1;
        this.progressBarWidth = start;
        if (start >= end) {
          clearInterval(interval);
        }
      }, stepTime);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateProgressBar);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.updateProgressBar);
  },
};
</script>

<style scoped>
.skill {
  width: 50%;
  padding: 1vh;
  background: var(--color-transparent);
  box-shadow: 0 4px 10px rgb(255, 255, 255);
  border-radius: 8px;
  color: white;
}

.skill-name {
  display: block;
  margin-bottom: 1vh;
  font-size: 2vh;
  font-style: Libre;
}

.progress {
  width: 100%;
  height: 2vh;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: var(--color-primary-green);
  border-radius: 10px;
  transition: width 1s ease-out;
}
</style>

