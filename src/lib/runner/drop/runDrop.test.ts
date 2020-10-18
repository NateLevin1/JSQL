import deleteTable from "./deleteTable";
import runDrop from "./runDrop";

jest.mock("./deleteTable");

test("calls deleteTable properly", ()=>{
    runDrop([{keyword: "DROP", items:["TABLE", "tbl"]}]);
    expect(deleteTable).toBeCalledWith("tbl");
});