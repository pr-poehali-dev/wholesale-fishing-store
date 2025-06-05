import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CategoryGrid />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
