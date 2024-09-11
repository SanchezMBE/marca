import { useEffect, useRef } from "react";

function TopNews() {
  const sliderRef = useRef(null);

  // Array de titulares
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const titularesDeportivos = [
    "Real Madrid campeón",
    "Messi brilla en Miami",
    "Chivas pierde clásico",
    "Selección gana amistoso",
    "Barcelona golea rival",
    "América sufre derrota",
    "Nuevo fichaje en Liga",
    "Estadio lleno en final",
    "Árbitro expulsa jugador",
    "Lesión grave en partido",
    "Futbolista sancionado",
    "México gana medalla",
    "España clasifica mundial",
    "Nuevo entrenador llega",
    "Equipo desciende división",
    "Récord histórico batido",
    "Doping positivo en ciclismo",
    "Escándalo en fútbol",
    "Torneo clausurado",
    "Juegos Olímpicos pospuestos"
  ];

  // Efecto para hacer que el slider se desplace automáticamente
  useEffect(() => {
    const slider = sliderRef.current;
    let animation;

    const startScrolling = () => {
      const keyframes = [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${slider.scrollWidth}px)` },
      ];

      animation = slider.animate(keyframes, {
        duration: titularesDeportivos.length * 4000, // Controla la velocidad del slider
        iterations: Infinity,
        easing: "linear",
      });
    };

    startScrolling();

    // Detener la animación cuando el componente se desmonte
    return () => {
      if (animation) {
        animation.cancel();
      }
    };
  }, [titularesDeportivos]);

  return (
    <div className="slider-container overflow-hidden relative bg-gray-100 text-center text-sm text-gray-600 py-2">
      <div ref={sliderRef} className="slider-track whitespace-nowrap">
        {titularesDeportivos.map((titular, index) => (
          <div key={index} className="slider-item inline-block">
            <a className="mx-4 cursor-pointer">{titular}</a>
            /
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopNews;
