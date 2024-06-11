import React, {useState} from "react";

//함수컴포넌트로 변경
function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    //Arrow function을 사용함
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;