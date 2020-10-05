import { clauses } from "./parseClause/parseClause";

clauses.register("SELECT", ["identifier"]);
clauses.register("FROM", ["identifier"]);
clauses.register("WHERE", ["predicate"]);

clauses.register("CREATE", ["identifier", "identifier", "expression"]);