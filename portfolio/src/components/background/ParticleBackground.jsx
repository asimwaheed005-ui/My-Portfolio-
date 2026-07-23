import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim().then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#020617",
        },
      },

      fpsLimit: 120,

      particles: {
        number: {
          value: 70,
        },

        color: {
          value: "#22d3ee",
        },

        links: {
          enable: true,
          color: "#22d3ee",
          opacity: 0.18,
          distance: 150,
        },

        move: {
          enable: true,
          speed: 1,
        },

        opacity: {
          value: 0.5,
        },

        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },

        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.6,
            },
          },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
};

export default ParticleBackground;