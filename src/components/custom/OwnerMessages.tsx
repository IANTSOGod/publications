import { Label } from "../ui/label";

interface OwnerMessages {
  message: string;
  owner: string;
  time: string;
}
export default function OwnerMessages({ message, owner, time }: OwnerMessages) {
  return (
    <div className="bg-slate-400  rounded-[30px] mb-2 h-auto max-w-[800px] ml-auto p-5">
      <Label className="text-xl text-white ml-5">{owner}</Label>
      <Label className="text-blue-600 ml-3">il y a {time}</Label>
      <br />
      <Label className="px-10">
        {typeof message === "string" ? message : JSON.stringify(message)}
      </Label>
    </div>
  );
}
