import Image from "next/image";
import SendmessageIcon from "../../lottie-ui/send-message";
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";

const ShowAdviser = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
        <div className="relative flex justify-between w-full h-full items-stretch flex-col">
          <div className="absolute h-full w-full aspect-[578/433] shadow-2xl">
            <Image
              src={"/projects/show-adviser.png"}
              alt={"Show adviser landing page example"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center">
            <span>Project at -</span>
            <span className="flex gap-1">Home</span>
          </h4>
          <div className="w-full flex gap-2 items-center">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              TV Show adviser - Training
            </h1>
            <SendmessageIcon
              link="https://tv-show-adviser-react-liard.vercel.app/"
              lottieName="Show-adviser"
            />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              Training
            </Badge>
            <Badge variant="default" className="text-xs">
              Frontend
            </Badge>
            <Badge variant="default" className="text-xs">
              Nextjs
            </Badge>
            <Badge variant="default" className="text-xs">
              React
            </Badge>
            <Badge variant="default" className="text-xs">
              API
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ShowAdviser;
