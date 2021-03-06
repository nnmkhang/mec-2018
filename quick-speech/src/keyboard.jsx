import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon'


class Key extends Component{
    render() {
        return (

                <Paper onClick={() => this.props.addText()} className={this.props.type}>
                    <Typography variant="h5" component="h3">
                        {this.props.children}
                    </Typography>
                </Paper>

        );
    }

}


class CustomKeyboard extends Component {
    constructor(props){
        super(props);
        this.qwerty = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    }

    render() {
        const keys = this.qwerty.map((char) => <Key type={"key"} addText={()=>this.props.addText(char)} key={char}>{char}</Key> );
        return(            
            <div className="keyboard">
                {keys}
                <Paper onClick={()=>this.props.addText(" ")} className="space"> <Typography variant="h5" component="h3"> SPACE
                    </Typography>
                </Paper>
                <Paper onClick={()=>this.props.delText()} className="back"><Icon>DEL</Icon>
                </Paper>
                
                
                

                
                
                
            </div>
        );
    }
}

class PhrasesKeyboard extends Component{
    constructor(props){
        super(props);
        this.greets = ["HELLO" ,"HOW ARE YOU", "I AM DOING WELL", "GOODBYE",
                        "MY NAME IS DON", "GOOD MORNING", "GOOD EVENING", "GOOD NIGHT",  "SEE YOU TOMORROW", "SLEEP WELL", "YES", "NO", "THANK YOU", "PLEASE"]
    }


    render(){
        const greetings = this.greets.map((greet) => {
            console.log(greet);
            return <Key addText={() => this.props.addText(" "+greet)} type="message"> {greet}</Key>
        } );
        return(
            <div className="keyboard">
                {greetings}
            </div>
        );
    }
}

class ActivityKeyboard extends Component {
    constructor(props){
        super(props);
        this.activities = ["I WANT TO EAT","I WANT TO USE THE WASHROOM","I WANT TO SHOWER", "LET'S GO OUTSIDE", "I AM UNCOMFORTABLE",]
    }

    render(){
        const activites = this.activities.map((obj) => {
            return <Key addText={() => this.props.addText(" "+obj)} type="message"> {obj}</Key>
        });
        return(
            <div className="keyboard">
                {activites}
            </div>

        );
    }
}


class NamesKeyboard extends Component {
    constructor(props){
        super(props);
        this.names = ["BOB","MICHAEL","JIM","HENRY","JILL","MICHELLE","SHIRLEY","TROY","TRAVIS"]
    }

    render(){
        const names = this.names.map((obj) => {
            return <Key addText={() => this.props.addText(" "+obj)} type="message"> {obj}</Key>
        });
        return(
            <div className="keyboard">
                {names}
            </div>

        );
    }

}



class Keyboard extends Component {

    constructor(props){
        super(props);
        this.currentKeyboard = this.currentKeyboard.bind(this);
    }

    currentKeyboard(){
        switch(this.props.selected){
            case "Custom Message":
                return <CustomKeyboard 
                        addText={this.props.addText} 
                        delText={this.props.delText}
                        sayText={this.props.sayText}
                        clearText={this.props.clearText}
                        ></CustomKeyboard>;

            case "Phrases":
                return <PhrasesKeyboard                         
                addText={this.props.addText} 
                delText={this.props.delText}
                sayText={this.props.sayText}
                clearText={this.props.clearText}
                ></PhrasesKeyboard>

            case "Activities":
            return <ActivityKeyboard                         
                addText={this.props.addText} 
                delText={this.props.delText}
                sayText={this.props.sayText}
                clearText={this.props.clearText}
                ></ActivityKeyboard>

            case "Names":
            return <NamesKeyboard                         
                addText={this.props.addText} 
                delText={this.props.delText}
                sayText={this.props.sayText}
                clearText={this.props.clearText}
                ></NamesKeyboard>

            default:
                return null;
        }
    }



    render() {
        return(
            <div>
                {this.currentKeyboard()}
                <div className="keyboard">                
                    <Paper onClick={()=>this.props.clearText()} className="talk"><Icon>CLEAR</Icon></Paper>
                    <Paper onClick={()=>this.props.sayText()} className="talk"><Icon>TALK</Icon></Paper>
                </div>
            </div>
        );
    }

}


export default Keyboard;