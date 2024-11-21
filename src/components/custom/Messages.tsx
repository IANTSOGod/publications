//database pub_db
import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import OwnerMessages from "./OwnerMessages";
import ReceivedMessages from "./ReceivedMessages";
import { useIsMobile } from "@/hooks/use-mobile";
import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";

export default function Messages() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [data, setData] = useState<string>("");
  const websocketURL = import.meta.env.VITE_WEBSOCKET_HOST;
  const isMobile = useIsMobile();
  useEffect(() => {
    const ws = new WebSocket(websocketURL);
    setSocket(ws);

    ws.onmessage = async (event: MessageEvent) => {
      const messageData =
        event.data instanceof Blob ? await event.data.text() : event.data;

      setMessages((prevMessages) => [...prevMessages, messageData]);
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (socket && data.trim()) {
      socket.send(data);
      setData("");
    }
  };

  return (
    <div className="h-full grid grid-cols-1">
      <ScrollArea className=" w-full pt-10">
        {messages.length != 0 ? (
          messages.map((message, index) =>
            index % 2 == 0 ? (
              <OwnerMessages
                message={message}
                key={index}
                owner="Expéditeur"
                time="1 min"
              ></OwnerMessages>
            ) : (
              <ReceivedMessages
                message={message}
                key={index}
                owner="Expéditeur"
                time="1 min"
              ></ReceivedMessages>
            )
          )
        ) : (
          <Label
            className={`${
              isMobile ? "ml-5" : "ml-[500px]"
            } text-3xl text-blue-950 mt-[300px]`}
          >
            Aucun message de la part de cet utilisateur
          </Label>
        )}
      </ScrollArea>
      <form
        className={`${
          isMobile
            ? "w-full align-middle justify-center pl-[50px]"
            : "w-[1700px] "
        } flex bg-slate-400 h-[100px] fixed bottom-0`}
        onSubmit={handleSubmit}
      >
        <Input
          className={`${
            isMobile ? "w-[400px] ml-10" : "w-4/5 ml-[150px]"
          } h-[40px] bg-white mt-2`}
          name="data"
          onChange={handleChange}
          value={data}
          placeholder="Entrez un message ici"
        />
        <Button
          type="submit"
          className="mt-2 h-[40px] mr-[100px] flex items-center"
        >
          {isMobile ? (
            <>
              <Send className="ml-2" />
            </>
          ) : (
            <>
              Envoyer <Send className="ml-2" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
