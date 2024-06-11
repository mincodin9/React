import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        //생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화함
        this.state = {
            notifications: [],
        };
    }

    //1초마다 정해진 작업 수행
    //reservedNotifications에서 알림데이터를 하나씩 가져와 notifications에 넣고 업데이트(이 처리를 위해서 setState를 사용함)
    componentDidMount(){
        const{notifications} = this.state;
        timer = setInterval(() =>{
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            }else{
                //componentWillUnmount 이함수 로그를 보기위해 notifications배열을 비우도록 작성했는데 왜 나는 그 전부터 이게 뜨지..?
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notification) =>{
                    return (
                        <Notification
                            //map 함수를 사용할때는 필수적으로 key가 들어가야함
                            key={notification.id}
                            id={notification.id}
                            message = {notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;