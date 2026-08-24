import { useCallback, useEffect, useState } from "react";
import { getProductQuestionsServerFn, askQuestionServerFn, type DbQuestion } from "@/functions/questions";

export type ProductQuestion = {
  id: string;
  slug: string;
  question: string;
  answer?: string | undefined;
  askedBy: string;
  answeredBy?: string | undefined;
  createdAt: number;
  pending?: boolean | undefined;
};

function mapDbQuestion(q: DbQuestion): ProductQuestion {
  return {
    id: q.id,
    slug: q.slug,
    question: q.question,
    answer: q.answer ?? undefined,
    askedBy: q.asked_by,
    answeredBy: q.answered_by ?? undefined,
    createdAt: q.created_at,
    pending: q.status === "pending" || !q.answer,
  };
}

export function useProductQuestions(slug: string) {
  const [questions, setQuestions] = useState<ProductQuestion[]>([]);

  const fetchQuestions = useCallback(async () => {
    try {
      const list = await getProductQuestionsServerFn({ data: { slug } });
      setQuestions(list.map(mapDbQuestion));
    } catch (err) {
      console.warn("Failed to fetch server questions:", err);
    }
  }, [slug]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const ask = useCallback(
    async (question: string, askedBy: string) => {
      try {
        const res = await askQuestionServerFn({
          data: { slug, question, askedBy },
        });
        const mapped = mapDbQuestion(res.question);
        setQuestions((prev) => [mapped, ...prev.filter((q) => q.id !== mapped.id)]);
        return mapped;
      } catch (err) {
        console.error("askQuestionServerFn failed, using fallback:", err);
        const fallback: ProductQuestion = {
          id: `q-${Date.now()}`,
          slug,
          question: question.trim(),
          askedBy: askedBy.trim() || "Guest",
          createdAt: Date.now(),
          pending: true,
        };
        setQuestions((prev) => [fallback, ...prev]);
        return fallback;
      }
    },
    [slug],
  );

  const answeredCount = questions.filter((q) => !q.pending && q.answer).length;

  return { questions, answeredCount, ask, refresh: fetchQuestions };
}
