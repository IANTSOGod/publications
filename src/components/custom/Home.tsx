import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="h-full grid grid-cols-1">
      <div
        className={`${
          isMobile ? "grid-cols-1 h-[600px] gap-y-5" : "grid-cols-3  h-[300px]"
        } grid gap-x-10 pt-10 px-10 w-full`}
      >
        <div className="bg-gray-400 border-2 "></div>
        <div className="bg-gray-400 border-2 "></div>
        <div className="bg-gray-400 border-2 "></div>
      </div>
      <div className=" bg-gray-400 h-[600px] ml-10 mr-10 border-2 mb-10"></div>
    </div>
  );
}
