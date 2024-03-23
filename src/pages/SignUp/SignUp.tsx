function SignUp() {
  return (
    <div>
      <section>
        <h1>Cadastre-se!</h1>
        <form>
          <label htmlFor="name-input">
            <input
              type="text"
              data-testid="signup__input-name"
              placeholder="Nome"
            />
            Nome
          </label>
          <label htmlFor="email-input">
            <input
              type="email"
              data-testid="signup__input-email"
              placeholder="Email"
            />
            Email
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              data-testid="signup__input-password"
              placeholder="Senha"
            />
            Senha
          </label>
          <button
            type="submit"
            data-testid="signup__button"
          >
            Cadastrar
          </button>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
