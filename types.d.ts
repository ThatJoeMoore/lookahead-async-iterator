
export interface ILookaheadAsyncIterator<T, TReturn = any, TNext = any> extends AsyncIterator<T, TReturn, TNext> {
}

export type LookaheadAsyncIteratorOptions = {
    maxLookahead?: number
}