import { clauses } from "./parseClause/parseClause";

clauses.register("WHERE", ["predicate"]);

clauses.register("SELECT", ["multi_identifier"]);
clauses.register("FROM", ["multi_identifier"]);

clauses.register("CREATE", [["TABLE", "DATABASE"], "identifier", "expression"]);

clauses.register("INSERT", ["INTO", "identifier", "expression"]);
clauses.register("VALUES", ["rest"]); // TODO: probably shouldn't use rest here
clauses.register("DROP", [["TABLE", "DATABASE"], "identifier"]);

clauses.register("TRUNCATE", [{optional: true, word:"TABLE"}, "identifier"]);

clauses.register("DELETE", ["FROM", "multi_identifier"]);

clauses.register("UPDATE", ["multi_identifier"]);
clauses.register("SET", ["multi_predicate"]);