import {Application, Request, Response} from 'express';
import Constants from '../Constants';
import {DBConnector} from '../DB/DBConnector';

class UrlController {
    private readonly app: Application;
    private constants = Constants

    constructor(app: Application) {
        this.app = app
        this.setRequestHandlers()
    }

    private setRequestHandlers() {
        const {apiUrls: {getUrl}} = this.constants;
        this.app.get(getUrl, this.getUrl)
    }

    private getUrl (req: Request, res: Response) {
        res.send({'test': 'text'})
    }
}