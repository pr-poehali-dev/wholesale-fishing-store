import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description:
      "Доставка по России за 1-3 дня. Собственная логистическая сеть и надежные партнеры.",
  },
  {
    icon: "Shield",
    title: "Гарантия качества",
    description:
      "Все товары сертифицированы. Работаем только с проверенными производителями.",
  },
  {
    icon: "CreditCard",
    title: "Гибкая оплата",
    description:
      "Наличный и безналичный расчет. Отсрочка платежа для постоянных клиентов.",
  },
  {
    icon: "Users",
    title: "Персональный менеджер",
    description:
      "Индивидуальный подход к каждому клиенту. Консультации по выбору товара.",
  },
  {
    icon: "TrendingDown",
    title: "Лучшие цены",
    description:
      "Прямые поставки от производителей. Система скидок для оптовых покупателей.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description:
      "Круглосуточная техническая поддержка. Решение любых вопросов в кратчайшие сроки.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 15 лет опыта работы на рынке рыболовных товаров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-md transition-shadow border-0 bg-gray-50"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon
                    name={feature.icon as any}
                    className="h-8 w-8 text-blue-600"
                  />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
