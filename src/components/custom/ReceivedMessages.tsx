import { Label } from "../ui/label";

interface ReceivedMessages {
  message: string;
  owner: string;
  time: string;
}
export default function ReceivedMessages({
  message,
  owner,
  time,
}: ReceivedMessages) {
  return (
    <div className="bg-blue-600 p-5 rounded-[30px] mb-2 h-auto max-w-[800px] mr-auto">
      <Label className="text-xl text-white ml-5">{owner}</Label>
      <Label className="text-white ml-3">il y a {time}</Label>
      <br />
      <Label className="px-10">
        {" "}
        {typeof message === "string" ? message : JSON.stringify(message)}
      </Label>
    </div>
  );
}
