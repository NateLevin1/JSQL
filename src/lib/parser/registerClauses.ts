import { clauses } from "./parseClause/parseClause";

clauses.register("SELECT", ["identifier"]);
clauses.register("FROM", ["identifier"]);
clauses.register("WHERE", ["predicate"]);

clauses.register("CREATE", ["TABLE", "identifier", "expression"]);

clauses.register("INSERT", ["INTO", "identifier"]);
clauses.register("VALUES", ["rest"]); // TODO: probably shouldn't use rest here
clauses.register("DROP", ["TABLE", "identifier"]);