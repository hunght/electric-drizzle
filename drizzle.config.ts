import { defineConfig } from "drizzle-kit";
import { join } from "path";

export default defineConfig({
    schema: "./src/lib/db/schemas/*.ts",
    out: "./drizzle",
    dialect: "sqlite",
    dbCredentials: {
        url: join(process.cwd(), "sqlite.db")
    }
});
