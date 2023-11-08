import { useMemo, useState } from "react";
import { Card as CardType } from "../../types/CardTypes";
import useCardsStore from "../../hooks/useCardsStore";
import SearchIcon from "../../assets/SearchIcon";
import Card from "../Card/Card";
import { motion } from "framer-motion";

const animation = {
    initial: { opacity: 0, y: 50, scale: 0.3 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.5, y: -50, transition: { duration: 0.8 } },
};

const FilterList = () => {
    const { cards, removeCard } = useCardsStore();
    const [filterItem, setFilterItem] = useState<string>("");

    //high order function
    const getPhrasesThatIncludeThisWord = (word: string) => {
        return (item: CardType): boolean => {
            if (!word) return true;
            
            const words = word.split(" ");
            return words.every((wordToSearch) =>
                item.description
                    .toLowerCase()
                    .includes(wordToSearch.toLowerCase())
            );
        };
    };

    const filteredCards = useMemo((): CardType[] => {
        const filterCards = getPhrasesThatIncludeThisWord(filterItem.trim());
        return cards.filter(filterCards);
    }, [cards, filterItem]);

    return (
        <div className="px-8 relative">
            <div className="mx-auto max-w-6xl box-border">
                <div className="flex flex-wrap box-border mb-5">
                    {filteredCards?.map((card) => (
                        <motion.div
                            {...animation}
                            layout
                            key={card.id}
                            className="p-2 md:w-1/3 sm:w-1/2 w-full"
                        >
                            <Card
                                key={card.id}
                                description={card.description}
                                onClickIconHandler={() => removeCard(card)}
                            />
                        </motion.div>
                    ))}
                </div>

                {cards.length > 0 && (
                    <div className="flex h-14 px-4 mb-4 items-center border-black border-solid border bg-white rounded-lg">
                        <label htmlFor="">
                            <SearchIcon />
                        </label>
                        <input
                            type="text"
                            placeholder="Buscar Frase"
                            onChange={(e) => setFilterItem(e.target.value)}
                            value={filterItem}
                            className="h-full w-[80%] pl-2 text-base flex-1 border-none font-sans focus:outline-none "
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterList;
