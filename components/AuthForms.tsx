"use client";

export function SignInForm() {
  return (
    <form className="space-y-3">
      <div className="space-y-1">
        <label className="text-sm">Email</label>
        <input
          className="w-full rounded-xl bg-white/10 px-3 py-2 outline-none focus:ring-2 ring-accent"
          type="email"
          required
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm">Password</label>
        <input
          className="w-full rounded-xl bg-white/10 px-3 py-2 outline-none focus:ring-2 ring-accent"
          type="password"
          required
        />
      </div>
      <button
        className="btn-primary w-full rounded-xl bg-accentpy-2 font-medium hover:brightness-95"
        type="submit"
      >
        Sign in
      </button>
      <p className="text-sm text-white/70 text-center">
        No account?{" "}
        <a className="text-accent" href="#signup">
          Sign up
        </a>
      </p>
    </form>
  );
}

export function SignUpForm() {
  return (
    <form className="space-y-3">
      <div className="space-y-1">
        <label className="text-sm">Email</label>
        <input
          className="w-full rounded-xl bg-white/10 px-3 py-2 outline-none focus:ring-2 ring-accent"
          type="email"
          required
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm">Password</label>
        <input
          className="w-full rounded-xl bg-white/10 px-3 py-2 outline-none focus:ring-2 ring-accent"
          type="password"
          required
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm">Confirm Password</label>
        <input
          className="w-full rounded-xl bg-white/10 px-3 py-2 outline-none focus:ring-2 ring-accent"
          type="password"
          required
        />
      </div>
      <button
        className="btn-primary w-full rounded-xl bg-accent py-2 font-medium hover:brightness-95"
        type="submit"
      >
        Create account
      </button>
      <p className="text-sm text-white/70 text-center">
        Already have an account?{" "}
        <a className="text-accent" href="#signin">
          Sign in
        </a>
      </p>
    </form>
  );
}
