import React from "react";
import Controls from "./Controls";
import Statistics from "./Statistics";

class Counter extends React.Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0
}

    handleIncrement = (event) => {
        // console.dir(event.target.id) 
        const { id } = event.target;
        if (id === '1') {
                    this.setState (prevState=> {
                        return {
             good:prevState.good+1,
         }
        })
        }
                if (id === '2') {
                    this.setState (prevState=> {
                        return {
             neutral:prevState.neutral+1,
         }
        })
        }
        if (id === '3') {
                    this.setState (prevState=> {
                        return {
             bad:prevState.bad+1,
         }
        })
        }
        // const summary = this.state.good + this.state.neutral + this.state.bad+1;
        // console.log(summary);
    }

    render() {
        return (
            <div className="counter">
                <h1>Please leave feedBack</h1>
                <Controls onIncrement={ this.handleIncrement} />
                <h2>Statistix</h2>
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} summary={this.state.good + this.state.neutral + this.state.bad} positive={Math.round((this.state.good / this.state.bad) * 100) } />
                </div>

    )

    }
} 

export default Counter;