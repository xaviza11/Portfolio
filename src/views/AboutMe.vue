<template>
  <section class="about-section">
    <NavBar />
    <div class="about-i">
      <h2 class="about-title">{{ $t('about.aboutMe') }} <span class="highlight">{{$t('about.Im')}}</span></h2>
      <img class="profile-image" alt="profile image" src="@/assets/profile.png" />
      <div class="about-content">
        <p>
          {{ $t('about.about1') }} 
          <span class="highlight">Xavier Zamora Lorente</span>
          {{ $t('about.about2') }} 
          <span class="highlight">La Sénia, Tarragona</span>.
        </p>
        <p>
          {{ $t('about.about3') }} 
        </p>
        <p>
          {{ $t('about.about4') }} <a href="#projects" class="highlight">{{ $t('projects') }}</a> {{ $t('about.about5') }} 
        </p>
      </div>
      <button class="skills-button" @click="scrollToSkills">{{ $t('about.mySkills') }} </button>
    </div>
    <PortfolioSkills />
    <FooterCom />
  </section>
</template>

<script>
import NavBar from '../components/NavMenu.vue'
import FooterCom from '../components/FooterCom.vue'
import PortfolioSkills from '../components/PortfolioSkills.vue'

export default {
  name: "AboutMe",
  components: {
    NavBar,
    PortfolioSkills,
    FooterCom
  },
  methods: {
    scrollToSkills() {
      const scrollPosition =
        document.body.scrollHeight - window.innerHeight * 0.1;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.about-section {
  height: 100vh;
  color: white;
  width: 98vw;
  padding: 1vh;
  box-sizing: border-box;
  background-image: url("@/assets/stars.jpg");
  background-size: cover;
}

.about-i {
  height: 100vh;
  padding-left: 20vw;
  padding-right: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about-title {
  font-size: 5vh;
  margin-bottom: 4vh;
  font-family: Libre;
}

.profile-image {
  width: 20vh;
  height: 20vh;
  border-radius: 100px;
  margin-bottom: 4vh;
}

.about-content {
  text-align: left;
  width: 30vw;
}

.about-content p {
  margin-bottom: 3vh;
  font-size: 2.3vh;
}

.highlight {
  font-weight: bold;
  color: var(--color-primary-green);
  text-decoration: none;
}

.skills-button {
  margin-top: 2vh;
  padding: 6px 12px;
  font-size: 2vh;
  background-color: var(--color-primary-green);
  color: white;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.skills-button:hover {
  border-radius: 300px;
}
</style>

