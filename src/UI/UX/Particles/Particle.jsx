import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import classes from "./Particle.module.scss"

const Particle = () => {
     const particlesInit = useCallback(async (engine) => {
       console.log(engine);
       // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
       // starting from v2 you can add only the features you need reducing the bundle size
       await loadFull(engine);
     }, []);

     const particlesLoaded = useCallback(async (container) => {
       await console.log(container);
     }, []);
    
  return (
    <div className={classes.particles}>
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: null,
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000",
            },
            links: {
              color: "#000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Particle
