import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const activities = sqliteTable("activities", {
    id: text("id").primaryKey(),
    appTitle: text("app_title").notNull(),
    appId: text("app_id").notNull(),
    memoryUsage: integer("memory_usage"),
    startTime: integer("start_time").notNull(), // Unix timestamp
    endTime: integer("end_time"), // Unix timestamp
    ownerName: text("owner_name"),
    windowBoundsX: integer("window_bounds_x"),
    windowBoundsY: integer("window_bounds_y"),
    windowBoundsWidth: integer("window_bounds_width"),
    windowBoundsHeight: integer("window_bounds_height"),
});
