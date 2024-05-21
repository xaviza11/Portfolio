<template>
 <div class="navbar">
    <div>
        <h2 class="nav-title">XZL</h2>
      </div>
      <div class="navbar-links">
        <a href="#home">
          <router-link to="/"><img src="@/assets/home.png" alt="Home" class="icon" /> <h3>{{ $t('nav.home') }}</h3></router-link>
        </a>
        <a href="#about">
         <router-link to="/about"><img src="@/assets/about.png"  alt="About" class="icon" /> <h3>{{ $t('nav.about') }}</h3></router-link>
        </a>
        <a href="#projects">
          <router-link to="/projects"><img src="@/assets/folder.png" alt="Projects" class="icon" /><h3> {{ $t('nav.projects') }} </h3></router-link>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: var(--color-transparent);
  color: white;
  padding: 1vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed; 
  top: 0; 
  width: 100vw; 
  z-index: 1000; 
}

.nav-title{
  font-family: Libre;
  color: var(--color-primary-green);
  font-size: 4vh;
}

.navbar-brand p {
  font-family: Libre;
}

.navbar-links {
  display: flex;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.navbar-links h3 {
  color: white;
  font-size: 3vh;
}

.navbar-links h3:hover{
  color: var(--color-primary-green)
}

.navbar-links a:hover {
  text-decoration: underline;
  text-decoration-color: var(--color-primary-green);
}

.navbar-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  bottom: -2px;
  left: 0;
  background-color: var(--color-primary-green);
  transition: width 0.3s ease-in-out;
}

.navbar-links a:hover::after {
  width: 100%;
}

.icon {
  width: 4vh;
  height: 4vh;
  margin-left: 2vw;
  margin-right: 0.2vw;
}
</style>
