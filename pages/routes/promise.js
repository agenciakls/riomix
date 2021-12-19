export default function signIn() {
   return new Promise(resolve => {
      
      this.setState({ error: 'Aguarde...' });
      if (this.state.email.length === 0 || this.state.password.length === 0) {
          this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
      } else {
          let stringLet = JSON.stringify();
          await api.post('/login', {
              username: this.state.email,
              password: this.state.password,
          }, {
              headers: {
                  'Content-Type': 'application/json',
              }
          }).then(response => {
          if (response.data.status) {
              const CommonAction = CommonActions.reset({
                  index: 1,
                  routes: [
                      {name: 'Conta', params: { token: '093j2f-2309fj-h54k' }}
                  ],
              });
              this.props.navigation.dispatch(CommonAction);
          }
          else { this.setState({ error: response.data.message }); }
          })
      }
   });
}