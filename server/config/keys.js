// keys.js - figure out environment

let keys;
async function importModuleConditionally() {
  if (process.env.NODE_ENV === "production") {
    keys = (await import("./prod.js")).default;
  } else {
    keys = (await import("./dev.js")).default;
  }
}

await importModuleConditionally();

export default keys;
