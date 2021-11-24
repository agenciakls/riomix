export default function signIn() {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve({
            token: 'asfrihoreigheirgoerhgoeirhgergergergfgsdgijfgsfg',
            user: {
               name: 'Fábio F.',
               email: 'contato@agenciakls.com.br',
            }
         })
      }, 2000)
   });
}