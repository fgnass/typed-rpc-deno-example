export const service = {
  async hello(name: string) {
    return `Hello ${name}!`;
  },

  async greet(hello: string, name = "world") {
    return `${hello} ${name}!`;
  },

  async sorry(name: string): Promise<string> {
    throw new Error(`Sorry ${name}.`);
  },

  async echoHeader(name: string): Promise<string | string[] | undefined> {
    throw new Error("This service can't access request headers");
  },
};

export type Service = typeof service;
