"use client";
import { deleteReviewAction } from "@/actions/delete-review.action";
import { useActionState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function ReviewItemDeleteButton({
  reviewId,
  movieId,
}: {
  reviewId: number;
  movieId: number;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );
  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);
  return (
    <form ref={formRef} action={formAction}>
      <input name="reviewId" value={reviewId} readOnly hidden />
      <input name="movieId" value={movieId} readOnly hidden />
      {isPending ? (
        <div>삭제중...</div>
      ) : (
        <div onClick={() => formRef.current?.requestSubmit()}>
          🗑️리뷰 삭제하기
        </div>
      )}
    </form>
  );
}
