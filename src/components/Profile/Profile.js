import React from "react";
import './Profile.css';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function Profile() {
    return (
        <div>
            <div>
                <div class="section-main">
                    <div class="user-container-main">
                        <div class="user-image"></div>
                        <div class="user-info">
                            <div><h1>Anuj Gosalia</h1></div>
                            <div class="user-details">
                                <div>
                                    <button>6482</button>
                                    <p>Followers</p>
                                </div>
                                <div>
                                    <button>245</button>
                                    <p>Following</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="user-container-2">
                    <div>
                        <p>Co-founder & CEO at Terribly Tiny Tales</p>
                        <a href="http://www.instagram.com/anujgosalia">http://www.instagram.com/anujgosalia</a>
                    </div>

                    <div class="icons">
                        <div>
                            <StarIcon />125
                        </div>
                        <div>
                            <ThumbUpIcon />12
                        </div>
                        <div>
                            <FavoriteIcon />57.8K
                        </div>
                        <div>
                            <RemoveRedEyeIcon />26.0K
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile;