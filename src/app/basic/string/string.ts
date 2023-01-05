export function sayHi(name: string): string | undefined{
  return (typeof name === 'string' && name.trim().length > 0) ? `Hello ${name}` : undefined;
}