
import {Entity} from 'atp-active-record';
import {filterOnTags} from "atp-rest-tag";

export default class Content extends Entity
{
    constructor() {
        super('cms', 'atpcms_content');
    }

    filter(filters) {
        return super.filter(filterOnTags(this, filters, 'cmsContent'));
    }
}
