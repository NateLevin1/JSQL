import {increaseVersion, version} from "./stores";

test("Increasing version increase version and version is 0 by default", ()=>{
    expect(version).toBe(0);
    increaseVersion();
    expect(version).toBe(1);
});