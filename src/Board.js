import React from 'react';
import './Board.css';

export class MainBoard extends React.Component{
    addColumn(){
        const newColumn = document.createElement('div');
        const whereToAdd = document.getElementById('columns');
        whereToAdd.appendChild(newColumn);
        
    }

    render(){    
        return(
            <div>
                <button onClick={this.addColumn}>Add a column</button>
                <div id="columns">
                <h1>Lists of task</h1>
                </div>
            </div>
        );
    }

}