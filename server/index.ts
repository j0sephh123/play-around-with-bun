import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import controllers from "./controllers";

const app = new Elysia()
  .use(cors())
  .get("/", () => controllers.getUsers())
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
