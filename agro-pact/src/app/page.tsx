"use client";
import NavClient from "@/components/NavClient";
import ContractList from "@/components/ContractList";
import Dashboard from "@/components/Dashboard";
import { FaqAccordian } from "@/components/FaqAccordian";
import FeaturesBento from "@/components/FeaturesBento";
import Footer from "@/components/Footer";
import NewHero from "@/components/NewHero";
import Services from "@/components/Services";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col min-h-screen mt-24 mb-8 relative justify-between overflow-hidden dark:bg-green-950 bg-[#e4efe6]">
      {session ? (
        <div className="flex w-full">
          {/* Sidebar (Dashboard) */}
          <div className="w-1/4 min-w-[250px]">
            <Dashboard />
          </div>

          {/* Main content area */}
          <div className="flex-1">
            <NavClient />
            <div className="p-4">
              <ContractList />
            </div>
          </div>
        </div>
      ) : (
        <>
          <NavClient />
          <NewHero />
          <div className="px-4 md:px-24 sm:px-10">
            <FeaturesBento />
            <Services />
            <FaqAccordian />
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}
