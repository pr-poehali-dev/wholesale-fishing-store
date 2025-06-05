import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon name="Fish" className="h-8 w-8 text-blue-400 mr-3" />
              <div>
                <h3 className="text-2xl font-bold">РыбОпт</h3>
                <p className="text-sm text-gray-400">Рыболовные товары оптом</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Надежный поставщик рыболовных товаров для вашего бизнеса с 2008
              года.
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" className="h-5 w-5 text-blue-400" />
              <Icon name="Mail" className="h-5 w-5 text-blue-400" />
              <Icon name="MapPin" className="h-5 w-5 text-blue-400" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Каталог</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Удилища
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Катушки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Приманки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Лески и шнуры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Аксессуары
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Гарантии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Партнерам
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Icon name="Phone" className="h-4 w-4 mr-3 text-blue-400" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-3 text-blue-400" />
                <span>info@ryboopt.ru</span>
              </div>
              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  className="h-4 w-4 mr-3 text-blue-400 mt-0.5"
                />
                <span>г. Москва, ул. Рыболовная, д.1</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="h-4 w-4 mr-3 text-blue-400" />
                <span>Пн-Пт: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 РыбОпт. Все права защищены. |
            <a href="#" className="hover:text-white ml-2">
              Политика конфиденциальности
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
