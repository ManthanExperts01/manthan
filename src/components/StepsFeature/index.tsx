import Headline from "../Common/Headline";
import SectionTitle from "../Common/SectionTitle";
import SingleStepFeature from "./SingleStepFeature";

const StepsFeature = ({ stepsfeatureDataCollection }) => {
  return (
    <section className="">
      {stepsfeatureDataCollection && (
        <div className="container">
          {stepsfeatureDataCollection?.headline && (
            <Headline
              taglineClass="bg-lightGray"
              header={stepsfeatureDataCollection?.headline}
              titleClass="text-3xl md:text-5xl"
            />
          )}
          {stepsfeatureDataCollection?.stepsFeatureData && (
            <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
              {stepsfeatureDataCollection?.stepsFeatureData.map(
                (feature, i) => <SingleStepFeature key={`id - ${i}`} feature={feature} />,
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default StepsFeature;
