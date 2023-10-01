import * as React from "react";
import "../../styles/card.css";

export const PostCard = () => {
    return (
        <div>
            <h2 style={{textAlign:"center", fontSize:"35px", marginBottom:"20px"}}>Mira un poco sobre nosotros</h2>
            <div className="blog-card">
                <div className="meta">
                    <div className="photo" style={{ backgroundImage: "url(https://i.ytimg.com/vi/Y2UoiySQhs4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaOQEvGyaiEHPN3k5GFMFZOLUaDw)" }}></div>
                    <ul className="details">
                        <li className="tags">
                            <ul>
                                <li style={{fontSize:20}}><a href="https://www.youtube.com/watch?v=Y2UoiySQhs4">Ver video</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>Mini skate part</h1>
                    <h2>Skate</h2>
                    <p> Dope City es un emocionante proyecto que fusiona el mundo del skateboarding con un enfoque único y creativo. Su objetivo principal es promover el aprendizaje y el estilo de vida del skateboarding, especialmente en Colombia, donde este deporte aún no cuenta con el reconocimiento que merece.</p>
                </div>
            </div>
            <div className="blog-card alt">
                <div className="meta">
                    <div className="photo" style={{ backgroundImage: "url(https://i.ytimg.com/vi/lEm40XOvR4s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDswBQ52ha6ykHAPPfRTaFSm9QoHw)" }}></div>
                    <ul className="details">
                        <li className="tags">
                            <ul>
                                <li style={{fontSize:20}}><a href="https://www.youtube.com/watch?v=lEm40XOvR4s">Ver video</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>Mini skate part</h1>
                    <h2>Skate</h2>
                    <p>Además de sus esfuerzos en la creación de contenido creativo y emocionante, Dope City se destaca por su compromiso en mantener los patinetes en perfectas condiciones haciendo mantenimiento de skates, asegurando que los riders tengan equipos seguros y confiables para disfrutar al máximo de su pasión</p>
                </div>
            </div>
            <div className="blog-card">
                <div className="meta">
                    <div className="photo" style={{ backgroundImage: "url(https://i.ytimg.com/vi/noETc5q0JLU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHqbJcMEMLF_OPdL1wVMk9pS4iEQ)" }}></div>
                    <ul className="details">
                        <li className="tags">
                            <ul>
                                <li style={{fontSize:20}}><a href="https://www.youtube.com/watch?v=noETc5q0JLU">Ver video</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>Mini skate part</h1>
                    <h2>Skate</h2>
                    <p>A pesar de estar en sus primeras etapas, Dope City se esfuerza por crear tutoriales cuidadosamente elaborados y presentados de manera accesible. Su compromiso es mejorar continuamente la calidad de su contenido, lo que permitirá a los entusiastas del skate aprender y mejorar sus habilidades de manera efectiva a medida que el proyecto evoluciona.</p>
                </div>
            </div>

        </div>
    );
};
