import Dexie, { Table } from "dexie";
export const db = new Dexie("JSQL");
export let version = 0;
export const increaseVersion = ()=>{ version++; };
const stores: {[key: string]: Table} = {}
export const storesColumns: {[key: string]:string[]} = {};
export default stores;