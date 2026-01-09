import ContactForm from "@/components/ContactForm";
import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const page = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

export default page;
