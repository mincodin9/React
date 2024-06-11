import React from "react";

//클래스컴포넌트-Class fields syntax사용
class ConfirmButton extends React.Component {
    constructor(props){
        super(props);

        //확인여부를 저장하기 위해 state에 isConfirmed라는 변수를 하나 갖고있음
        this.state = {
            isConfirmed: false,
        };

    }

    //Arrow function으로 수정함
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;