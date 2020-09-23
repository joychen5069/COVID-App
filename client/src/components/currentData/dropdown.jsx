import React, { Component } from 'react';

export default class StateDropdown extends Component {
    stateHandler = (event) => {
        console.log("THIS IS BEING CALLED")
        const stateSelected = event.value;
        console.log(stateSelected)        
    };

    render() {
        let stateList = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
        let stateOptions = stateList.map((state, i) => (
            <div value={state} key={i} onClick={this.stateHandler}>
                {state}
            </div>
        ));
        return (
            <>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select State
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {stateOptions}
                    </div>
                </div>
            </>
        )
    }
}