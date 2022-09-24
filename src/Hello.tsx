import React, {FC, useEffect, useState} from 'react';
import './Hello.pcss';
import {useMemoRequest} from "./useMemoRequest";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const [version, setVersion] = useState(0)

    const request = useMemoRequest(async () => {
        console.log("### version", version)
        return Promise.resolve(version)
    })

    useEffect(() => {
        console.log('### request is changing')
    }, [request]);

    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <div>
            <div>
                <button onClick={() => setVersion(n => n + 1)}>update version ({version})</button>
                <button onClick={() => request.refresh()}>refetch</button>
            </div>
            <div>request:
                <ul>
                    <li>loading: {JSON.stringify(request.loading)}</li>
                    <li>data: {request.data}</li>
                    <li>error: {request.error}</li>
                </ul>
            </div>
        </div>
    </div>;
}
