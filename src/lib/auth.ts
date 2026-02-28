const PORTFOLIO_PASSWORD = "portfolio2024";

const SESSION_KEY = "portfolio_authenticated";

export function checkPassword(password: string): boolean {
  return password === PORTFOLIO_PASSWORD;
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === "true";
}

export function login(password: string): boolean {
  if (checkPassword(password)) {
    sessionStorage.setItem(SESSION_KEY, "true");
    return true;
  }
  return false;
}

export function logout(): void {
  sessionStorage.removeItem(SESSION_KEY);
}
