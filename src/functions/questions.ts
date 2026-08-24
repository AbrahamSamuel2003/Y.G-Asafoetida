import { createServerFn } from "@tanstack/react-start";
import { getDb } from "@/server/db";

export type DbQuestion = {
  id: string;
  slug: string;
  question: string;
  answer: string | null;
  asked_by: string;
  answered_by: string | null;
  created_at: number;
  answered_at: number | null;
  status: "pending" | "published";
};

export const getProductQuestionsServerFn = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => ({ slug: String(data?.slug ?? "").trim() }))
  .handler(async ({ data }): Promise<DbQuestion[]> => {
    if (!data.slug) return [];
    const db = getDb();
    return db.prepare(`
      SELECT * FROM questions
      WHERE slug = ? AND (status = 'published' OR answer IS NOT NULL)
      ORDER BY created_at DESC
    `).all(data.slug) as DbQuestion[];
  });

export const askQuestionServerFn = createServerFn({ method: "POST" })
  .validator((data: { slug: string; question: string; askedBy: string }) => data)
  .handler(async ({ data }): Promise<{ ok: boolean; question: DbQuestion }> => {
    const db = getDb();
    const id = `q-${Date.now()}`;
    const now = Date.now();

    db.prepare(`
      INSERT INTO questions (id, slug, question, answer, asked_by, answered_by, created_at, answered_at, status)
      VALUES (?, ?, ?, NULL, ?, NULL, ?, NULL, 'pending')
    `).run(id, data.slug, data.question.trim(), data.askedBy.trim() || "Guest", now);

    const question = db.prepare("SELECT * FROM questions WHERE id = ?").get(id) as DbQuestion;
    return { ok: true, question };
  });

export const adminListQuestionsServerFn = createServerFn({ method: "GET" })
  .validator((data?: { status?: string; slug?: string }) => ({
    status: data?.status ? String(data.status).trim() : undefined,
    slug: data?.slug ? String(data.slug).trim() : undefined,
  }))
  .handler(async ({ data }): Promise<DbQuestion[]> => {
    const db = getDb();
    let query = "SELECT * FROM questions";
    const conditions: string[] = [];
    const params: string[] = [];

    if (data?.status && data.status !== "all") {
      conditions.push("status = ?");
      params.push(data.status);
    }
    if (data?.slug && data.slug !== "all") {
      conditions.push("slug = ?");
      params.push(data.slug);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }
    query += " ORDER BY created_at DESC";

    return db.prepare(query).all(...params) as DbQuestion[];
  });

export const adminAnswerQuestionServerFn = createServerFn({ method: "POST" })
  .validator((data: { id: string; answer: string; answeredBy?: string | undefined }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    const now = Date.now();
    db.prepare(`
      UPDATE questions
      SET answer = ?, answered_by = ?, answered_at = ?, status = 'published'
      WHERE id = ?
    `).run(data.answer.trim(), data.answeredBy?.trim() || "Y.G team", now, data.id);
    return { ok: true };
  });

export const adminDeleteQuestionServerFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    db.prepare("DELETE FROM questions WHERE id = ?").run(data.id);
    return { ok: true };
  });
