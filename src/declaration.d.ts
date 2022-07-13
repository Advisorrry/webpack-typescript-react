declare module '*.module.css' {
  const styles: { [key: string]: string }
  export default styles
}

declare module '*.module.s[ac]ss$' {
  const styles: { [key: string]: string }
  export default styles
}
