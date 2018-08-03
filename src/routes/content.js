
import {basicController, NOT_IMPLEMENTED, NOT_SUPPORTED} from 'atp-rest';
import Content from "../model/content";
import {createCrudPermissions} from "atp-rest-uac";

const permissions = createCrudPermissions('cms', 'content');
const model = Content;
const idField = 'contentId';

export default basicController.entity.crud({model, permissions, idField});
