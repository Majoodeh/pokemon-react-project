// import LOGO1 from "./LOGO-1.png";
// import { Nav } from "./Nav";
// import frame1 from "./frame-1.png";
// import image1 from "./image-1.png";
// import image3 from "./image-3.png";
// import image5 from "./image-5.png";
// import image from "./image.png";

export const LayoutTwo = () => {
  return (
    <div className="border border-solid border-black bg-[linear-gradient(178deg,rgba(140,0,251,0.79)_0%,rgba(255,0,214,0.84)_98%)] w-full min-w-[1669px] min-h-[1073px] relative">
      <img
        className="top-[883px] left-[1490px] w-[147px] h-[151px] absolute object-cover"
        alt="Image"
        src={image3}
      />

      <div className="flex w-[1669px] items-center justify-between px-[120px] py-[22px] absolute top-0 left-0 bg-white shadow-[inset_0px_-1px_1px_#0000001a]">
        <img
          className="relative w-20 h-20 aspect-[1] object-cover"
          alt="Logo"
          src={LOGO1}
        />

        <Nav
          className="!gap-[30px] !left-[unset] !top-[unset]"
          itemLinkDivClassName="!font-medium ![font-family:'Inter-Medium',Helvetica]"
          itemLinkDivClassName1="!mr-[-2.88px] !ml-[-2.88px] !font-medium ![font-family:'Inter-Medium',Helvetica]"
          itemLinkDivClassName2="!mr-[-7.88px] !ml-[-7.88px] !font-medium ![font-family:'Inter-Medium',Helvetica]"
          itemLinkDivClassNameOverride="!font-medium ![font-family:'Inter-Medium',Helvetica]"
          itemLinkText="List"
          itemLinkText1="Game"
          itemLinkText2="About US"
          itemLinkText3="Contact us"
          property1="default"
        />
      </div>

      <img
        className="top-[409px] left-11 w-[630px] h-[673px] absolute object-cover"
        alt="Image"
        src={image5}
      />

      <img
        className="top-[204px] left-[98px] w-[523px] h-[183px] absolute object-cover"
        alt="Image"
        src={image1}
      />

      <img
        className="absolute top-[441px] left-[834px] w-[282px] h-[383px]"
        alt="Frame"
        src={frame1}
      />

      <img
        className="absolute top-[441px] left-[1200px] w-[282px] h-[383px]"
        alt="Frame"
        src={image}
      />
    </div>
  );
};

export default LayoutTwo;
