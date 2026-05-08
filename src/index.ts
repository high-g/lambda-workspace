import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

const app = new Hono();

app.get("/posts", (c) => c.json({ posts: [] }));

export const handler = handle(app);
