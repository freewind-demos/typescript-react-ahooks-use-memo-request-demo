import {useRequest} from "ahooks";
import {useMemo} from "react";

export const useMemoRequest: typeof useRequest = (...args) => {
    const result = useRequest(...args);
    const memoResult = useMemo(() => {
        return result;
    }, [
        result.loading,
        result.data,
        result.error,
        result.params,
        result.cancel,
        result.refresh,
        result.refreshAsync,
        result.run,
        result.runAsync,
        result.mutate,
    ])
    return memoResult
}
