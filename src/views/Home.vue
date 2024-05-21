<template>
  <section class="about-section">
    <NavBar />
    <div class="home-container">
      <div class="home-subcontainer">
      <h2 class="text">{{ $t('home.hiThere') }}</h2>
      <span class="name-container"><h2 class="text">{{ $t('home.im') }}</h2><h1 class="green-text">Xavier Zamora Lorente</h1></span>
      <h3 class="subtitle">{{ displayedText }}</h3>
      </div>
      <div class="home-subcontainer">
      
      </div>
    </div>
    <FooterCom />
  </section>
</template>

<script>
import NavBar from '../components/NavMenu.vue'
import FooterCom from '../components/FooterCom.vue'

export default {
  name: "AboutMe",
  components: {
    NavBar,
    FooterCom
  },
  data() {
    return {
      fullText: this.$t('home.webDeveloper'),
      displayedText: '',
      index: 0
    };
  },
  mounted() {
    this.typeWriterEffect();
  },
  methods: {
    typeWriterEffect() {
      if (this.index < this.fullText.length) {
        this.displayedText += this.fullText.charAt(this.index);
        this.index++;
        setTimeout(this.typeWriterEffect, 100);
      }
    }
  }
};
</script>

<style scoped>
.home-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center; 
  align-items: center; 
}
.home-subcontainer{
  height: 40vw;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.name-container{
  display: flex;
  gap: 1vw;
}
.text {
  color: white;
  font-size: 6vh; 
}
.green-text {
  color:  var(--color-primary-green);
  font-size: 6vh; 
}
.subtitle{
  font-size: 4vh;
  margin-top: 10vh;
  color:  var(--color-primary-green);
}
</style>


