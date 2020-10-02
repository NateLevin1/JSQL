export interface TableStructure {
    indexedColumns: string[];
    unIndexedColumns: string[];
    rows: string[][]; // an array of string arrays
}