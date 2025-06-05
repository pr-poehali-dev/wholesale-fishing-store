import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const categories = [
  {
    title: "Удилища",
    description: "Спиннинги, фидеры, поплавочные, карповые",
    icon: "Zap",
    itemCount: "2500+",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&auto=format",
    subcategories: ["Спиннинги", "Фидеры", "Поплавочные", "Карповые"],
  },
  {
    title: "Катушки",
    description: "Безынерционные, мультипликаторы, нахлыстовые",
    icon: "RotateCcw",
    itemCount: "1800+",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format",
    subcategories: ["Безынерционные", "Мультипликаторы", "Нахлыстовые"],
  },
  {
    title: "Приманки",
    description: "Воблеры, блесны, силикон, мормышки",
    icon: "Target",
    itemCount: "5000+",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format",
    subcategories: ["Воблеры", "Блесны", "Силикон", "Мормышки"],
  },
  {
    title: "Лески и шнуры",
    description: "Монофил, флюорокарбон, плетенка",
    icon: "Minus",
    itemCount: "800+",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format",
    subcategories: ["Монофил", "Флюорокарбон", "Плетенка"],
  },
  {
    title: "Крючки и грузила",
    description: "Одинарные, двойники, тройники, грузила",
    icon: "Anchor",
    itemCount: "1500+",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format",
    subcategories: ["Одинарные", "Двойники", "Грузила", "Поводки"],
  },
  {
    title: "Рыболовные сети",
    description: "Кастинговые, жаберные, подъемники",
    icon: "Grid3x3",
    itemCount: "400+",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format",
    subcategories: ["Кастинговые", "Жаберные", "Подъемники"],
  },
  {
    title: "Прикормки и насадки",
    description: "Сухие смеси, ароматизаторы, живые насадки",
    icon: "Wheat",
    itemCount: "600+",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format",
    subcategories: ["Прикормки", "Ароматизаторы", "Насадки"],
  },
  {
    title: "Аксессуары",
    description: "Сумки, садки, подставки, снасти",
    icon: "Package",
    itemCount: "1200+",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&auto=format",
    subcategories: ["Сумки", "Садки", "Подставки", "Инструменты"],
  },
];

const CategoryGrid = () => {
  return (
    <section id="catalog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Каталог товаров
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный ассортимент рыболовных товаров для успешного ведения вашего
            бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border hover:border-blue-200"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={category.image}
                  alt={`Категория ${category.title} - ${category.description}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Icon
                    name={category.icon as any}
                    className="h-8 w-8 text-blue-600"
                  />
                  <Badge variant="secondary">{category.itemCount}</Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
