import app from "./app.js";
import { PORT } from "./src/config/server.js";
app.listen(PORT, () => {
    console.log("server is running");
});
