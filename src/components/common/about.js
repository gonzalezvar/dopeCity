import * as React from "react";

const styles = {
    container: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '20px'
    },
    header: {
        fontSize:"30px",
        marginBottom:"25px"
    },
    paragraph: {
        maxWidth: '800px', 
        fontSize:20, 
        textAlign:"left",
        marginBottom:"35px"
    },
    video:{
        margin:"30px"
    }
};

export const About = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Sobre nosotros</h2>
            <p style={styles.paragraph}>
                Somos dope city, una propuesta de proyecto la cual busca principalmente promover el aprendizaje y estilo de vida del skateboarding, con una marca y estilo que nos pueda diferenciar de otras distintas marcas de skateboarding ya que se dará un distinto tipo de contenido, el cual estará direccionado a los tutoriales pero aún más  apuntando a videos tipo cortometraje con distintas temáticas relacionadas a su propio nombre "dope city" los cuales se diferenciarán por su estilo de edición en los cuales se busca que la audiencia pueda vivir una experiencia agradable al ver lo que podría ser por ejemplo de un "trip" en un cortometraje de skateboarding.

                Nuestro principal objetivo es apoyar a la comunidad skater principalmente en Colombia, pais en el cual este deporte aún no tiene el apoyo y la aceptación que debería tener, por eso aparte de promover este estilo de vida se promueve la enseñanza y un estilo de vida tranquilo y sano.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/noETc5q0JLU?si=vxTstUXdtMEJoEWB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    );
};