import { error } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	saveColor: async event => {
		const session = await event.locals.getSession();

		if (!session) {
			throw error(401, "Unauthorized");
		}

		console.log(event);
		const color = JSON.parse(event);

		const { error: insertError } = await event.locals.supabase.from("colors").insert({
			user_id: session.user.id,
			name: color.name,
			l: color.values.l,
			c: color.values.c,
			h: color.values.h
		});

		if (insertError) {
			throw error(500, "Error saving the color, please try again later.");
		}

		return { message: "Color saved successfully" };
	}
};
