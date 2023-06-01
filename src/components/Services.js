import SectionTitle from "./SectionTitle";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <SectionTitle word1="our" word2="services" />

      <div className="section-center services-center">
        {services.map((item) => {
          const { id, icon, text, title } = item;
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text} </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
