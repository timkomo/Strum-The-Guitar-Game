//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import guitar from "./guitar.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    guitar,
    clickedguitar: [],
    score: 0
  };

//when you click on a card ... the guitar is taken out of the array
  imageClick = event => {
    const currentguitar = event.target.alt;
    const guitarAlreadyClicked =
      this.state.clickedguitar.indexOf(currentguitar) > -1;

//if you click on a guitar that has already been selected, the game is reset and cards reordered
    if (guitarAlreadyClicked) {
      this.setState({
        guitar: this.state.guitar.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedguitar: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available guitar, your score is increased and cards reordered
    } else {
      this.setState(
        {
          guitar: this.state.guitar.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedguitar: this.state.clickedguitar.concat(
            currentguitar
          ),
          score: this.state.score + 1
        },
//if you get all 12 guitars correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              guitar: this.state.guitar.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedguitar: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Jumbotron />
        <Navbar 
          score={this.state.score}
        />
        <div className="wrapper">
          {this.state.guitar.map(guitar => (
            <FriendCard
              imageClick={this.imageClick}
              id={guitar.id}
              key={guitar.id}
              image={guitar.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;