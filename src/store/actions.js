
// 全局action, 若该action较常用则应注册到全局
export const login = makeAction('LOGIN')
export const select_item = makeAction('SELECT_ITEM')

function makeAction (type) {
  // console.log('makeaction ' + type)
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
