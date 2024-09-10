import CardSmall from "./CardSmall";
import CardMedium from "./CardMedium";

const SectionB = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Primera fila: CardSmall */}
        <CardSmall title="Título 1" author="Autor 1" comments="10" imageSrc="/marca/src/assets/image_2.webp" />
        <CardSmall title="Título 2" author="Autor 2" comments="20" imageSrc="/marca/src/assets/image_3.webp"/>
        <CardSmall title="Título 3" author="Autor 3" comments="30" imageSrc="/marca/src/assets/image_2.webp"/>

        {/* Segunda fila: CardMedium */}
        <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 2" text="Descripción del CardMedium 2" />
        <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 3" text="Descripción del CardMedium 3" />
      </div>
    </div>
  );
};

export default SectionB;