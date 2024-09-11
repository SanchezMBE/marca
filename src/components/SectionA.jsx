import CardSmall from "./CardSmall";
import CardLarge from "./CardLarge";

const SectionA = () => {
  return (
    <>
      {/* Layout for large screens */}
      <div className="hidden lg:block w-[980px] mx-auto p-4 space-y-4">
        <img className="cursor-pointer w-full" src="/marca/public/assets/ads/caliente-4.gif" alt="Advertisement" />

        <div className="flex flex-row gap-4">
          <div className="w-[80%]">
            <CardLarge />
          </div>
          <div className="w-[20%] flex items-center justify-center">
            <img className="w-full" src="/marca/public/assets/ads/caliente-3.gif" alt="Advertisement"/>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <CardSmall
            title="Roglic, a corazón abierto"
            author="BRUNO SÁNCHEZ MURILLO"
            topic="Fútbol"
            imageSrc="/marca/public/assets/image-2.webp"
          />
          <CardSmall
            title="Francia resucita 'sacrificando' a Mbappé"
            author="CÉSAR RAMIREZ"
            topic="America"
            imageSrc="/marca/public/assets/image-3.webp"
          />
          <CardSmall
            title="Brahim, nuevo héroe nacional"
            author="GABRIEL FUENTES"
            topic="Liga MX"
            imageSrc="/marca/public/assets/image-2.webp"
          />
        </div>
      </div>

      {/* Layout for small screens */}
      <div className="hidden sm:block lg:hidden w-full mx-auto p-4 space-y-4">
        <img className="cursor-pointer w-full" src="/marca/public/assets/ads/caliente-4.gif" alt="Advertisement" />
        
        <div className="w-full">
          <CardLarge />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <CardSmall
            title="Roglic, a corazón abierto"
            author="SÁNCHEZ"
            topic="Fútbol"
            imageSrc="/marca/public/assets/image-2.webp"
          />
          <CardSmall
            title="Francia resucita 'sacrificando' a Mbappé"
            author="CÉSAR RAMIREZ"
            topic="America"
            imageSrc="/marca/public/assets/image-3.webp"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <CardSmall
            title="Brahim, nuevo héroe nacional"
            author="GABRIEL FUENTES"
            topic="Liga MX"
            imageSrc="/marca/public/assets/image-2.webp"
          />
          <CardSmall
            title=""
            author=""
            topic="Ad"
            imageSrc="/marca/public/assets/ads/caliente-7.gif"
          />
        </div>
      </div>

      {/* Layout for extra small screens */}
      <div className="block sm:hidden w-full mx-auto p-4 space-y-4">
        <img className="cursor-pointer w-full" src="/marca/public/assets/ads/caliente-4.gif" alt="Advertisement" />
        
        <div className="w-full">
          <CardLarge />
        </div>
        
        <CardSmall
          title="Roglic, a corazón abierto"
          author="SÁNCHEZ"
          topic="Fútbol"
          imageSrc="/marca/public/assets/image-2.webp"
        />
        
        <CardSmall
          title="Francia resucita 'sacrificando' a Mbappé"
          author="CÉSAR RAMIREZ"
          topic="America"
          imageSrc="/marca/public/assets/image-3.webp"
        />
        
        <CardSmall
          title="Brahim, nuevo héroe nacional"
          author="GABRIEL FUENTES"
          topic="Liga MX"
          imageSrc="/marca/public/assets/image-2.webp"
        />
        
        <img className="w-full" src="/marca/public/assets/ads/caliente-7.gif" alt="Advertisement" />
      </div>
    </>
  );
};

export default SectionA;