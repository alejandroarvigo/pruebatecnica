import useCardsStore from "../../hooks/useCardsStore";
import { Card } from "../../types/CardTypes";

const Form = () => {
    const { addCard } = useCardsStore();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const payload = Object.fromEntries(formData);
        const { item } = payload;

        const newItem: Card = {
            id: crypto.randomUUID(),
            description: item.toString(),
        };

        item && addCard(newItem);
        event.currentTarget.reset();
    };

    return (
        <div className="px-8 flex justify-center mb-5">
            <form
                onSubmit={onSubmit}
                id="formCard"
                className="flex flex-col w-full"
            >
                <div className="max-w-6xl mx-auto w-full">
                    <div className="space-y-2">
                        <label className="text-sm font-medium font-sans leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Agregar una frase
                        </label>
                        <textarea
                            className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                            placeholder="Agregar una frase"
                            name="item"
                        />
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs mt-2"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
