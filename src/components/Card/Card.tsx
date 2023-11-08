import CloseIcon from "../../assets/CloseIcon";

type CardProps = {
    description: string
    onClickIconHandler: () => void
}

const Card: React.FC<CardProps> = ({onClickIconHandler, description}) => {
    return (
        <div className="block border-gray border-solid border rounded-xl h-full bg-gray box-border">
            <article className="p-4 h-full flex flex-col">
                <div
                    className="self-end cursor-pointer"
                    onClick={onClickIconHandler}
                >
                    <CloseIcon />
                </div>
                <p className="flex-grow break-words min-h-[2.5rem] font-sans">
                    {description}
                </p>
            </article>
        </div>
    );
};

export default Card;
