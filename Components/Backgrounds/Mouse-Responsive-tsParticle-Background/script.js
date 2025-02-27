tsParticles.load({
    id: "tsparticles",
    options: {
      fpsLimit: 60,
      particles: {
        number: {
          value: 80
        },
        color: {
          value: "#ff0000",
          animation: {
            enable: true,
            speed: 20,
            sync: true
          }
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: { min: 1, max: 3 }
        },
        links: {
          enable: true,
          distance: 100,
          color: "random",
          opacity: 0.4,
          width: 1,
          triangles: {
            enable: true,
            color: "#ffffff",
            opacity: 0.1
          }
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          outModes: "out"
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          },
          onClick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          repulse: {
            distance: 200
          },
          push: {
            quantity: 4
          }
        }
      },
      background: {
        color: "#000000"
      }
    }
  });
  