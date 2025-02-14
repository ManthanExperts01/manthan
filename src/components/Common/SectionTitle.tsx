const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  eyebrow,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  eyebrow?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto px-4 lg:text-center" : "text-left"}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        {eyebrow && (
          <span className="me-2 bg-gray-100 px-2.5 py-0.5 text-lg font-medium text-gray-800">
            {eyebrow}
          </span>
        )}

        {title && (
          <h2 className="font- heroBannerSectionTile mb-4 text-3xl !leading-tight text-black dark:text-white sm:text-4xl md:text-[47px]">
            {title}
          </h2>
        )}
        {paragraph && (
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
