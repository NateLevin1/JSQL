import parseAndRun from "./parseAndRun";

test("select works properly", ()=>{
    parseAndRun("SELECT * from db");
});