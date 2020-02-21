function isMember(emailUser, passwordUser) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  // const emailUser = 'peter@parker.com'
  // const passwordUser = 'enajyram'
  let nameUser = ''
  users.forEach(user => {

    if (user.email === emailUser && user.password === passwordUser) {
      nameUser = user.firstName
    }
  })

  if (nameUser === '') return false

  return nameUser
}

module.exports = isMember