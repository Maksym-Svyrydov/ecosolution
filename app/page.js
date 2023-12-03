'use client';
import CasesSection from '@/components/Cases/Cases';
import ElectricitySection from '@/components/Electricity/Electricity';
import Header from '@/components/Header/Header';
import MainSection from '@/components/Main/Main';
import ValuesSection from '@/components/Values/Values';

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <ValuesSection />
      <ElectricitySection />
      <CasesSection />
    </>
  );
}
