export default function Page() {
  return (
    <main className="viewport">
      <section className="panel neu-surface" aria-label="Login panel">
        <header className="panel__header">
          <h1 className="title">Welcome Back</h1>
          <p className="subtitle">Sign in to continue</p>
        </header>

        <form className="form" aria-labelledby="login-title" autoComplete="on">
          <div className="field neu-recessed">
            <label htmlFor="email" className="label">Email</label>
            <input id="email" name="email" type="email" placeholder="name@example.com" className="input with-greek-key" required />
          </div>

          <div className="field neu-recessed">
            <label htmlFor="password" className="label">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" className="input with-greek-key" required />
          </div>

          <div className="actions">
            <button type="submit" className="btn btn-primary with-egg-dart">Sign in</button>
            <button type="button" className="btn btn-ghost with-acanthus" aria-label="More options">Use single sign-on</button>
          </div>

          <div className="meta">
            <label className="checkbox">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
            <a className="link" href="#">Forgot password?</a>
          </div>
        </form>
      </section>
    </main>
  );
}
