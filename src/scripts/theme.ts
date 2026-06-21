export type Theme = "light" | "dark";

export function setTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

export function getTheme(): Theme {
  const saved = localStorage.getItem("theme");

  return saved === "dark" ? "dark" : "light";
}

export function initializeTheme(): void {
  setTheme(getTheme());
}
