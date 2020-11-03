import parseAndRun from "./parseAndRun";
import runSelect from "../runner/select/runSelect";
import runCreate from "../runner/create/runCreate";
import parseStatement from "./parseStatement/parseStatement";
import runInsert from "../runner/insert/runInsert";
import runDrop from "../runner/drop/runDrop";
import runTruncate from "../runner/truncate/runTruncate";
jest.mock("../runner/create/runCreate");
jest.mock("../runner/select/runSelect");
jest.mock("../runner/insert/runInsert");
jest.mock("./parseStatement/parseStatement");
jest.mock("../runner/drop/runDrop");
jest.mock("../runner/truncate/runTruncate");

test("select is run if keyword = select", ()=>{
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"SELECT"}]);
    parseAndRun("", {} as any);
    expect(parseStatement).toBeCalled();
    expect(runSelect).toBeCalled();
});

test("create is run if keyword = create", ()=>{
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"CREATE"}]);
    parseAndRun("", {} as any);
    expect(parseStatement).toBeCalled();
    expect(runCreate).toBeCalled();
});

test("insert is run if keyword = insert", ()=>{
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"INSERT"}]);
    parseAndRun("", {} as any);
    expect(parseStatement).toBeCalled();
    expect(runInsert).toBeCalled();
});

test("drop is run if keyword = insert", ()=>{
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"DROP"}]);
    parseAndRun("", {} as any);
    expect(parseStatement).toBeCalled();
    expect(runDrop).toBeCalled();
});

test("truncate is run if keyword = truncate", ()=>{
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"TRUNCATE"}]);
    parseAndRun("", {} as any);
    expect(parseStatement).toBeCalled();
    expect(runTruncate).toBeCalled();
});

test("proper thing is returned with one statement", ()=>{
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"SELECT"}]);
    // @ts-ignore
    runSelect.mockResolvedValueOnce(["val"]);
    return parseAndRun("SELECT *", {} as any).then((val)=>{
        expect(runSelect).toBeCalled();
        expect(val).toStrictEqual(["val"]);
    });
});

test("proper things are returned with multiples statements", ()=>{
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"SELECT"}]);
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"SELECT"}]);
    // @ts-ignore
    runSelect.mockResolvedValueOnce(["val"]);
    // @ts-ignore
    runSelect.mockResolvedValueOnce(["val"]);
    return parseAndRun("SELECT *; SELECT *", {} as any).then((val)=>{
        expect(runSelect).toBeCalledTimes(2);
        expect(val).toStrictEqual([["val"], ["val"]]);
    });
});

test("rejects on alter", ()=>{
    // @ts-ignore
    parseStatement.mockReturnValueOnce([{keyword:"ALTER"}]);

    expect(()=>parseAndRun("ALTER TABLE name", {} as any)).rejects.toBe("JSQL doesn't support ALTERing tables. Instead, change the schema in the Table constructor.");
});