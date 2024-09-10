import CardSmall from "./CardSmall";
import CardLarge from "./CardLarge";

const SectionA = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:flex-1">
          <CardLarge />
        </div>
        <div className="md:flex-1 space-y-4">
          <CardSmall
            title="Roglic, a corazón abierto"
            author="N. LABARGA, J. RODRIGUEZ, C. REY Y A. IBÁÑEZ"
            comments="19"
            imageSrc="/marca/src/assets/image_2.webp"
          />
          <CardSmall
            title="Francia resucita 'sacrificando' a Mbappé"
            author="ALBERTO RUBIO"
            comments="187"
            imageSrc="/marca/src/assets/image_3.webp"
          />
          <CardSmall
            title="Brahim, nuevo héroe nacional"
            author="JUAN CASTRO"
            comments="137"
            imageSrc="/marca/src/assets/image_2.webp"
          />
        </div>
        <div className="bg-gray-400">
          <img src="/marca/src/assets/ads/carls_jr_2.jpeg" alt="Advertisement" className="block md:hidden" />
          <img src="/marca/src/assets/ads/carls_jr_1.jpeg" alt="Advertisement" className="hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default SectionA;