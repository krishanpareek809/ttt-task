import React, { useState } from "react";
import './FeedCard.css';
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function FeedCard({ id, image, name, tags, message }) {
    const [isLiked, setIsLiked] = useState(false);

    function handleLikeClick() {
        if (isLiked === true) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
        }
    }

    return (
        <div className="feed_card_container">
            <div>
                <div className="feed_card_title">
                    <div className="feed_card_title_text">
                        <p className="feed_card_title_text_name">{name}</p>
                        <div className="tags">
                            {tags.map((value) => (
                                <p className="feed_card_title_text_username">{value}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <p>{message}</p>

                <div className="icons_container">
                    <div className="icons" onClick={handleLikeClick}>
                        {isLiked ? <ThumbUpIcon /> : <ThumbUpOffAltOutlinedIcon />}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FeedCard;