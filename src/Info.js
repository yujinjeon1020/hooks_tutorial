import { useEffect, useState } from "react";

const Info = () => {
    //useState(상태 초기값);
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    //useEffect 이용!
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });

    // useEffect(() => {
    //     console.log('마운트 될 때만 실행됩니다.');
    // }, [])

    // //특정값 업데이트시에만 실행
    // useEffect(() => {
    //     console.log(name);
    // }, [name])

    //뒷정리함수
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;