import Card from "./Card";
import { cardData } from "../constants/AboutCardData";

const About = () => {
  return (
    <section className="flex flex-wrap gap-4 justify-center px-5 sm:px-10 md:px-20 py-5">
      {cardData.map((card) => {
        return <Card key={card.header} header={card.header} text={card.text} />;
      })}
    </section>
  );
};

export default About;
