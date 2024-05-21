import { createI18n } from "vue-i18n";

// Define tus mensajes de traducción
const messages = {
  es: {
    about: {
      aboutMe: "Conoce quien",
      Im: "SOY",
      projects: "Projectos",
      knowMe: "Conoce quien soy ",
      about1: "Hola a todos, soy ",
      about2: " un programador apassionado de ",
      about3: "Empeze a programar unos años atras, porque me encanta sentir que estoy creando cosas utiles para la sociedad.",
      about4: "En la sección ",
      about5: " puedes ver algunos de mis trabajos.",
      mySkills: "Habilidades",
    },
    nav: {
      home: "Inicio",
      about: "Sobre Mi",
      projects: "Projectos",
    },
    home: {
        "hiThere": "¡Hola a todos!, ",
        "webDeveloper": "Dessarrollador Web Fullstack.",
        "im": "soy, "
    }
  },
  // Puedes agregar más idiomas aquí
};

const i18n = createI18n({
  locale: "es",
  messages,
});

export default i18n;
