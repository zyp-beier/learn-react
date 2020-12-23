import {atom, selector} from 'recoil'


export const userInfomation = atom({
  key: 'infomation',
  default: {
    name: '赵银萍',
    age: 20,
    job: 'font end',
    monthlySalary: 6000
  }
})

export const taxDeduction = selector({
  key: 'taxDeduction',
  get: ({get}) => {
    const infomation = get(userInfomation)
    const mothlySalary = infomation.monthlySalary
    return mothlySalary - ((mothlySalary-7000) * 0.3)
  }
})

export const addStorAtom = function(atorName,atomObj){
  atorName = atom({
      key: atomObj.key,
      default: atomObj.default || ''
  })
  return atorName
} 