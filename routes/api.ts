import { handleRpc } from "typed-rpc/server";
import { HandlerContext } from "$fresh/server.ts";
import { service } from "../service.ts";

export const handler = async (req: Request, _ctx: HandlerContext) => {
  const json = await req.json();
  const data = await handleRpc(json, service);
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
};
