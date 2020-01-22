export interface JwtResponseI {
  rol: string;
    dataUser:{
        id: number,
        username: string,
        email: string,
        access_token: string,
        expiresIn: string,
        grupo: string,
        activo: boolean
    }
}
