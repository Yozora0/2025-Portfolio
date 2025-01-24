import Image from "next/image";
import CardWrapper from "./card-wrapper";

const MapCard = () => {
  return (
    <CardWrapper>
      <Image
        className={"h-full w-full bg-center rounded-3xl object-cover"}
        src="/map1.png"
        alt="map"
        width={300}
        height={300}
      />
    </CardWrapper>
  );
};

export default MapCard;
