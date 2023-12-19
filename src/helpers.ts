export const calcTime = (time: number) => {
  const hours = Math.floor(time / 60)
  const mins = time % 60
  return `${hours}h ${mins}m`
}

export const convertMoney = (money: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })
  return formatter.format(money)
}

export const isPersistedState = (stateName: string) => {
  const sessionState = sessionStorage.getItem(stateName)
  return sessionState && JSON.parse(sessionState)
}
