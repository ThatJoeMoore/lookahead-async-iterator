/**
 *
 */

/**
 * @template T
 * @template TReturn = any
 *
 * @implements {AsyncIterator<T, TReturn>}
 */
class LookaheadAsyncIterator {

    #wrapped
    /** @type {Array<IteratorResult<T>>} */
    #buffer = []
    #maxLookahead

    /**
     *
     * @param {AsyncIterator<T, TReturn>} wrappedIterator
     * @param {import("./types").LookaheadAsyncIteratorOptions} opts
     */
    constructor(wrappedIterator, opts = {}) {
        this.#wrapped = wrappedIterator
        this.#maxLookahead = opts.maxLookahead ?? 1
    }

    async next() {
        const n = this.#wrapped.next();


        return n;
    }

    [Symbol.asyncIterator]() {
        return this;
    }
}
