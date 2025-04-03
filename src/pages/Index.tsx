import React from "react";
import { Header } from "@/components/inventory/Header";
import { PageHeader } from "@/components/inventory/PageHeader";
import { InventoryForm } from "@/components/inventory/InventoryForm";
import { Footer } from "@/components/inventory/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#F3F5F7] px-[75px] py-0">
        <PageHeader />
        <InventoryForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
