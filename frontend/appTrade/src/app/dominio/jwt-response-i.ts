export interface JwtResponseI {
  rol: string;
    dataUser:{
        id: number,
        username: string,
        email: string,
        accessToken: string,
        expiresIn: string,
        rol: string
    }
}
