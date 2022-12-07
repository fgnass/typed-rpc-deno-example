import Hello from "../islands/Hello.tsx";

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
      />
      <div>
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge.svg"
          alt="Made with Fresh"
        />
        <p>
          This is a demo of <code>typed-rpc</code> made with{" "}
          <a href="https://fresh.deno.dev">Fresh</a>.
        </p>
        <p>
          The API defined in <code>/service.ts</code> is exposed by{" "}
          <code>/routes/api.ts</code>.
        </p>
        <p>
          In the browser, the <code>&lt;Hello /&gt;</code>{" "}
          Preact component calls the API and prints the result below:
        </p>
        <Hello />
      </div>
    </>
  );
}
