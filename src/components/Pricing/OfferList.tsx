// OfferList.tsx
import { IconCheckbox, IconSquareX } from "@tabler/icons-react";
import md from 'markdown-it';

const OfferList = ({ text, status }: { text: string; status: string | boolean }) => {
  return (
    <div className="mb-3 flex items-center">
      <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full text-black">
        {status === "active" ? <IconCheckbox /> : <IconSquareX />}
      </span>
      {text && (
        <div
          className="m-0 text-base font-medium text-body-color"
          dangerouslySetInnerHTML={{
            __html: md({ html: true }).render(text),
          }}
        />
      )}
    </div>
  );
};

export default OfferList;
