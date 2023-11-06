import style from "./About.module.css"

const About = () => {
  return (
    <div className={style.aboutCard}>
      <h1>Acerca de Mí</h1>
      <p>
        Soy Lautaro Celestino, tengo 31 años y estoy en búsqueda de lograr un cambio importante en mi vida y sé que estudiando programación lo voy a lograr.
        Estoy aprovechando esta oportunidad que me dió Codo a Codo junto con Henry para aprender del oficio que va a traer felicidad y prosperidad a mi vida.
      </p>
      <p>
       Ahora trabajo en una estación de servicio YPF, pero las ganas de crecer y triunfar me demostraron que ya cumplí mi ciclo y es hora de dejar la comodidad y zona de confort para moverse en zonas de desafio y prosperidad.
      </p>
      <p>
       Mis ganas de aprender me trajeron hasta acá y con orgullo muestro mi primer tp como desarrollador, fueron muchos tropiezos y todavía quedan por venir, pero la vida enseña que de lo dificil, se obtienen buenos resultados.
       <p>Gracias Henry por tanto, los profes ayudan a que no bajemos los brazos ante tanto contenido nuevo y frustraciones, por lo tanto se agradece y mucho! </p>
      </p>
    </div>
  );
};

export default About;
