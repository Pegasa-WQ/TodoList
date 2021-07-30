export default function (instance) {
  return {
    signIn (payload) {
      return instance.post('user/login', payload)
    },
    signUp (payload) {
      return instance.post('user/register', payload)
    }
  }
}
