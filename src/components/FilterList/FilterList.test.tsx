import { act, render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import FilterList from "./FilterList";
import useCardsStore from "../../hooks/useCardsStore";

describe("FilterList", () => {
    const user = userEvent.setup();
    const { getByPlaceholderText, getByText } = render(<FilterList />);

    test("Render the FilterList", () => {
        const { result } = renderHook(() => useCardsStore());

        act(() => {
            result.current.addCard({
                id: crypto.randomUUID(),
                description: "Test Item 1",
            });
        });

        act(() => {
            result.current.addCard({
                id: crypto.randomUUID(),
                description: "Test Item 2",
            });
        });

        act(() => {
            result.current.addCard({
                id: crypto.randomUUID(),
                description: "Test Item 3",
            });
        });

        expect(getByText("Test Item 1")).toBeDefined();
        expect(getByText("Test Item 2")).toBeDefined();
        expect(getByText("Test Item 3")).toBeDefined();
    });

    test("Remove from the list", async () => {
        const { result } = renderHook(() => useCardsStore());
        expect(result.current.cards.length).toBe(3);

        const liElement = getByText("Test Item 1").closest("article");
        const closeButton = liElement?.firstChild as Element;
        await user.click(closeButton!);

        expect(result.current.cards.length).toBe(2);
    });

    test("filter is working", async () => {
        const { result } = renderHook(() => useCardsStore());
        const filterInput = getByPlaceholderText("Buscar Frase");
        await user.type(filterInput, "Test");

        expect(getByText("Test Item 2")).toBeDefined();
        expect(result.current.cards.length).toBe(2);
    });

    test("filter is working with a phrase", async () => {
        const { result } = renderHook(() => useCardsStore());
        const filterInput = getByPlaceholderText("Buscar Frase");
        await user.clear(filterInput);
        await user.type(filterInput, "Test 2");
        screen.debug();

        expect(getByText("Test Item 2")).toBeDefined();
        expect(result.current.cards.length).toBe(2);
    });
});
