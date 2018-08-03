
import {Entity} from 'atp-active-record';

export default class Content extends Entity
{
    constructor() {
        super('cms', 'atpcms_content');
    }
}
