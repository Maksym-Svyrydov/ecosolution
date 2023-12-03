'use client';
// import { useMediaQuery } from '@mui/material';
import CasesSection from '@/components/Cases/Cases';
import ElectricitySection from '@/components/Electricity/Electricity';
import Header from '@/components/Header/Header';
import MainSection from '@/components/Main/Main';
import ValuesSection from '@/components/Values/Values';
import FaqSection from '@/components/FAQ/FAQ';
import Contacts from '@/components/Contacts/Contact';
import FormSection from '@/components/Form/Form';

export default function Home() {
  // const mobile = useMediaQuery('(max-width:480px)');
  // const tablet = useMediaQuery('(max-width:1200px)');
  // const desktop = useMediaQuery('(min-width:1201px)');
  // console.log('mobile:', mobile, 'tablet:', tablet, 'desktop:', desktop);

  return (
    <>
      <Header />
      <MainSection />
      <ValuesSection />
      <ElectricitySection />
      <CasesSection />
      <FaqSection />
      <Contacts />
      <FormSection />
    </>
  );
}
