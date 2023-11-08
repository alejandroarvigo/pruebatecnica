import { create } from "zustand";
import { Card } from "../types/CardTypes";
import { persist } from "zustand/middleware";

type Store = {
    cards: Card[];
    addCard: (item: Card) => void;
    removeCard: (item: Card) => void;
};

export const useCardsStore = create<Store>()(
    persist(
        (set) => ({
            cards: [],
            addCard: (card) =>
                set((state) => ({ ...state, cards: [...state.cards, card] })),
            removeCard: (card) =>
                set((state) => ({
                    cards: state.cards.filter(
                        (existingItem) => existingItem.id !== card.id
                    ),
                })),
        }),
        {
            name: "cards-storage", 
        }
    )
);

export default useCardsStore;
