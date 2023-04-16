export default
  (size) => {
    const sizeClass = {
      xs: "w-8 h-8 text-xs",
      sm: "w-10 h-10 text-sm",
      md: "w-12 h-12 text-base",
      lg: "w-16 h-16 text-lg",
    }

    return sizeClass[size] || ""
  }