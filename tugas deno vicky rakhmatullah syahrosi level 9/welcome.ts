import { Application, send } from 'https://deno.land/x/oak/mod.ts';
import router from './tugas.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}`
  });
});


console.log("Server berjalan di port 8000");
await app.listen({ port : 8000 });

