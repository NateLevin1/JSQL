import parseIdentifier from "../parseIdentifier/parseIdentifier";
import parsePredicate from "../parsePredicate/parsePredicate";

export default function parseMultiPredicate(str: string) {
    // `str` is in the form " x = 1" or " x = 1, y = 1" or " x = 1, y = 1 WHERE id = 2"
    let nextIdentifier = parseIdentifier(str).identifier;
    let predicates: (Omit<ReturnType<typeof parsePredicate>, "rest">)[] = [];
    while (nextIdentifier !== "WHERE" && str !== "") {
        if(str.startsWith(",")) {
            str = str.slice(1);
        }
        let {rest: restOfPredicate, ...nextPredicate } = parsePredicate(str);
        predicates.push(nextPredicate);
        str = restOfPredicate;
        nextIdentifier = parseIdentifier(str).identifier;
        str = str.trim();
    }
    return {predicates, rest: str}
}