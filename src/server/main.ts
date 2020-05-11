import { SERVER_PORT } from "./config";

import * as web from "./web/web";

async function main() {
    await web.start(SERVER_PORT);
    console.log(web);
    console.log(`Server up afasfasfast port : http://localhost:${SERVER_PORT}`);
}

main().catch((error) => console.error("Error : " + error));
