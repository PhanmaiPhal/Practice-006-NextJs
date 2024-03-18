import CourseCardComponent from "@/components/Card";
import ContentCard from "@/components/ContentCard";
import SilderComponent from "@/components/Silder";
import { FooterComponent } from "flowbite-react";
// import CardComponent from "@/components/Card";
export default function Home() {
  return (
    <main className="">
      <section>
        <SilderComponent/>
      </section>
      
      <section className="flex flex-col" >
      <p className="text-2xl font-bold my-5 mx-32">COURSE</p>
      <div className="flex flex-wrap justify-center gap-5">
        <CourseCardComponent />
        <CourseCardComponent />
        <CourseCardComponent />
        <CourseCardComponent />
        <CourseCardComponent />
        <CourseCardComponent />
        <CourseCardComponent />
        <CourseCardComponent />
      </div>
      </section>
      
      <section className="flex mt-4 flex-col" >
      <p className="text-2xl font-bold my-5 mx-32">USEFUL CONTENTS</p>
      <div className="flex flex-wrap justify-center gap-5">
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
      </section>
      
    </main>
  );
}









































