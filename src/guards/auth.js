const isAuthenticatedGuard = (to, from, next) => {

    return new Promise(() => {
        const random = Math.random() * 100;
        if (random > 70) {
            console.log('Autenticado')
            next()
        } else {
            console.log('Bloqueado')
            next({name: 'Home'})
        }


    })
}

export default isAuthenticatedGuard;