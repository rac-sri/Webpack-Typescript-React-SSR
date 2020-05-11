import * as path from "path";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as MyControllers from "./controllers";

class MyServer extends Server {
    private readonly SERVER_STARTED_MSG = "My server started on port: ";
    private readonly DEV_RUNNING_MSG =
        "Express Server is running in development mode " +
        "Content is not being served yet";

    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        super.addControllers(new DemoController());
        // frontend code
        if (process.env.NODE_ENV !== "production") {
            cinfo("Starting server in development mode");
            const msg = this.DEV_RUNNING_MSG + process.env.EXPRESS_PORT;
            this.app.get("*", (req, res) => res.send(msg));
        }
    }

    private setupControllers(): void {
        const controllerInstances = [];
        for (const name in MyControllers) {
            if (MyControllers.hasOwnProperty(name)) {
                let Controller = (MyControllers as any)[name];
                controllerInstances.push(new Controller());
            }
        }
        super.addControllers(controllerInstances);
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_STARTED_MSG + port);
        });
    }
}

export default MyServer;
