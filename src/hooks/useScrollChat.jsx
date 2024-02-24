import { useEffect, useRef } from "react";

function useScrollChat(messages) {
  const ref = useRef(null);

  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        block: "end",
      });
    }
  }, [messages.length]);

  return ref;
}

export default useScrollChat;
