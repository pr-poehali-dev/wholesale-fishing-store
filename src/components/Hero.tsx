import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="bg-blue-500 hover:bg-blue-400 mb-4">
            Оптовые поставки по всей России
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Рыболовные товары <br />
            <span className="text-blue-200">оптом от производителя</span>
          </h1>

          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Более 10 000 наименований товаров для рыбалки. Прямые поставки,
            выгодные цены, гарантия качества для вашего бизнеса.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Icon name="Package" className="h-5 w-5 mr-2" />
              Скачать каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="Calculator" className="h-5 w-5 mr-2" />
              Рассчитать заказ
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10 000+</div>
              <div className="text-blue-200">товаров в наличии</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">поддержка клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
