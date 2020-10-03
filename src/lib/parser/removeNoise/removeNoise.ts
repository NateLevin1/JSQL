export default function removeNoise(statement: string) {
    var newStatement = statement;

    // remove semicolon
    if(statement[statement.length-1] === ";") {
        newStatement = statement.slice(0, statement.length-1);
    }

    // remove multiline comments
    newStatement = newStatement.replace(/\/\*[\s\S]{0,}?\*\//g, "");
    // remove single line comments
    newStatement = newStatement.replace(/--.+/g, "");

    // remove newlines
    newStatement = newStatement.replace(/\n/g, " ");

    // remove tabs
    newStatement = newStatement.replace(/\t/g, " ");
    
    // remove doubled+ whitespace
    newStatement = newStatement.replace(/ {2,}/g, " ");

    // remove ending whitespace
    while(newStatement[newStatement.length-1] === " ") {
        newStatement = newStatement.slice(0, newStatement.length-1);
    }

    return newStatement;
}