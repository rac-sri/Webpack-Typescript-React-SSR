import { OK, BAD_REQUEST } from "http-status-codes";
import { Controller, Get } from "@overnightjs/core";
import { Logger } from "@overnightjs/logger";
import { Request, Response } from "express";

@Controller("api/my-sample-react-app")
class MySampleController {
    public static readonly MSG = "hello ";

    @Get(":api_name")
    private sayHello(req: Request, res: Response) {
        try {
            const { api_name } = req.params;
            if (api_name === "error-api") {
                throw Error("There was some failure!");
            }
            Logger.Info(MySampleController.MSG + name);
            return res.status(OK).json({
                message: MySampleController.MSG + name,
            });
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }
}

export default MySampleController;
