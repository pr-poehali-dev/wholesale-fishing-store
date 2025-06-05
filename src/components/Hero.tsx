import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="bg-blue-500 hover:bg-blue-400 mb-4">
            Оптовые поставки по всей России
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Рыболовные товары <br />
            <span className="text-blue-300">оптом от производителя</span>
          </h1>

          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Более 12 000 наименований товаров для рыбалки. Прямые поставки от
            ведущих производителей, выгодные оптовые цены, гарантия качества для
            развития вашего бизнеса.
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
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">12 000+</div>
              <div className="text-blue-200">товаров в наличии</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">1 500+</div>
              <div className="text-blue-200">довольных клиентов</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">15 лет</div>
              <div className="text-blue-200">опыта на рынке</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
