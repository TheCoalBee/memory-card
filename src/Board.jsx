import React, { useCallback } from 'react'
import {useState, useEffect} from 'react'
import Card from './Card'

export default function Board({score, highScore, setScore, setHighScore}) {
    const [cards, setCards] = useState([]);

    // load cards with data
    useEffect(() => {
        generateCards();
    }, []);

    const generateCards = () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=cats&api_key=u6P77H4ue0rpTU0erPB5dOx4k7Dfc1Zg&limit=9')
        .then(response => response.json())
        .then((data) => {
          const imagesData = [];
          data.data.forEach(image =>
            imagesData.push(
              {
                id: image.id, 
                url: image.images.original_still.url,
                selected:false
              }
            ));
          setCards(imagesData);
        })
    }

    // shuffle display order of cards

    const shuffleCards = () => setCards(cards.sort(() => Math.random() - 0.5));
    
    const incrementScore = () => {
        if (score < 9) {
            setScore(score + 1);
            if (score + 1 > highScore) setHighScore(score+1);
        }
    }

    const handleLose = () => {
        setScore(0);
        generateCards();
    }

    const handleClick = (cardId) => {
        const cardIndex = cards.findIndex(x => x.id === cardId);
        const card = cards[cardIndex];

        // if card is already selected, 
        if (card.selected) {
            // lose game
            handleLose();
        } else {
            shuffleCards();
            incrementScore();
            // update card and then set new cards
            const newCards = cards.map(card => {
                if (card.id === cardId) {
                    return {
                        ...card,
                        selected: true
                    }
                } else {
                    return card;
                }
            })
            setCards(newCards);
        }

    };

    return (
        <>
            <div id="board">
                {cards.map(card => 
                    <Card 
                        key={card.id}
                        id={card.id}
                        src={card.url}
                        onClick={handleClick}/>
                )}
            </div>
        </>
  )
}
