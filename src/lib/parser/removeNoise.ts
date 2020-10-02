export default function removeNoise(statement: string) {
    var newStatement = statement;

    // remove semicolon
    if(statement[statement.length-1] == ";") {
        newStatement = statement.slice(0, statement.length);
    }

    // remove newlines
    newStatement = newStatement.replace(/\n/g, "");

    // remove tabs
    newStatement = newStatement.replace(/\t/g, "");
    
    // remove doubled+ whitespace
    newStatement = newStatement.replace(/ {2,}/g, " ");

    return newStatement;
}