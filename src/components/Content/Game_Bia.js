import React, { Component } from 'react';

class Game_Bia extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {/* Product grid */}
                    <div className='w3-margin-top'></div>
                    <h3 className="w3-wide w3-cursive w3-center pb-4 pt-4 mt-4"><i className="fas fa-gamepad" /><b> Beer shooting</b></h3>
                    <div className='w3-center'>
                        <iframe width="76%" height="480" src="https://scratch.mit.edu/projects/632584024/embed"
                            name="bestgameever" frameBorder={0} scrolling="no" position="fixed">Dino
                        </iframe>
                    </div>
                </div>
            </div>

        );
    }
}

export default Game_Bia;