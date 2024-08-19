import { Link } from "react-router-dom";
import CarouselTestimonial from "../components/projectsCarousel";

export function Webpages() {
    return (
      <>
        <div className="mt-28 text-center">
            <h1>
                These are some of the projects i have worked on:
            </h1>
        </div> <br></br>
        <CarouselTestimonial className="mt-18"/>
       
      </>
    );
  }
  