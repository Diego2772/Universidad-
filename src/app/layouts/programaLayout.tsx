import React from 'react';
import TestNavbar from "@/components/navbar/testNavbar";
import  SuperiorNavbar  from "@/components/navbar/superiorNavbar";
import InstitutionalHeader from "@/components/navbar/InstitutionalHeader";
import  TopNavbar  from "@/components/navbar/blog_navbar";
import { Footer } from "@/components/footer";

export default function ProgramaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
    <TopNavbar />
      <InstitutionalHeader />
      <TestNavbar />
      {children}
      <Footer/>
    </>
  );
}