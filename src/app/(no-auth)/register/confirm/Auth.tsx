const AuthToken = async ({ children } : { children: React.ReactNode }) => {
  const authToken = await fetch('/api/user/token', {
    method: 'GET',
  })

  console.log(authToken)

  return <>{children}</>
}

export { AuthToken };

