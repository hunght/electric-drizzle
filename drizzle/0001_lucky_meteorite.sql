CREATE TABLE `activities` (
	`id` text PRIMARY KEY NOT NULL,
	`app_title` text NOT NULL,
	`app_id` text NOT NULL,
	`memory_usage` integer,
	`start_time` integer NOT NULL,
	`end_time` integer,
	`owner_name` text,
	`window_bounds_x` integer,
	`window_bounds_y` integer,
	`window_bounds_width` integer,
	`window_bounds_height` integer
);
