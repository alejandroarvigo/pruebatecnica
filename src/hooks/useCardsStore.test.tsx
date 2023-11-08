import { describe, expect, test, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import useStore from "./useCardsStore";

describe("Store", () => {
    test("should add Item", () => {
        const { result } = renderHook(() => useStore());

        const itemsLength = result.current.cards.length;

        act(() => {
            result.current.addCard({
                id: crypto.randomUUID(),
                description: "Test Item",
            });
        });

        expect(result.current.cards.length).toBe(itemsLength + 1);
    });

    test("should remove item from the store", () => {
        const { result } = renderHook(() => useStore());
        const itemToDelete = result.current.cards.find((card) =>
            card.description.includes("Test Item")
        );

        act(() => {
            result.current.removeCard(itemToDelete!);
        });

        expect(result.current.cards.length).toBe(0);
    });
});
