// export default function (instance) {
//   return {
//     signIn (payload) {
//       return instance.post('user/login', payload)
//         .then((result) => {
//           this.$cookie.set('accessToken', result.data.data.access_token)
//           console.log(result)
//         })
//         .catch(function (error) {
//           console.log(error)
//         })
//     },
//     signUp (payload) {
//       return instance.post('user/register', payload)
//     }
//   }
// }
