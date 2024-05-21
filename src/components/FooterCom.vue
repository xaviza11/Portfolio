<template>
 <div class="navbar">
        <a href="#projects"><img src="@/assets/whatsapp.png" alt="Projects" class="icon" /></a>
        <a href="#home"><img src="@/assets/github.png" alt="Home" class="icon" /></a>
        <a href="#about"><img src="@/assets/LinkedIn.png"  alt="About" class="icon" /></a>
  </div>
</template>

<script>
export default {
  name: 'FooterCom',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: var(--color-transparent);
  color: white;
  padding-top: 1vh;
  padding-bottom: 1vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed; 
  bottom: 0; 
  width: 99vw; 
  z-index: 1000; 
}

.navbar-links {
  display: flex;
}

.navbar-links a {
  color: white;
  text-decoration: none;
}

.icon {
  width: 4vh;
  height: 4vh;
}
</style>