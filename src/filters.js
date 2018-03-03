export default {
  keyToClass (v) {
    let className = ''
    /* eslint-disable */
    className =
      v === '火'
        ? 'fire'
        : v === '水'
          ? 'water'
          : v === '雷'
            ? 'thunder'
            : v === '氷'
              ? 'ice'
              : v === '龍'
                ? 'dragon'
                : v === '毒'
                  ? 'poison'
                  : v === '睡眠'
                    ? 'sleep'
                    : v === '麻痺'
                      ? 'paralysis'
                      : v === '爆破' ? 'blast' : v === '気絶' ? 'stun' : null
    /* eslint-enable */
    return className
  },
}
