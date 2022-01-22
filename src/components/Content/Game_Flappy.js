import React, { Component } from 'react';

class Game_Flappy extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {/* Product grid */}
                    <div className='w3-margin-top'></div>
                    <h3 className="w3-wide w3-cursive w3-center pb-4 pt-4 mt-4"><i className="fas fa-gamepad" /><b> Flappy Bird</b></h3>
                    <div className='w3-center'>
                        <iframe width="80%" height="480px" src="https://nebezb.com/floppybird/"
                            name="bestgameever" frameBorder={0} scrolling="no" position="fixed">Your browser does not support iframes.&amp;gt;&amp;nbsp;
                        </iframe>
                    </div>
                </div>
            </div>

        );
    }
}

export default Game_Flappy;