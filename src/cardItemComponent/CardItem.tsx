import React, { DragEvent, DragEventHandler } from 'react';
import { ICardProps } from "./cardItemProps";
import CloseIcon from '@material-ui/icons/Close';
import './CardItem.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';

const CardItem: React.FC<ICardProps> = ({
    header,
    description,
    cardIndex,
    listIndex,
    removeClick,
    dragAction
} : ICardProps) => {

    const handleRemoveClick = () => removeClick({
        cardIndex,
        listIndex
    })

    const handleDragStart: DragEventHandler<HTMLDivElement> = (event: DragEvent) => {
        const cardData = {
            header,
            description,
            cardIndex,
            listIndex,
        }
        event.dataTransfer.setData("text", JSON.stringify(cardData));
        dragAction(cardData);
        console.log(event);
    }

    return (
        <Card draggable="true"
            onDragStart={handleDragStart}
            className="card">
            <CardContent>
                <h5>{header}</h5>
                <IconButton onClick={handleRemoveClick}
                        className="icon-button"
                        size="small">
                    <CloseIcon />
                </IconButton>
                <p>
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}

export default CardItem;