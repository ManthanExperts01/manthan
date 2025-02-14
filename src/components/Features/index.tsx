import { FeatureProps } from "@/types/faq";
import Headline from "../Common/Headline";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = ({ headline }: FeatureProps) => {
  return (
    <>
      <section id="services-section" className="py-16 md:py-20 lg:py-20">
        <div className="container">
          {headline && (
            <Headline
              taglineClass="bg-lightGray"
              header={headline}
              titleClass="text-3xl md:text-5xl"
            />
          )}
          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 md:gap-y-14 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
