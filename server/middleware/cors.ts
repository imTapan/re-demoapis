export default defineEventHandler((event) => {
  const res = event.node.res;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Handle preflight
  if (event.node.req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }
});
