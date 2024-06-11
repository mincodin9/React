import React from "react";

//클래스 컴포넌트-바인드 사용
class ConfirmButton extends React.Component {
    constructor(props){
        super(props);

        //확인여부를 저장하기 위해 state에 isConfirmed라는 변수를 하나 갖고있음
        this.state = {
            isConfirmed: false,
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    //바인드를 사용하는 방식으로 이벤트 핸들러 처리함
    handleConfirm() {
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