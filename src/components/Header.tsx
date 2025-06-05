import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Icon name="Fish" className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">РыбОпт</h1>
              <p className="text-xs text-gray-500">Рыболовные товары оптом</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#catalog"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Каталог
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              О нас
            </a>
            <a
              href="#delivery"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Доставка
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-right">
              <p className="text-sm font-semibold text-gray-900">
                +7 (800) 123-45-67
              </p>
              <p className="text-xs text-gray-500">Звонок бесплатный</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
