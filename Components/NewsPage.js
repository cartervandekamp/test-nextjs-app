import React from "react";
import Article from "./Article";

const NewsPage = () => {
  return (
    <div className="news-page">
      <Article
        title="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares"
        author="Milenio Digital"
        image="http://www.milenio.com/uploads/media/2022/02/13/elon-musk-estimo-deuda-unidos.jpeg"
        content="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda nacional, incluidos los derechos no financiados, es de al menos 60 billones de dólares, aproximadamente tres veces el tamaño de toda la economía de ..."
      />
      <Article
        title="
        Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
        author="Steve Hanley"
        image="https://cleantechnica.com/files/2021/10/Tesla-China-Sales-e1642076454693.jpeg"
        content="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
      />
      <Article
        title="
        Tesla recall for heater and defroster systems issued by Transport Canada"
        author="Newsroom Infobae"
        image="https://s.yimg.com/ny/api/res/1.2/OIT4IKNwjUB84NULFNm8_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03ODA-/https://media.zenfs.com/es/efe.es/fb7b03f8234fac6e72cbc7bd6b39e554"
        content="Shanghái (China), 14 feb La mitad de las ventas de vehículos eléctricos registradas en 2021 a nivel mundial se efectuaron en China, según datos publicados hoy por la consultora Canalys. En total, según las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de vehículos -incluyendo los totalmente eléctricos ..."
      />
      <Article
        title="
        China representó la mitad de las ventas globales de coches eléctricos en 2021"
        author=" Maria Merano"
        image="https://www.teslarati.com/wp-content/uploads/2020/11/tesla-model-3-heat-pump-refresh-1280x720.jpeg"
        content="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles. Transport Canada reported that a little over ..."
      />
    </div>
  );
};

export default NewsPage;
