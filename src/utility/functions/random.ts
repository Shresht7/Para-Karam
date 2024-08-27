/**
 * Returns a random number in the specified range
 * @param max Upper limit of the range (default: 1)
 * @param min Lower limit of the range (default: 0)
 * @returns A random number from the given range
 */
export const getRandomNumber = (max: number = 1, min: number = 0) => Math.random() * (max - min) + min

/**
 * Returns a random number from the specified range. (Generally used to randomly generate animation durations)
 * @param max Upper limit of the range (default: 9000ms)
 * @param min Lower limit of the range (default: 3000ms)
 * @param unit The unit of the duration (default: ms)
 * @returns Returns a random number from the given range
 */
export const getRandomDuration = (max: number = 9000, min: number = 3000, unit: string = 'ms') => getRandomNumber(max, min) + unit

/**
 * Returns a random percentage value.
 * @param max Upper limit of the range (default: 100%)
 * @param min Lower limit of the range (default: 0%)
 * @returns Returns a random percentage value
 */
export const getRandomPercentage = (max: number = 100, min: number = 0) => getRandomNumber(max, min) + "%"
