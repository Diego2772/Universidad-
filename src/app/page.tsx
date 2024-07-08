// import { Header } from "@/components/header";
import TopNavbar from "@/components/navbar/blog_navbar";

import TestNavbar from "@/components/navbar/testNavbar";

import { Sliders } from "@/components/sliders";
import { Novedades } from "@/components/programa/novedades";
import { Proximas } from "@/components/proximas";
import { Galeria } from "@/components/galeria";
import { Footer } from "@/components/footer";
import InstitutionalHeader from "@/components/navbar/InstitutionalHeader";

const page = () => {
  return (   
    <>

      {/*   <FirstNavbar /> */}
      {/* <Header /> */}
      {/* <SecondNavbar /> */}
      <TopNavbar />
      <InstitutionalHeader />

      <TestNavbar />


      <Sliders/>
      <Novedades/>
      <Proximas/>
      <Galeria/>
      <Footer/>
    </>
  );
};

export default page;
