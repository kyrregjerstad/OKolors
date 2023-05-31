import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ request }) => {
	const authHeader = request.headers.get("Authorization");
	console.log(authHeader);
	return new Response(JSON.stringify({ message: "Hello world" }), {
		status: 200
	});
};

export const POST = async ({ request }) => {
	const authHeader = request.headers.get("Authorization");
	console.log(authHeader);
	const body = await request.json();
	console.log(body);
	return new Response(JSON.stringify({ message: "Hello world" }), {
		status: 200
	});
};
