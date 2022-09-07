import { Component } from "react"

class BubbleAlert extends Component {
    getNumber(n){
        if(!n){return'' }
        return n > 9 ? '9+' : n;
    }
    render(){
        const { value } = this.props;
        return(
            <span className="position-absolute top-100 end-50 translate-middle badge rounded-pill bg-danger">
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert