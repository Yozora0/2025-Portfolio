import Image from "next/image";
import SendmessageIcon from "../../lottie-ui/send-message";
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";

const Renoir = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
        <div className="relative flex justify-between w-full h-full items-stretch flex-col">
          <div className="absolute h-full w-full aspect-[578/433] shadow-2xl rounded-lg">
            <Image
              src={"/projects/renoir.png"}
              alt={"Station landing page example"}
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
            <span className="flex gap-1">ADT Aube en Champagne</span>
          </h4>
          <div className="w-full flex gap-2 items-center">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              Du côté des Renoir
            </h1>
            <SendmessageIcon
              link="https://renoir-essoyes.fr"
              lottieName="Du cote des Renoir"
            />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              Solo Developer
            </Badge>
            <Badge variant="default" className="text-xs">
              Frontend + Design
            </Badge>
            <Badge variant="default" className="text-xs">
              Figma
            </Badge>
            <Badge variant="default" className="text-xs">
              Wordpress
            </Badge>
            <Badge variant="default" className="text-xs">
              SEO
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Renoir;
