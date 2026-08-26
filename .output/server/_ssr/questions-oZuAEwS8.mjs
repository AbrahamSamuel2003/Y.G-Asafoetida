import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as getDb } from "./db-DqClzGFy.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/questions-oZuAEwS8.js
var getProductQuestionsServerFn_createServerFn_handler = createServerRpc({
	id: "4ab8af57cec7a61a8255cd367ed0f14486b1befca03ef6a66044ccd749972b62",
	name: "getProductQuestionsServerFn",
	filename: "src/functions/questions.ts"
}, (opts) => getProductQuestionsServerFn.__executeServer(opts));
var getProductQuestionsServerFn = createServerFn({ method: "GET" }).validator((data) => ({ slug: String(data?.slug ?? "").trim() })).handler(getProductQuestionsServerFn_createServerFn_handler, async ({ data }) => {
	if (!data.slug) return [];
	return getDb().prepare(`
      SELECT * FROM questions
      WHERE slug = ? AND (status = 'published' OR answer IS NOT NULL)
      ORDER BY created_at DESC
    `).all(data.slug);
});
var askQuestionServerFn_createServerFn_handler = createServerRpc({
	id: "eb279a78d43a3166ad78bf26065f44f316ee58cdc92d0f6beaa075998395280e",
	name: "askQuestionServerFn",
	filename: "src/functions/questions.ts"
}, (opts) => askQuestionServerFn.__executeServer(opts));
var askQuestionServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(askQuestionServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const id = `q-${Date.now()}`;
	const now = Date.now();
	db.prepare(`
      INSERT INTO questions (id, slug, question, answer, asked_by, answered_by, created_at, answered_at, status)
      VALUES (?, ?, ?, NULL, ?, NULL, ?, NULL, 'pending')
    `).run(id, data.slug, data.question.trim(), data.askedBy.trim() || "Guest", now);
	return {
		ok: true,
		question: db.prepare("SELECT * FROM questions WHERE id = ?").get(id)
	};
});
var adminListQuestionsServerFn_createServerFn_handler = createServerRpc({
	id: "4dab48bafb6af5004be81ebc807fb8583a96a17d0aad39fa17a0f98fbbb7be6a",
	name: "adminListQuestionsServerFn",
	filename: "src/functions/questions.ts"
}, (opts) => adminListQuestionsServerFn.__executeServer(opts));
var adminListQuestionsServerFn = createServerFn({ method: "GET" }).validator((data) => ({
	status: data?.status ? String(data.status).trim() : void 0,
	slug: data?.slug ? String(data.slug).trim() : void 0
})).handler(adminListQuestionsServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	let query = "SELECT * FROM questions";
	const conditions = [];
	const params = [];
	if (data?.status && data.status !== "all") {
		conditions.push("status = ?");
		params.push(data.status);
	}
	if (data?.slug && data.slug !== "all") {
		conditions.push("slug = ?");
		params.push(data.slug);
	}
	if (conditions.length > 0) query += " WHERE " + conditions.join(" AND ");
	query += " ORDER BY created_at DESC";
	return db.prepare(query).all(...params);
});
var adminAnswerQuestionServerFn_createServerFn_handler = createServerRpc({
	id: "c609583c266f5765b44f7d275ddb6c312beeb853cbf359efce90daae89b359bb",
	name: "adminAnswerQuestionServerFn",
	filename: "src/functions/questions.ts"
}, (opts) => adminAnswerQuestionServerFn.__executeServer(opts));
var adminAnswerQuestionServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminAnswerQuestionServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const now = Date.now();
	db.prepare(`
      UPDATE questions
      SET answer = ?, answered_by = ?, answered_at = ?, status = 'published'
      WHERE id = ?
    `).run(data.answer.trim(), data.answeredBy?.trim() || "Y.G team", now, data.id);
	return { ok: true };
});
var adminDeleteQuestionServerFn_createServerFn_handler = createServerRpc({
	id: "70e6af66f65057384770cd96bccf9a89a83173d238da9a89ed5562e73b88b7f0",
	name: "adminDeleteQuestionServerFn",
	filename: "src/functions/questions.ts"
}, (opts) => adminDeleteQuestionServerFn.__executeServer(opts));
var adminDeleteQuestionServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminDeleteQuestionServerFn_createServerFn_handler, async ({ data }) => {
	getDb().prepare("DELETE FROM questions WHERE id = ?").run(data.id);
	return { ok: true };
});
//#endregion
export { adminAnswerQuestionServerFn_createServerFn_handler, adminDeleteQuestionServerFn_createServerFn_handler, adminListQuestionsServerFn_createServerFn_handler, askQuestionServerFn_createServerFn_handler, getProductQuestionsServerFn_createServerFn_handler };
