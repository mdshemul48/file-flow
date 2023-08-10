import { Buffer } from "buffer";

export function encodeObject(obj: object) {
  const stringData = JSON.stringify(obj);
  return Buffer.from(stringData).toString("base64");
}

export function decodeObject(token: string) {
  const jsonStringToken = Buffer.from(token, "base64").toString("ascii");
  try {
    return JSON.parse(jsonStringToken);
  } catch (error) {
    throw Error("JSON parse fail. Content not valid.");
  }
}
