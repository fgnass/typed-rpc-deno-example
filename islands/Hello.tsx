import { rpcClient } from "typed-rpc";
import { useEffect, useState } from "preact/hooks";

// Import the type (not the implementation!)
import type { Service } from "../service.ts";

// Create a typed client:
const client = rpcClient<Service>("/api");

export default function Counter() {
  const [result, setResult] = useState("");
  useEffect(() => {
    client.hello("Deno").then(setResult);
  }, []);
  return <pre>{result}</pre>;
}
