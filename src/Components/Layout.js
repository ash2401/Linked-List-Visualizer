import React from "react";
import "./LinkedList.css";
import LinkedList from "./LinkedList"
import Node from "./Node";

const list = new LinkedList()

console.log(list)

export default class Layout extends React.Component {
constructor(props) {
    super(props);

    
    this.state = list;
    
    this.addToHead = this.addToHead.bind(this);
    this.addToTail = this.addToTail.bind(this);
    this.find = this.find.bind(this);
    this.remove = this.remove.bind(this);
    this.insertAt = this.insertAt.bind(this);
    this.clearList = this.clearList.bind(this);

    
    
    

}

componentDidMount() {
    this._inputElement.focus();
    //this._inputElement2.focus();
}



addToHead(e) {
    if (this._inputElement.value !== "") {
        
        this.setState(list.addToHead(this._inputElement.value))
    };

    this._inputElement.value = "";
    console.log(list)
    e.preventDefault()
    this._inputElement.focus()
    
}

addToTail(e) {
    if (this._inputElement2.value !== "") {
        

        this.setState(list.addToTail(this._inputElement2.value))
    };

    this._inputElement2.value = "";
    console.log(list)
    e.preventDefault()
    this._inputElement2.focus()
}

find(e) {
    if (this._inputFind.value !== "") {
        e.preventDefault()
        
        console.log(list.find(this._inputFind.value))

      //  this.setState(list.find(this._inputFind))
    };
    this.setState(list)
    this._inputFind.focus()
    e.preventDefault()
    
}


remove(e) {
    if (this._inputDelete.value !== "") {
        console.log(this._inputDelete.value)
        list.remove(this._inputDelete.value)
    };

    this._inputDelete.value = "";
    this.setState(list)
    console.log(list)
    e.preventDefault();
    this._inputDelete.focus()

}

insertAt(e) {
    if(this._inputIndex.value !== "" && this._inputData.value !== "") {
        console.log(this._inputData.value + this._inputIndex.value);
        list.insertAt(this._inputData.value, this._inputIndex.value)
        this.setState(list)
        //list.insertAt(this._inputData.value,this._inputIndex.value)
        //console.log(list.insertAt(this._inputData.value, this._inputIndex.value))
    //    this.setState(list.insertAt(this._inputData.value,this._inputIndex.value))
    }
    
    this._inputData.value = "";
    this._inputIndex.value = "";
    e.preventDefault()
    
}


clearList(e) {
    console.log(list.clearList());
    this.setState(list)
    e.preventDefault();
}

render() {
    
    
    let items = [];
    let currentNode = this.state.head;

    //const {list} = this.state;
    console.log(list)
    //list.map(list => console.log())
    //console.log(currentNode.data)
    //console.log(list)
    

    while(currentNode) {
        items.push(<li>{currentNode.data}</li>);
        currentNode = currentNode.next;
    }
    
    
    return (

        <div className="linkedListMain">
            <div className="header">
                <h1>Singly-Linked List Visualizer</h1>

            </div>
            <div className="ui">
                <form onSubmit={this.addToHead}>
                    
                    <button type="submit"><input ref={(a) => this._inputElement = a}
                    placeholder="Add To Head">
                </input>➕</button>
                </form>
                
                <form onSubmit={this.addToTail}>
                    <button type="submit">
                        <input input ref={(a) => this._inputElement2 = a}
                    placeholder="Add to Tail"> 
                    </input>➕</button>
                </form>
                

                <form onSubmit={this.find}>
                <button type="submit">
                        <input ref={(a) => this._inputFind = a} id="something"
                    placeholder="Highlight at Index"> 
                    </input>🔍</button>
                    
                </form>

                

                <form onSubmit={this.remove}>
                <button type="submit"> 
                <input ref={(a) => this._inputDelete = a}
                placeholder="Delete Specific index">
                </input>➖</button>
                </form>

                <form onSubmit={this.insertAt}>
                <fieldset>
                <legend>Insert At</legend>
                    
                    <input id="value" name="value" input ref={(a) => this._inputData = a}
                    placeholder = "value"/>

                    
                    <input id="index" name="index" input ref={(a) => this._inputIndex = a} 
                    placeholder = "index"/>

                    <button type="submit" value="Submit">Submit</button>
                </fieldset>
                </form>
                
                <button type = "submit" value = "submit" onClick={this.clearList}>Clear List</button>

            </div>

            <div className="theList" >
            
                
                    <ul><h3 id="action">{list.action}</h3></ul>{items}
                    <ul></ul>
                
            </div>

            

        

            <div className="footer">
                <footer>
                    <a href="https://github.com/ash2401/Linked-List-Visualizer">
                    Code: Akshat Srivastava</a><br />
                    Made with React!
                    
            </footer>
            </div>
        </div>
    );
}

}

