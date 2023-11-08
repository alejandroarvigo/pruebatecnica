import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Form from "./Form";

describe("Form", () => {
    const user = userEvent.setup();
    const { getByPlaceholderText, getByText } = render(<Form />);

    test("render the form", () => {
        const inputElement = getByPlaceholderText("Agregar una frase");
        const addButton = getByText("Agregar");

        expect(inputElement).toBeDefined();
        expect(addButton).toBeDefined();
    });

    test("submits the form", async () => {
        const inputElement = getByPlaceholderText("Agregar una frase");
        const addButton = getByText("Agregar");

        await user.type(inputElement, "Test Item");
        expect((inputElement as HTMLInputElement).value).toBe("Test Item");
        await user.click(addButton);

        expect((inputElement as HTMLInputElement).value).toBe("");
    });
});
