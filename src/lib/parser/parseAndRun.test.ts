import parseAndRun from "./parseAndRun";
import runSelect from "../runner/select/runSelect";
import runCreate from "../runner/create/runCreate";
import parseStatement from "./parseStatement/parseStatement";
import runInsert from "../runner/insert/runInsert";
jest.mock("../runner/create/runCreate");
jest.mock("../runner/select/runSelect");
jest.mock("../runner/insert/runInsert");
jest.mock("./parseStatement/parseStatement");

test("select is run if keyword = select", ()=>{
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"SELECT"}]);
    parseAndRun("");
    expect(parseStatement).toBeCalled();
    expect(runSelect).toBeCalled();
});

test("create is run if keyword = create", ()=>{
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"CREATE"}]);
    parseAndRun("");
    expect(parseStatement).toBeCalled();
    expect(runCreate).toBeCalled();
});

test("insert is run if keyword = insert", ()=>{
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"INSERT"}]);
    parseAndRun("");
    expect(parseStatement).toBeCalled();
    expect(runInsert).toBeCalled();
});